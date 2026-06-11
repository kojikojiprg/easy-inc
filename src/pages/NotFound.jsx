import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import './NotFound.css'

export default function NotFound() {
  useFadeIn()

  return (
    <div className="notfound-page">
      <div className="notfound-container fade-in">
        <div className="notfound-code">404</div>
        <div className="notfound-label">PAGE NOT FOUND</div>
        <h1 className="notfound-headline">
          これもイージー。
        </h1>
        <p className="notfound-sub">
          お探しのページは存在しません。<br />
          しかしイージーに生きる者は、迷子になっても動じない。
        </p>
        <blockquote className="notfound-quote">
          "Not all those who wander are lost."
          <span className="ja">「さまよう者が皆、迷子とは限らない。」</span>
          <cite>— J.R.R. Tolkien</cite>
        </blockquote>
        <Link to="/" className="notfound-btn">
          HOME へ戻る
        </Link>
      </div>
    </div>
  )
}
