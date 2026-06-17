import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import { useLanguage } from '../context/LanguageContext'
import './NotFound.css'

export default function NotFound() {
  useFadeIn()
  const { lang, t } = useLanguage()

  return (
    <div className="notfound-page">
      <div className="notfound-container fade-in">
        <div className="notfound-code">404</div>
        <div className="notfound-label">PAGE NOT FOUND</div>
        <h1 className="notfound-headline">
          {t('This is easy too.', 'これもイージー。')}
        </h1>
        <p className="notfound-sub">
          {t(<>The page you're looking for doesn't exist.<br />But those who live easy don't panic, even when lost.</>, <>お探しのページは存在しません。<br />しかしイージーに生きる者は、迷子になっても動じない。</>)}
        </p>
        <blockquote className="notfound-quote">
          "Not all those who wander are lost."
          {lang === 'ja' && <span className="ja">「さまよう者が皆、迷子とは限らない。」</span>}
          <cite>— J.R.R. Tolkien</cite>
        </blockquote>
        <Link to="/" className="notfound-btn">
          {t('Back to HOME', 'HOME へ戻る')}
        </Link>
      </div>
    </div>
  )
}
