import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer({ copy = 'All Rights Reserved' }) {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <Link to="/" className="footer-logo">EASY.INC</Link>
        <span className="footer-copy">© 2026 EASY.INC — {copy}</span>
      </div>
    </footer>
  )
}
