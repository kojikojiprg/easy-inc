import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLanguage } from '../context/LanguageContext'

const footerCopy = {
  '/news':     { en: 'News gets updated, easily (probably).', ja: 'ニュースはイージーに更新されます（たぶん）' },
  '/religion': { en: 'A-easy-men.', ja: 'アーイージー。' },
  '/shisha':   { en: 'Shisha is Easy. Always has been.', ja: 'Shisha is Easy. Always has been.' },
  '/careers':  { en: "We're hiring, easily. Probably.", ja: '採用もイージーです。たぶん。' },
  '/results':  { en: 'All results per our own research. "Our" being one founder.', ja: '全ての実績は当社調べです。当社とは代表一名です。' },
  '/team':     { en: "Employee statements are their own. (They're easy people too.)", ja: '社員の発言は本人の意志によるものです（本人もイージーな方々です）' },
}

export default function Layout() {
  const { pathname } = useLocation()
  const { t } = useLanguage()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  const entry = footerCopy[pathname]
  const copy = entry ? t(entry.en, entry.ja) : 'All Rights Reserved'
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer copy={copy} />
    </>
  )
}
