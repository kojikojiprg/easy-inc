import { useFadeIn } from '../hooks/useFadeIn'
import { useLanguage } from '../context/LanguageContext'
import './Business.css'

const SERVICES = {
  en: [
    { num: '01', label: 'Service 01', icon: '⚡', name: 'Easy Strategy', tagline: 'Turning complex questions into simple answers.',
      body: ["Most of the strategic challenges companies face come from information overload and overcomplicated thinking. Try to account for everything and you lose sight of what actually matters. Easy Strategy is a strategy design service built to cut through that indecision.",
             "We listen exhaustively, strip out the noise, and build a single page of strategy that leads directly to action. Instead of forcing a framework onto you, we work with you to chart a simple, powerful direction shaped around your business's own context."],
      bodyQuote: '"Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat." — Sun Tzu',
      items: ['Defining and redefining business strategy','Articulating vision and mission','Competitive analysis and market positioning','KPI design and roadmap creation','Executive coaching for leadership teams'],
      quote: '"Make everything as simple as possible, but not simpler."', quoteAttr: '— Albert Einstein' },
    { num: '02', label: 'Service 02', icon: '◎', name: 'Easy Design', tagline: 'The best design is the one you never have to think about.',
      body: ["Design has exactly one goal: make it so the user never has to think. They know where to tap, they get the message instantly, and what to do next is obvious. When all of that lines up, the design itself disappears.",
             "Easy Design starts with UI/UX research and carries a user-first perspective all the way through information architecture, visual design, and prototype testing. Beauty is the means; usability is the end."],
      bodyQuote: '"Good design is obvious. Great design is transparent." — Joe Sparano',
      items: ['UI/UX research and user interviews','Information architecture design','Wireframing and prototyping','Brand visual design','Design system development'],
      quote: '"Design is not just what it looks like. Design is how it works."', quoteAttr: '— Steve Jobs' },
    { num: '03', label: 'Service 03', icon: '∞', name: 'Easy Technology', tagline: 'Technology is for people. We never hand it over still difficult.',
      body: ["Technology is a tool, and a tool that isn't easy to use is pointless. And yet so many systems and products are built around the convenience of whoever made them. Easy Technology closes that gap.",
             "We bring deep engineering expertise while keeping the end user's experience at the center of every design and implementation decision. From requirements through development, QA, and post-release monitoring, we build products together that never leave the people using them confused."],
      bodyQuote: '"Any sufficiently advanced technology is indistinguishable from magic — and magic should feel effortless." — Arthur C. Clarke (adapted)',
      items: ['Product requirements and technology selection','Web and mobile app development','API design and system integration','Legacy system refactoring','Technical advisory and CTO as a Service'],
      quote: '"The best technology is invisible. It just works."', quoteAttr: '— EASY.INC' },
    { num: '04', label: 'Service 04', icon: '▲', name: 'Easy Growth', tagline: 'Real growth lives on the other side of removed friction.',
      body: ["Growth almost always stalls because of friction. Customers abandon sign-ups, teams slow down, initiatives stop producing results — every one of these is a sign that some hard, unsolved part is still lurking somewhere.",
             "Easy Growth specializes in finding and removing the friction that's blocking growth. Marketing, sales, customer success, operations — whatever the area, we build a state where things can move easily."],
      bodyQuote: '"Growth is never by mere chance; it is the result of forces working together." — James Cash Penney',
      items: ['Growth strategy planning and execution support','Conversion rate optimization (CRO)','Marketing funnel optimization','Customer success design','Data analysis and KPI dashboard development'],
      quote: '"Take it easy — but take it."', quoteAttr: '— Studs Terkel' },
  ],
  ja: [
    { num: '01', label: 'Service 01', icon: '⚡', name: 'Easy Strategy', tagline: '複雑な問いを、シンプルな答えへ。',
      body: ['企業が直面する戦略的課題の多くは、「情報過多」と「思考の複雑化」から生まれています。あれもこれもと考えすぎた結果、本当に大切なことが見えなくなる。Easy Strategy は、その迷いを断ち切るための戦略設計サービスです。',
             '私たちは徹底的にヒアリングし、ノイズを除去し、行動につながる「一枚の戦略」を作ります。フレームワークありきではなく、あなたのビジネスの文脈に最適化された、シンプルで力強い方向性を共に描きます。'],
      bodyQuote: '"Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat." — Sun Tzu',
      items: ['事業戦略の策定・再定義','ビジョン・ミッション言語化','競合分析・市場ポジション設計','KPI設計とロードマップ作成','経営陣へのエグゼクティブコーチング'],
      quote: '"Make everything as simple as possible, but not simpler."', quoteAttr: '— Albert Einstein' },
    { num: '02', label: 'Service 02', icon: '◎', name: 'Easy Design', tagline: '考えなくていいデザインが、最高のデザイン。',
      body: ['デザインの目標はただひとつ——使う人が「考えなくていい」状態を作ること。どこをタップするかわかる、何を伝えているかが瞬時に入ってくる、次に何をすべきかが自明である。これらが揃ったとき、デザインは「見えなくなります」。',
             'Easy Design では、UI/UXのリサーチから始め、情報設計、ビジュアルデザイン、プロトタイプ検証まで、一貫してユーザー視点で進めます。美しさは手段であり、目的は「使いやすさ」です。'],
      bodyQuote: '"Good design is obvious. Great design is transparent." — Joe Sparano',
      items: ['UI/UXリサーチ・ユーザーインタビュー','情報アーキテクチャ設計','ワイヤーフレーム・プロトタイプ制作','ブランドビジュアルデザイン','デザインシステム構築'],
      quote: '"Design is not just what it looks like. Design is how it works."', quoteAttr: '— Steve Jobs' },
    { num: '03', label: 'Service 03', icon: '∞', name: 'Easy Technology', tagline: '技術は、人のために。難しいまま渡さない。',
      body: ['テクノロジーはツールです。ツールは使いやすくなければ意味がない。にもかかわらず、多くのシステムや製品は「作った側の都合」で動いています。Easy Technology は、そのギャップを埋めます。',
             'エンジニアリングの専門性を持ちながらも、常にエンドユーザーの体験を中心に据えた設計・実装を行います。要件定義から開発、QA、リリース後のモニタリングまで、「使う人が迷わない」プロダクトを一緒に作ります。'],
      bodyQuote: '"Any sufficiently advanced technology is indistinguishable from magic — and magic should feel effortless." — Arthur C. Clarke (adapted)',
      items: ['プロダクト要件定義・技術選定','Webアプリ・モバイルアプリ開発','API設計・システムインテグレーション','レガシーシステムのリファクタリング','技術顧問・CTO as a Service'],
      quote: '"The best technology is invisible. It just works."', quoteAttr: '— EASY.INC' },
    { num: '04', label: 'Service 04', icon: '▲', name: 'Easy Growth', tagline: '摩擦を取り除いた先に、本物の成長がある。',
      body: ['成長が止まる理由のほとんどは、「摩擦」です。顧客が申し込みをやめる、チームの動きが遅くなる、施策の効果が出ない——これらはすべて、どこかに「難しい部分」が残っているサインです。',
             'Easy Growth は、グロースの障壁となっている摩擦を特定し、取り除くことに特化したサービスです。マーケティング、セールス、カスタマーサクセス、オペレーション——どの領域でも、「簡単に動ける状態」を作ります。'],
      bodyQuote: '"Growth is never by mere chance; it is the result of forces working together." — James Cash Penney',
      items: ['グロース戦略立案・実行支援','コンバージョン率改善（CRO）','マーケティングファネル最適化','カスタマーサクセス設計','データ分析・KPIダッシュボード構築'],
      quote: '"Take it easy — but take it."', quoteAttr: '— Studs Terkel' },
  ],
}

export default function Business() {
  useFadeIn()
  const { lang, t } = useLanguage()
  const services = SERVICES[lang]
  return (
    <>
      <div className="page-hero">
        <p className="page-eyebrow fade-in">Our Business</p>
        <h1 className="page-title fade-in">{t(<>Our business,<br /><em>made easy.</em></>, <>事業内容、<br /><em>イージー。</em></>)}</h1>
        <p className="page-lead fade-in">{t(<>Our business is "easy." That's it.<br />...That's what we'd like to say, but we'll explain a little more. Just not for very long — because that's easy.</>, <>私たちの事業内容は「イージー」です。以上です。<br />…と言いたいところですが、もう少し説明します。でもあまり長くは説明しません。なぜならイージーだからです。</>)}</p>
      </div>

      {services.map((s) => (
        <div className="wrap" key={s.num}>
          <div className="section-block">
            <p className="section-label fade-in">{s.label}</p>
            <div className="service-detail fade-in">
              <div className="sd-main">
                <div className="sd-header">
                  <div className="sd-icon">{s.icon}</div>
                  <div className="sd-title-wrap">
                    <div className="sd-number">{s.label}</div>
                    <div className="sd-name">{s.name}</div>
                    <div className="sd-tagline">{s.tagline}</div>
                  </div>
                </div>
                <div className="sd-body">
                  {s.body.map((p, i) => <p key={i}>{p}</p>)}
                  <p style={{opacity:0.4,fontStyle:'italic',marginTop:'1.5rem'}}>{s.bodyQuote}</p>
                </div>
              </div>
              <div className="sd-sub">
                <div className="sd-sub-label">{t('What We Offer', '提供内容')}</div>
                <ul className="sd-list">{s.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="sd-quote">
                <div>
                  <div className="sd-quote-text">{s.quote}</div>
                  <div className="sd-quote-attr">{s.quoteAttr}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
