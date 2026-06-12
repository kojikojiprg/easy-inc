import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import './Careers.css'

const JOBS = [
  { id: 'job1', dept: 'Engineering', type: '正社員', badge: 'NEW', filter: 'engineering',
    title: '何かをイージーにするエンジニア',
    loc: 'どこでも', salary: '希望を言ってください', hours: 'いつでも',
    modalDept: 'Engineering',
    body: '何かをイージーにしてください。何かはあなたが決めていいです。「これイージーにしたいな」と思ったことを、イージーにしてください。それが仕事です。週報もイージーです（任意）。',
    required: ['パソコンが開ける','「イージー」という言葉に抵抗がない','何かをイージーにしたいという気持ち'],
    welcome: ['TypeScript / Python / その他なんでも','シーシャが好き','昼寝が得意'],
    cta: 'イージーに応募する →', mailto: 'careers@easy-inc.jp?subject=エンジニア応募' },
  { id: 'job2', dept: 'Design', type: '正社員', badge: null, filter: 'design',
    title: '見た目をイージーにするデザイナー',
    loc: 'フルリモート', salary: '話し合い', hours: 'ゆっくりどうぞ',
    modalDept: 'Design',
    body: '見た目をイージーにしてください。「これ、ごちゃごちゃしてるな」と思ったらシンプルにしてください。「これ、難しそうに見えるな」と思ったらわかりやすくしてください。それだけです。',
    required: ['Figmaが使える（またはなんか他のツール）','「ごちゃごちゃ」を「すっきり」に変える感覚','ポートフォリオ（あれば。なければ手描きでも可）'],
    welcome: [],
    cta: 'イージーに応募する →', mailto: 'careers@easy-inc.jp?subject=デザイナー応募' },
  { id: 'job3', dept: 'Special', type: '正社員', badge: '大注目', filter: 'easy',
    title: 'イージー推進部長（新設ポジション）',
    loc: 'オフィス（猫がいる）', salary: 'シーシャ代込み', hours: '昼寝込み',
    modalDept: 'Special Position',
    body: '社内の「難しいもの」を見つけて、「イージーにしろ」と言う役職です。具体的な解決策は考えなくていいです。「これイージーじゃない」と声に出すだけで、周囲が動きます。肩書きは「イージー推進部長」です。名刺に印刷します。',
    required: ['「これイージーじゃない」と言える勇気','猫と仲良くできる（イージーみけとの面接あり）','特になし'],
    welcome: [],
    cta: '部長になる →', mailto: 'careers@easy-inc.jp?subject=イージー推進部長応募' },
  { id: 'job4', dept: 'Executive', type: '役員候補', badge: null, filter: 'easy',
    title: '最高イージー責任者（CeO: Chief easy Officer）',
    loc: 'どこでも（宇宙以外）', salary: '要相談（高め希望）', hours: '基本定時',
    modalDept: 'Executive',
    body: '会社全体の「イージー度」に責任を持つ役員です。「全体的にイージーか？」を常に監視し、イージーでない状況が発生したら「もっとイージーに」と指示を出します。\n\nCEO = Chief Executive Officer（経営の責任者）\nCeO = Chief easy Officer（イージーの責任者）\n当社ではCeOの方が重要です。',
    required: [], welcome: [],
    cta: '役員になる（イージーに）→', mailto: 'careers@easy-inc.jp?subject=CeO応募' },
  { id: 'job5', dept: 'Mascot', type: '業務委託', badge: null, filter: 'easy',
    title: '社内マスコット補佐（猫枠・人間も可）',
    loc: 'オフィス必須', salary: 'おやつ支給', hours: '自由',
    modalDept: 'Mascot Division',
    body: '社内猫「イージーみけ」の補佐業務全般。みけが昼寝している間のオフィス雰囲気の維持、みけが機嫌を損ねた際の対応、みけが採用面接に参加する際のアシスタントなどが主な業務です。猫枠ですが人間も応募可能です。',
    required: ['猫が好き（嫌いな場合、みけが察知します）','おやつを勝手に食べない','昼寝を邪魔しない'],
    welcome: [],
    cta: 'みけに会いに来る →', mailto: 'careers@easy-inc.jp?subject=マスコット補佐応募' },
]
const FILTERS = ['all','engineering','design','easy']

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
  const filtered = filter === 'all' ? JOBS : JOBS.filter(j => j.filter === filter)

  return (
    <>
      <div className="page-hero">
        <div>
          <p className="page-eyebrow fade-in">Careers at EASY.INC</p>
          <h1 className="page-title fade-in">採用、<br /><em>イージー。</em></h1>
        </div>
        <div className="hero-right fade-in">
          <p>私たちは今、仲間を探しています。難しいことは何もありません。このページを最後まで読めた方は、すでに採用要件を満たしています。</p>
          <p style={{marginTop:'1.2rem',fontStyle:'italic',opacity:0.35,fontSize:'0.85rem'}}>"Easy come, easy go. But our team stays." — EASY.INC HR部</p>
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
                {['なんとなくやる気がある','パソコンが開ける','シーシャを吸える（種類不問）','「イージー」という言葉に嫌悪感がない','定時に帰れる（これは必須）'].map(r => (
                  <li key={r} style={{display:'flex',gap:'1rem',alignItems:'flex-start',fontSize:'0.92rem',opacity:0.75}}><span style={{color:'var(--yellow)',flexShrink:0}}>✦</span>{r}</li>
                ))}
              </ul>
            </div>
            <div style={{background:'var(--black)',padding:'3rem 2.5rem',borderLeft:'1px solid var(--border)'}}>
              <div style={{fontSize:'0.68rem',letterSpacing:'0.25em',textTransform:'uppercase',color:'var(--yellow)',marginBottom:'1.5rem',opacity:0.8}}>歓迎条件</div>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'1rem'}}>
                {['昼寝が得意','「これイージーにできるな」が口癖','1日1本以上シーシャを吸う','名前に「イージー」が入っている（加点方式）','このページを最後まで読んだ（あなたは今ここです）'].map(r => (
                  <li key={r} style={{display:'flex',gap:'1rem',alignItems:'flex-start',fontSize:'0.92rem',opacity:0.75}}><span style={{color:'var(--yellow)',flexShrink:0}}>◎</span>{r}</li>
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
            {[['01','書類選考','メールが届いていれば通過。届いていなければ、迷惑メールフォルダを確認してください。','所要時間：1秒'],
              ['02','面接（1回のみ）','質問は1問のみ。<strong>「好きな食べ物は何ですか？」</strong>正解はありません。','所要時間：5分'],
              ['03','内定','面接当日にお伝えします。「考えます」と言った場合も、翌日にお伝えします。','所要時間：イージー'],
              ['04','入社','ご都合のよい日にお越しください。入社手続きも、できる限りイージーにしています。','所要時間：ゆっくりどうぞ'],
            ].map(([num, title, desc, time]) => (
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
            {[['🎯','本質だけに集中する','不必要な会議、不必要なプロセス、不必要な複雑さを徹底的に排除します。あなたの時間は、本当に大切なことだけに使われます。','"The ability to simplify means to eliminate the unnecessary so that the necessary may speak." — Hans Hofmann'],
              ['😴','昼寝は権利である','15〜20分の仮眠は公式に推奨されています。「仮眠室」という名の会議室があります。予約不要。起こしません。','"A rested mind is an easy mind." — EASY.INC Employee Handbook, p.1（全1ページ）'],
              ['🚬','シーシャは無限に出る','オフィスのシーシャ台に上限はありません。吸いすぎ注意という規定もありません。「シーシャ代」という経費項目もありません。全部会社持ちです。','"Shishas are for people who can\'t make it on their own." — Jackie Chan（本当にこう言ったらしい）'],
            ].map(([icon, title, desc, quote]) => (
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
            {[['🏠','フルリモート可','布団の中から働いても怒りません。ただしカメラオフを推奨します（お互いのために）。'],
              ['⏰','コアタイム：なし','「コアタイムを決めること」がイージーではないため、設定していません。起きたら仕事してください。'],
              ['📚','学習支援 無制限','「これ買いたい」と言えばだいたい通ります。申請フォームはありません。Slackで「買っていいですか」と聞くだけです。'],
              ['💤','昼寝手当','昼寝した日は+500円。証明方法：「昼寝しました」と申告するだけ。確認はしません。イージーに申告してください。'],
              ['🚬','シーシャ吸い放題','前述の通り。リモートの場合はシーシャ代を月1万円まで経費申請できます。シーシャカフェでもイージーに。'],
              ['🌴','有休：存在しない','休みたい日は休んでください。申請不要。「今日休みます」とSlackに書けば十分です。既読スルーで承認とします。'],
              ['💰','給与：要相談','「いくら欲しいですか？」という質問から始まります。高い方が頑張れるならそれがイージーです。話し合いましょう。'],
              ['🐈','ペット同伴可','社内猫「イージーみけ」と仲良くできる方に限ります。みけの機嫌が最終面接の合否に影響することがあります。'],
            ].map(([icon, title, desc]) => (
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
