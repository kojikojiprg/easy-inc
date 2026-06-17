import { useParams, Link, Navigate } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import { newsArticles } from '../data/news'
import { useLanguage } from '../context/LanguageContext'
import './News.css'

function ArticleBody({ blocks, lang, t }) {
  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2': return <h2 key={i}>{block.text}</h2>
          case 'p': return <p key={i}>{block.text}</p>
          case 'blockquote': return (
            <blockquote key={i}>
              "{block.en}"
              {lang === 'ja' && <span className="ja">{block.ja}</span>}
              <cite>{block.cite}</cite>
            </blockquote>
          )
          case 'feature-box': return (
            <div className="feature-box" key={i}>
              <h3>{block.title}</h3>
              <ul>{block.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          )
          case 'partner-box': return (
            <div className="partner-box" key={i}>
              {block.partners.map(p => (
                <div className="partner-item" key={p.name}>
                  <div className="partner-name">{p.name}</div>
                  <div className="partner-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          )
          case 'president-sign': return (
            <div className="president-sign" key={i}>
              <div className="president-avatar">🙂</div>
              <div>
                <div className="president-name">{t('Easy Yamada', '山田 イージー')}</div>
                <div className="president-title">{t('Representative Director / Founder & CEO', '代表取締役 / Founder & CEO')}</div>
              </div>
            </div>
          )
          case 'note': return <p key={i} style={{marginTop:'1.4rem',fontSize:'0.88rem',opacity:0.45,fontStyle:'italic'}}>{block.text}</p>
          default: return null
        }
      })}
    </div>
  )
}

export default function NewsArticle() {
  useFadeIn()
  const { id } = useParams()
  const { lang, t } = useLanguage()
  const articles = newsArticles[lang]
  const article = articles.find(a => a.id === id)
  if (!article) return <Navigate to="/news" replace />

  const idx = articles.indexOf(article)
  const prev = articles[idx + 1]
  const next = articles[idx - 1]

  return (
    <div className="article-wrap">
      <div className="article-meta">
        <span className="article-tag">{article.tag}</span>
        <span className="article-date">{article.date}</span>
      </div>
      <h1 className="article-title" dangerouslySetInnerHTML={{__html: article.titleHtml}} />
      <p className="article-lead">{article.lead}</p>
      <ArticleBody blocks={article.body} lang={lang} t={t} />

      <div className="article-nav">
        {prev ? (
          <Link to={`/news/${prev.id}`} className="article-nav-link prev">
            <span className="nav-dir">{t('← Previous', '← 前の記事')}</span>
            <span className="nav-label">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/news/${next.id}`} className="article-nav-link next">
            <span className="nav-dir">{t('Next →', '次の記事 →')}</span>
            <span className="nav-label">{next.title}</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
