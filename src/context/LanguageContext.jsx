import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'easy-inc-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return saved
    return navigator.language.startsWith('ja') ? 'ja' : 'en'
  })

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
