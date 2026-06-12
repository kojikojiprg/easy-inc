import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import { newsArticles } from '../data/news'
import './News.css'

export default function NewsList() {
  useFadeIn()
  const [featured] = newsArticles

  return (
    <>
      <section className="page-hero container">
        <p className="section-label">News & Updates</p>
        <h1 className="section-heading">
          Latest <em>Updates.</em>
        </h1>
        <p className="page-hero-desc">
          EASY.INCの最新情報。イージーにお読みください。長い記事は書きません。なぜならイージーではないからです。
        </p>
      </section>

      {/* FEATURED */}
      <section className="news-featured container fade-in">
        <p className="section-label">最新記事</p>
        <Link to={`/news/${featured.id}`} className="featured-card">
          <div className="featured-meta">
            <span className="news-tag">{featured.tag}</span>
            <span className="news-date">{featured.date}</span>
          </div>
          <h2 className="featured-title">{featured.title}</h2>
          <p className="featured-lead">{featured.lead}</p>
          {featured.quote && (
            <blockquote>
              "{featured.quote.en}"
              <span className="ja">{featured.quote.ja}</span>
              <cite>{featured.quote.cite}</cite>
            </blockquote>
          )}
          <span className="featured-cta">続きを読む →</span>
        </Link>
      </section>

      {/* ALL ARTICLES */}
      <section className="news-all container">
        <p className="section-label">すべての記事</p>
        <ul className="news-list">
          {newsArticles.map((a) => (
            <li key={a.id} className="news-item fade-in">
              <Link to={`/news/${a.id}`} className="news-link">
                <span className="news-date">{a.date}</span>
                <span className="news-title-text">{a.title}</span>
                <span className="news-tag">{a.tag}</span>
                <span className="news-arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
