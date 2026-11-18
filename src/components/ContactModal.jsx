import { useEffect, useRef, useState } from 'react'
import { LoaderCircle, Send, X } from 'lucide-react'
import '../styles/ContactModal.css'

const emptyForm = {
  firstName: '',
  lastName: '',
  workEmail: '',
  phoneNumber: '',
  company: '',
  message: '',
}

function ContactModal({ onClose }) {
  const [form, setForm] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const dialogRef = useRef(null)
  const firstNameRef = useRef(null)

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => {
      firstNameRef.current?.focus()
    }, 0)

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusableElements = dialogRef.current.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled])',
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [onClose])

  function updateField(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  async function submitForm(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'We could not submit your request.')
      }

      setForm(emptyForm)
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. Our team will be in touch soon.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof TypeError
            ? 'We could not reach the contact service. Please try again.'
            : error.message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div
      className="contact-backdrop"
      onMouseDown={handleBackdropClick}
    >
      <section
        ref={dialogRef}
        className="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
      >
        <header className="contact-dialog-header">
          <div>
            <h2 id="contact-dialog-title">Contact Us</h2>
            <p id="contact-dialog-description">
              Our team will review your request and respond within 24 hours.
            </p>
          </div>
          <button
            type="button"
            className="contact-close-button"
            onClick={onClose}
            aria-label="Close contact form"
          >
            <X size={18} />
          </button>
        </header>

        <form className="contact-form" onSubmit={submitForm}>
          <div className="contact-fields">
            <label className="contact-field">
              <span>First name <b aria-hidden="true">*</b></span>
              <input
                ref={firstNameRef}
                name="firstName"
                value={form.firstName}
                onChange={updateField}
                autoComplete="given-name"
                maxLength={100}
                placeholder="Ravi"
                required
              />
            </label>

            <label className="contact-field">
              <span>Last name <b aria-hidden="true">*</b></span>
              <input
                name="lastName"
                value={form.lastName}
                onChange={updateField}
                autoComplete="family-name"
                maxLength={100}
                placeholder="Sharma"
                required
              />
            </label>

            <label className="contact-field contact-field-wide">
              <span>Work email <b aria-hidden="true">*</b></span>
              <input
                name="workEmail"
                type="email"
                value={form.workEmail}
                onChange={updateField}
                autoComplete="email"
                maxLength={254}
                placeholder="name@company.com"
                required
              />
            </label>

            <label className="contact-field">
              <span>Phone number</span>
              <input
                name="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={updateField}
                autoComplete="tel"
                maxLength={50}
                placeholder="+91 98765 xxxxx"
              />
            </label>

            <label className="contact-field">
              <span>Company / Organisation</span>
              <input
                name="company"
                value={form.company}
                onChange={updateField}
                autoComplete="organization"
                maxLength={200}
                placeholder="Your company or organization"
              />
            </label>

            <label className="contact-field contact-field-wide">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                maxLength={2000}
                placeholder="Tell us about your requirements..."
                rows={3}
              />
            </label>
          </div>

          <p className="contact-consent">
            By submitting, you agree to be contacted about your request.
          </p>

          {status && (
            <p
              className={`contact-status contact-status-${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {status.message}
            </p>
          )}

          <div className="contact-form-actions">
            <button
              type="button"
              className="contact-cancel-button"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="contact-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <LoaderCircle className="contact-submit-spinner" size={17} />
              ) : (
                <Send size={17} />
              )}
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactModal
