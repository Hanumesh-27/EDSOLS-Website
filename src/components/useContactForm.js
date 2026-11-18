import { createContext, useContext } from 'react'

export const ContactFormContext = createContext(undefined)

export function useContactForm() {
  const context = useContext(ContactFormContext)

  if (!context) {
    throw new Error('useContactForm must be used within ContactFormProvider')
  }

  return context
}
