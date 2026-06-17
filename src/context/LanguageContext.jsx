import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'easy-inc-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEY) || 'en')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const toggleLang = () => setLang(l => (l === 'en' ? 'ja' : 'en'))
  const t = (en, ja) => (lang === 'ja' ? ja : en)

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
