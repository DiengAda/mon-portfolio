import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'FR'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const value = useMemo(() => {
    const dictionary = translations[language] || translations.FR

    const t = (key) => {
      const value = key
        .split('.')
        .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dictionary)
      return value !== undefined ? value : key
    }

    return { language, setLanguage, t }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
