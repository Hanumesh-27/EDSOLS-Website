# EDSOLS Website

The site uses React and Vite for the frontend, with an Express API and MySQL for contact form submissions.

## Run locally

1. Install dependencies with `npm install`.
2. Run `database/schema.sql` in your MySQL client to create the database and contact table.
3. Copy `.env.example` to `.env` and set your MySQL connection values. Keep `.env` private.
4. Run `npm run dev` to start the Vite frontend and API.

The contact API is available at `/api/contact`. The Vite development server proxies API requests to Express. For production, run `npm run build` and then `npm start`; Express serves the built frontend and API from the same origin.
