import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/business',  label: 'Business' },
  { to: '/careers',   label: 'Careers' },
  { to: '/results',   label: 'Results' },
  { to: '/team',      label: 'Team' },
  { to: '/religion',  label: 'Religion' },
  { to: '/shisha',    label: 'Shisha' },
  { to: '/news',      label: 'News' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="nav-top">
          <NavLink to="/" className="nav-logo">EASY.INC</NavLink>
          <span className="nav-tagline">Make It Easy</span>
          <button className={`nav-hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="メニュー">
            <span /><span /><span />
          </button>
        </div>
        <ul className={`nav-tabs ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
