import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const footerCopy = {
  '/news':     'ニュースはイージーに更新されます（たぶん）',
  '/religion': 'アーイージー。',
  '/shisha':   'Shisha is Easy. Always has been.',
  '/careers':  '採用もイージーです。たぶん。',
  '/results':  '全ての実績は当社調べです。当社とは代表一名です。',
  '/team':     '社員の発言は本人の意志によるものです（本人もイージーな方々です）',
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  const copy = footerCopy[pathname] || 'All Rights Reserved'
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer copy={copy} />
    </>
  )
}
