
import 'dotenv/config'
import express from 'express'
import mysql from 'mysql2/promise'
import path from 'node:path'
import fs from 'node:fs'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const app = express()
const port = Number(process.env.PORT || 3001)

const serverDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectDirectory = path.resolve(serverDirectory, '..')

let pool

app.use(express.json({ limit: '16kb' }))

// Render health check
app.get('/health', (request, response) => {
  response.status(200).json({ status: 'ok' })
})

// Database connection
function getDatabasePool() {
  if (pool) return pool

  const requiredVariables = [
    'DB_HOST',
    'DB_USER',
    'DB_PASSWORD',
    'DB_NAME',
  ]

  const missingVariables = requiredVariables.filter(
    (name) => process.env[name] === undefined,
  )

  if (missingVariables.length > 0) {
    const error = new Error(
      `Missing MySQL configuration: ${missingVariables.join(', ')}`,
    )
    error.code = 'DB_CONFIG_MISSING'
    throw error
  }

  const databasePort = Number(process.env.DB_PORT || 3306)

  if (
    !Number.isInteger(databasePort) ||
    databasePort < 1 ||
    databasePort > 65535
  ) {
    const error = new Error('DB_PORT must be a valid TCP port.')
    error.code = 'DB_CONFIG_INVALID'
    throw error
  }

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: databasePort,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4',
    ssl: {
      ca: process.env.DB_SSL_CA
        ? fs.readFileSync(
            path.resolve(projectDirectory, process.env.DB_SSL_CA),
          )
        : undefined,
      rejectUnauthorized: true,
    },
  })

  return pool
}

// Contact form validation
function validateSubmission(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return {
      errors: {
        form: 'Please submit a valid contact request.',
      },
    }
  }

  const limits = {
    firstName: 100,
    lastName: 100,
    workEmail: 254,
    phoneNumber: 50,
    company: 200,
    message: 2000,
  }

  const values = {}
  const errors = {}

  for (const [field, maxLength] of Object.entries(limits)) {
    const rawValue = body[field]

    if (rawValue !== undefined && typeof rawValue !== 'string') {
      errors[field] = 'This field must be text.'
      continue
    }

    const value = typeof rawValue === 'string' ? rawValue.trim() : ''

    if (value.length > maxLength) {
      errors[field] = `This field must be ${maxLength} characters or fewer.`
      continue
    }

    values[field] = value
  }

  for (const field of ['firstName', 'lastName', 'workEmail']) {
    if (!values[field] && !errors[field]) {
      errors[field] = 'This field is required.'
    }
  }

  if (
    values.workEmail &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail)
  ) {
    errors.workEmail = 'Enter a valid email address.'
  }

  return { values, errors }
}

// Contact form API
app.post('/api/contact', async (request, response) => {
  const { values, errors } = validateSubmission(request.body)

  if (Object.keys(errors).length > 0) {
    return response.status(400).json({
      message: 'Please check the contact form and try again.',
      errors,
    })
  }

  try {
    const database = getDatabasePool()

    await database.execute(
      `INSERT INTO contact_submissions
        (first_name, last_name, work_email, phone_number, company, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        values.firstName,
        values.lastName,
        values.workEmail,
        values.phoneNumber || null,
        values.company || null,
        values.message || null,
      ],
    )

    return response.status(201).json({
      message: 'Your request has been submitted successfully.',
    })
  } catch (error) {
    console.error('Contact submission failed:', {
      code: error.code,
      message: error.message,
    })

    const isConfigurationError = String(error.code || '').startsWith(
      'DB_CONFIG_',
    )

    return response
      .status(isConfigurationError ? 503 : 500)
      .json({
        message: isConfigurationError
          ? 'The contact service is not configured yet. Please try again later.'
          : 'We could not submit your request. Please try again.',
      })
  }
})

// Error handling middleware
app.use((error, request, response, next) => {
  if (response.headersSent) return next(error)

  if (error.type === 'entity.parse.failed') {
    return response.status(400).json({
      message: 'Request body must be valid JSON.',
    })
  }

  if (error.type === 'entity.too.large') {
    return response.status(413).json({
      message: 'Request body is too large.',
    })
  }

  console.error('Request failed:', {
    method: request.method,
    path: request.path,
    code: error.code,
    message: error.message,
  })

  return response.status(500).json({
    message: 'An unexpected server error occurred.',
  })
})

// Start server for Render
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`EDSOLS API listening on http://0.0.0.0:${port}`)
})

// Graceful shutdown
function shutdown() {
  server.close(async () => {
    if (pool) await pool.end()
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
