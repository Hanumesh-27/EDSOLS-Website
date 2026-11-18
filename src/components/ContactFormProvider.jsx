import { useCallback, useState } from 'react'
import ContactModal from './ContactModal'
import { ContactFormContext } from './useContactForm'

function ContactFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openContactForm = useCallback(() => setIsOpen(true), [])
  const closeContactForm = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <ContactFormContext.Provider value={{ openContactForm }}>
        {children}
      </ContactFormContext.Provider>
      {isOpen && <ContactModal onClose={closeContactForm} />}
    </>
  )
}

export default ContactFormProvider
