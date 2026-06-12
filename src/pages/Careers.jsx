import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { requirements, process, culture, benefits, jobs } from '../data/careers'
import './Careers.css'

const FILTERS = ['all', 'engineering', 'design', 'easy']

function Modal({ job, onClose }) {
  if (!job) return null
  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-dept">{job.modalDept}</div>
        <div className="modal-title">{job.title}</div>
        <div className="modal-meta">
          <div className="modal-meta-item"><label>雇用形態</label><span>{job.type}</span></div>
          <div className="modal-meta-item"><label>勤務地</label><span>{job.loc}</span></div>
          <div className="modal-meta-item"><label>年収</label><span>{job.salary}</span></div>
        </div>
        {job.body.split('\n\n').map((para, i) => (
          <div className="modal-section" key={i}>{i === 0 && <h4>仕事内容</h4>}<p>{para}</p></div>
        ))}
        {job.required.length > 0 && (
          <div className="modal-section"><h4>必須スキル</h4><ul>{job.required.map(r => <li key={r}>{r}</li>)}</ul></div>
        )}
        {job.welcome.length > 0 && (
          <div className="modal-section"><h4>歓迎スキル</h4><ul>{job.welcome.map(w => <li key={w}>{w}</li>)}</ul></div>
        )}
        <a href={`mailto:${job.mailto}`} className="modal-apply">{job.cta}</a>
      </div>
    </div>
  )
}

export default function Careers() {
  useFadeIn()
  const [filter, setFilter] = useState('all')
  const [modal, setModal] = useState(null)
  const filtered = filter === 'all' ? jobs : jobs.filter(j => j.filter === filter)

  return (
    <>
      <div className="page-hero">
        <div>
          <p className="page-eyebrow fade-in">Careers at EASY.INC</p>
          <h1 className="page-title fade-in">採用、<br /><em>イージー。</em></h1>
        </div>
        <div className="hero-right fade-in">
          <p>私たちは今、仲間を探しています。難しいことは何もありません。このページを最後まで読めた方は、すでに採用要件を満たしています。</p>
          <p style={{marginTop:'1.2rem',fontStyle:'italic',opacity:0.35,fontSize:'0.85rem'}}>
            "Easy come, easy go. But our team stays." — EASY.INC HR部
          </p>
        </div>
      </div>

      {/* 応募要件 */}
      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Requirements</p>
          <h2 className="section-heading fade-in">応募条件（全職種共通）</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)'}} className="fade-in">
            <div style={{background:'var(--black)',padding:'3rem 2.5rem'}}>
              <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',textTransform:'uppercase',color:'var(--yellow)',marginBottom:'1.5rem',opacity:0.8}}>必須条件</div>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'1rem'}}>
                {requirements.required.map(r => (
                  <li key={r} style={{display:'flex',gap:'1rem',alignItems:'flex-start',fontSize:'0.92rem',opacity:0.75}}>
                    <span style={{color:'var(--yellow)',flexShrink:0}}>✦</span>{r}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{background:'var(--black)',padding:'3rem 2.5rem',borderLeft:'1px solid var(--border)'}}>
              <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',textTransform:'uppercase',color:'var(--yellow)',marginBottom:'1.5rem',opacity:0.8}}>歓迎条件</div>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'1rem'}}>
                {requirements.welcomed.map(r => (
                  <li key={r} style={{display:'flex',gap:'1rem',alignItems:'flex-start',fontSize:'0.92rem',opacity:0.75}}>
                    <span style={{color:'var(--yellow)',flexShrink:0}}>◎</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{marginTop:'1.5rem',fontSize:'0.72rem',opacity:0.3,fontStyle:'italic'}}>※ 学歴・職歴・資格・語学力・技術スキルについては、「あれば嬉しい」程度です。イージーに来てください。</p>
        </div>
      </div>

      {/* 選考プロセス */}
      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Selection Process</p>
          <h2 className="section-heading fade-in">選考プロセス</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)'}} className="fade-in">
            {process.map(({ num, title, desc, time }) => (
              <div key={num} style={{background:'var(--black)',padding:'2.5rem 2rem',textAlign:'center',borderLeft: num!=='01' ? '1px solid var(--border)' : 'none'}}>
                <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:900,fontSize:'2.5rem',color:'var(--yellow)',opacity:0.2,lineHeight:1,marginBottom:'1rem'}}>{num}</div>
                <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:'0.95rem',marginBottom:'0.8rem'}}>{title}</div>
                <div style={{fontSize:'0.82rem',opacity:0.55,lineHeight:1.7}} dangerouslySetInnerHTML={{__html:`${desc}<br/><br/><em style="opacity:0.4">${time}</em>`}} />
              </div>
            ))}
          </div>
          <p style={{marginTop:'1.5rem',fontSize:'0.72rem',opacity:0.3,fontStyle:'italic'}}>※ 不採用の場合も、できる限りイージーにお伝えします。「ご縁がありませんでした。イージーに次へ行ってください」とお伝えします。</p>
        </div>
      </div>

      {/* カルチャー */}
      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Culture</p>
          <h2 className="section-heading fade-in">EASY.INC で働くということ</h2>
          <div className="culture-grid">
            {culture.map(({ icon, title, desc, quote }) => (
              <div className="culture-card fade-in" key={title}>
                <div className="culture-icon">{icon}</div>
                <h3 className="culture-title">{title}</h3>
                <p className="culture-desc">{desc}</p>
                <p className="culture-quote">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 待遇 */}
      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Benefits & Perks</p>
          <h2 className="section-heading fade-in">待遇（イージーに充実）</h2>
          <div className="perks-grid">
            {benefits.map(({ icon, title, desc }) => (
              <div className="perk-card fade-in" key={title}>
                <div className="perk-icon">{icon}</div>
                <h3 className="perk-title">{title}</h3>
                <p className="perk-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 求人 */}
      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Open Positions</p>
          <h2 className="section-heading fade-in">募集中のポジション</h2>
          <p style={{fontSize:'0.8rem',opacity:0.4,fontStyle:'italic',marginBottom:'2rem'}}>※ 全職種の仕事内容は「イージーにすること」です。部署が違うだけで、やることは同じです。</p>
          <div className="job-filter fade-in">
            {[['all','All'],['engineering','Engineering'],['design','Design'],['easy','イージー系']].map(([val, label]) => (
              <button key={val} className={`filter-btn${filter===val?' active':''}`} onClick={() => setFilter(val)}>{label}</button>
            ))}
          </div>
          <div className="job-list" id="jobList">
            {filtered.map(j => (
              <div className="job-item fade-in" key={j.id} onClick={() => setModal(j)}>
                <div>
                  <div className="job-top">
                    <span className="job-dept">{j.dept}</span>
                    <span className="job-type">{j.type}</span>
                    {j.badge && <span className="job-new">{j.badge}</span>}
                  </div>
                  <div className="job-title">{j.title}</div>
                  <div className="job-meta"><span>📍 {j.loc}</span><span>💰 {j.salary}</span><span>🕐 {j.hours}</span></div>
                </div>
                <div className="job-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* オープン応募 */}
      <div className="wrap">
        <div className="section-block" style={{textAlign:'center'}}>
          <p className="section-label fade-in" style={{textAlign:'center'}}>Open Application</p>
          <h2 className="fade-in" style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:'clamp(1.8rem,3vw,2.6rem)',marginBottom:'1.5rem',textAlign:'center'}}>ポジションが気に入らない？</h2>
          <p className="fade-in" style={{opacity:0.5,margin:'0 auto 3rem',fontSize:'0.95rem',lineHeight:1.85}}>「イージーにやりたいことがある」という方は、その気持ちだけ送ってください。ポジション名は一緒に考えます。</p>
          <a href="mailto:careers@easy-inc.jp" className="fade-in" style={{display:'inline-block',background:'var(--yellow)',color:'var(--black)',fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:'0.85rem',letterSpacing:'0.14em',textTransform:'uppercase',padding:'1rem 2.5rem',textDecoration:'none'}}>
            イージーに連絡する →
          </a>
        </div>
      </div>

      <Modal job={modal} onClose={() => setModal(null)} />
    </>
  )
}
