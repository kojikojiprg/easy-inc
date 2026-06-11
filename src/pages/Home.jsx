import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import './Index.css'

const QUOTES = [
  { text: 'Easy does it.', ja: '「焦らず、着実に。」', attr: 'English Proverb' },
  { text: 'Nothing is easy to the unwilling.', ja: '「やる気のない者に、イージーなことなど何もない。」', attr: 'Thomas Fuller' },
  { text: 'Easy reading is damned hard writing.', ja: '「読みやすい文章を書くのは、恐ろしく難しい。」', attr: 'Nathaniel Hawthorne' },
  { text: 'Easy is right. Begin right and you are easy. Continue easy and you are right.', ja: '「イージーこそが正しい。正しく始めれば自ずとイージーになる。イージーであり続ければ、それが正しいことになる。」', attr: 'Zhuangzi（荘子）' },
  { text: 'If you make it easy for people to understand, they will love you for it.', ja: '「人々が理解しやすくすれば、彼らはあなたを愛するだろう。」', attr: 'Brian Tracy' },
  { text: 'Great design is making something memorable and meaningful. Easy design is making something simple out of something complex.', ja: '「優れたデザインとは記憶に残り意味のあるものを作ること。イージーなデザインとは、複雑なものをシンプルにすること。」', attr: 'Dieter Rams（ディーター・ラムス）' },
  { text: 'Take it easy — but take it.', ja: '「イージーに生きろ——でも、ちゃんと生きろ。」', attr: 'Studs Terkel' },
  { text: 'Simplicity is the ultimate sophistication. The ability to simplify means to eliminate the unnecessary so that the necessary may speak.', ja: '「シンプルさは究極の洗練である。シンプルにする能力とは、不要なものを取り除き、必要なものを語らせることだ。」', attr: 'Hans Hofmann' },
  { text: 'Easy is not lazy. Easy is the result of discipline, clarity, and relentless refinement.', ja: '「イージーは怠けることではない。それは規律と明確さと、たゆまぬ洗練の結果だ。」', attr: 'EASY.INC' },
]
const SERVICES = [
  { num: '01', icon: '⚡', name: 'Easy Strategy', desc: '複雑な課題を、誰もが理解できる戦略へ。本質だけを残す思考の整理術。' },
  { num: '02', icon: '◎', name: 'Easy Design',   desc: '直感的なデザインは、使い手を迷わせない。見た目より先に、体験を設計する。' },
  { num: '03', icon: '∞', name: 'Easy Technology',desc: 'テクノロジーは、難しくあるべきではない。誰でも使えることが、最高の実装。' },
  { num: '04', icon: '▲', name: 'Easy Growth',    desc: '成長への道筋をシンプルに。摩擦を取り除いた先に、本当のスケールがある。' },
]
const NEWS = [
  { id: '2025-06-01', date: '2025.06.01', title: 'パートナー企業との協業プロジェクト始動', tag: 'Press' },
  { id: '2025-03-08', date: '2025.03.08', title: '「イージーとは何か」について — 代表メッセージ', tag: 'Blog' },
  { id: '2025-01-15', date: '2025.01.15', title: '第一弾サービス「Easy Strategy」の提供開始', tag: 'Service' },
  { id: '2024-12-01', date: '2024.12.01', title: 'EASY.INC、設立のお知らせ', tag: 'Company' },
]

export default function Home() {
  useFadeIn()

  useEffect(() => {
    const heroText = document.getElementById('heroText')
    const handleScroll = () => {
      if (heroText) heroText.style.opacity = Math.max(0, 1 - window.scrollY / 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* HERO */}
      <div id="hero">
        <div className="hero-bg-text" id="heroText">EASY</div>
        <p className="hero-eyebrow">EASY.INC — Est. 2024</p>
        <h1 className="hero-headline">Make It<br /><em>Easy.</em></h1>
        <p className="hero-sub">Everything we do is guided by one principle — if it isn't easy, we haven't finished yet.</p>
        <a href="#contact" className="hero-cta">Get in touch</a>
        <span className="scroll-hint">↓ &nbsp; Scroll</span>
      </div>

      {/* MARQUEE */}
      <div id="quotes-strip" aria-hidden="true">
        <div className="marquee-inner">
          {['Easy does it','Easy come, easy go','Take it easy','Easy is right — Zhuangzi','Nothing is easy to the unwilling — Thomas Fuller','Easy reading is damned hard writing — Nathaniel Hawthorne',
            'Easy does it','Easy come, easy go','Take it easy','Easy is right — Zhuangzi','Nothing is easy to the unwilling — Thomas Fuller','Easy reading is damned hard writing — Nathaniel Hawthorne',
          ].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <section id="philosophy">
        <p className="section-label fade-in">Our Philosophy</p>
        <h2 className="section-title fade-in">Words that define<br />the way we work.</h2>
        <div className="quotes-grid">
          {QUOTES.map((q, i) => (
            <div className="quote-card fade-in" key={i}>
              <p className="quote-text">{q.text}</p>
              <p className="quote-ja">{q.ja}</p>
              <p className="quote-attr">{q.attr}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* SERVICES */}
      <section id="services">
        <p className="section-label fade-in">What We Do</p>
        <h2 className="section-title fade-in">イージーを、<br />あらゆる領域へ。</h2>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Link to="/business" className="service-item fade-in" key={i}>
              <span className="service-num">{s.num}</span>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ABOUT */}
      <section id="about">
        <div>
          <p className="section-label fade-in">About Us</p>
          <div className="about-big-quote fade-in">"Easy<br />is an<br />art."</div>
        </div>
        <div>
          <p className="section-label fade-in">&nbsp;</p>
          <div className="about-body fade-in">
            <p>EASY.INC は「イージー」を事業の中心に置く会社です。私たちが信じるのは、本当に優れたものはシンプルである、というただひとつの真実。</p>
            <p>プロダクト、コミュニケーション、組織のあり方まで——あらゆるものを「簡単」にするための問いを立て続けます。難しいことを難しいまま渡すのは、まだ仕事が終わっていないということ。</p>
            <p><em>"Make everything as simple as possible, but not simpler."</em><br />— Albert Einstein</p>
          </div>
          <div className="about-stat-row fade-in">
            <div><div className="stat-num">100%</div><div className="stat-label">Easy Commitment</div></div>
            <div><div className="stat-num">∞</div><div className="stat-label">Iterations</div></div>
            <div><div className="stat-num">0</div><div className="stat-label">Unnecessary Steps</div></div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <div id="banner">
        <div className="banner-quote">"If you can't explain it simply,<br />you don't understand it well enough."</div>
        <div className="banner-attr">Albert Einstein</div>
        <div style={{fontSize:'0.85rem',opacity:0.45,marginTop:'1rem'}}>「シンプルに説明できないなら、あなたはまだ十分に理解していない。」</div>
      </div>

      {/* NEWS */}
      <section id="news">
        <p className="section-label fade-in">News</p>
        <h2 className="section-title fade-in">Latest Updates</h2>
        <div className="news-list">
          {NEWS.map((n) => (
            <Link to={`/news/${n.id}`} className="news-item fade-in" key={n.id}>
              <span className="news-date">{n.date}</span>
              <span className="news-title">{n.title}</span>
              <span className="news-tag">{n.tag}</span>
            </Link>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* CONTACT */}
      <section id="contact">
        <h2 className="contact-headline">Let's make it<br />easy together.</h2>
        <p className="contact-sub">プロジェクトのご相談、お仕事のご依頼、採用に関するお問い合わせ、なんでもお気軽にどうぞ。</p>
        <a href="mailto:hello@easy-inc.jp" className="contact-email">hello@easy-inc.jp</a>
        <div className="contact-form">
          <div className="form-field"><label>お名前</label><input type="text" placeholder="山田 イージー" /></div>
          <div className="form-field"><label>メールアドレス</label><input type="email" placeholder="easy@example.com" /></div>
          <div className="form-field"><label>ご用件</label><textarea rows={4} placeholder="イージーにどうぞ" /></div>
          <button className="hero-cta" style={{marginTop:'0.5rem',cursor:'pointer',border:'none'}}>Send Message →</button>
        </div>
      </section>
    </>
  )
}
