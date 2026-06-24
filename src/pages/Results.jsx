import { useEffect, useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { useScrollHighlight } from '../hooks/useScrollHighlight'
import { useLanguage } from '../context/LanguageContext'
import './Results.css'

const KPIS = {
  en: [
    { count: 2847, label: "Number of times we've smoked shisha", note: '* Includes some cigars and darts' },
    { count: 143,  label: 'Meetings cancelled', note: '* Resolved on Slack instead' },
    { count: null, label: 'Total days of overtime worked', note: "* This one's true", fixed: '0' },
    { count: 100,  label: 'Times someone said "that\'s easy"', note: '* We take it as a compliment' },
    { count: 99,   label: 'Naps taken', note: '* Filed officially as "rest breaks"' },
    { count: null, label: 'Total amount of motivation', note: '* Immeasurable, so we wrote infinity', fixed: '∞' },
    { count: 4,    label: 'Plants kept in the office', note: '* One of them is fake' },
    { count: 12,   label: 'Times per day we ask ourselves "is this easy?"', note: '* Average. Record is 41.' },
  ],
  ja: [
    { count: 2847, label: 'シーシャを吸った回数', note: '※ 一部シガー・ダークを含む' },
    { count: 143,  label: '会議をキャンセルした回数', note: '※ 代わりにSlackで解決' },
    { count: null, label: '残業した日数（累計）', note: '※ これは本当', fixed: '0' },
    { count: 100,  label: '「イージーですね」と言われた回数', note: '※ 褒め言葉として受け取っています' },
    { count: 99,   label: '昼寝した回数', note: '※ 「仮眠」として申請済み' },
    { count: null, label: 'やる気の総量', note: '※ 計測不能につき無限大と表記', fixed: '∞' },
    { count: 4,    label: 'オフィスで飼っている植物の数', note: '※ うち1つは造花' },
    { count: 12,   label: '「これはイージーですか？」と自問した回数/日', note: '※ 平均値。最大記録は41回' },
  ],
}
const CHART = {
  en: [
    { label: '2020', width: 18, val: '18 Easy' },
    { label: '2021', width: 25, val: '25 Easy' },
    { label: '2022 (Concept Phase)', width: 42, val: '42 Easy' },
    { label: '2023', width: 61, val: '61 Easy' },
    { label: '2024 (Founded)', width: 88, val: '88 Easy' },
    { label: '2025 (Now)', width: 100, val: 'MAX Easy 🏆' },
  ],
  ja: [
    { label: '2020年', width: 18, val: '18 Easy' },
    { label: '2021年', width: 25, val: '25 Easy' },
    { label: '2022年（構想期）', width: 42, val: '42 Easy' },
    { label: '2023年', width: 61, val: '61 Easy' },
    { label: '2024年（設立）', width: 88, val: '88 Easy' },
    { label: '2025年（現在）', width: 100, val: 'MAX Easy 🏆' },
  ],
}
const AWARDS = {
  en: [
    { icon: '🥇', name: 'Most Easy Company Award', org: 'All-Japan Easy Association — 2024', desc: 'Won by unanimous judge vote: "We\'ve never seen a company this easy." The head judge fell asleep during deliberations, which was scored as a bonus point for easiness.' },
    { icon: '🏆', name: 'Zero Overtime Streak Award', org: 'Internal Awards Committee — 2024', desc: 'Internally recognized for maintaining zero overtime since founding. The ceremony ended right on time. The founder handed the certificate to himself.' },
    { icon: '⭐', name: '5-Star Google Maps Review', org: 'Google Maps — 2025', desc: 'Achieved a perfect 5.0 average from one review, posted by an employee. It just said, "It was easy."' },
    { icon: '🎖', name: '#1 in Local Shisha Consumption', org: "Per a nearby café's research — 2024", desc: 'Top per-capita shisha consumption among companies within a 200m radius. A staff member praised us: "I don\'t know if it\'s work, but they sure come a lot."' },
    { icon: '🌟', name: '"Easiest Company Name to Remember" Award', org: "The founder's friends — 2024", desc: 'Established on the spot after a friend said, "EASY.INC is such an easy name that it\'s actually memorable." The trophy was bought on Amazon.' },
    { icon: '🎗', name: 'Largest Project in Company History, Completed', org: 'Internal — 2025', desc: 'Building this very corporate website. From requirements to launch, nobody worked overtime. The person in charge had one comment: "It was easy."' },
  ],
  ja: [
    { icon: '🥇', name: '最もイージーな会社賞', org: '全日本イージー協会 — 2024年', desc: '「これほどイージーな会社は見たことがない」という審査員全員一致の評価により受賞。審査委員長は会議中に寝ていたが、それもイージーとして加点された。' },
    { icon: '🏆', name: '残業ゼロ継続表彰', org: '自社表彰委員会 — 2024年', desc: '創業以来、残業ゼロを継続していることを社内で表彰。表彰式は定時に終了。賞状は代表が自分で自分に渡した。' },
    { icon: '⭐', name: 'GoogleマップReview 星5獲得', org: 'Google Maps — 2025年', desc: '社員が投稿した1件のレビューにより、評価平均5.0を達成。「イージーでした」とだけ書かれていた。' },
    { icon: '🎖', name: 'シーシャ消費量地域No.1', org: '近隣のカフェ調べ — 2024年', desc: '半径200m以内の企業の中で、一人当たりのシーシャ消費量がトップ。「仕事かどうかわからないが、とにかくよく来る」と店員に称えられた。' },
    { icon: '🌟', name: '「会社名が覚えやすい賞」', org: '代表の友人一同 — 2024年', desc: '「EASY.INCって社名、イージーすぎて逆に覚えられる」という友人の発言をきっかけに即席で制定。盾はAmazonで買った。' },
    { icon: '🎗', name: '弊社史上最大のプロジェクト完遂', org: '社内 — 2025年', desc: 'このコーポレートサイトの制作。要件定義から公開まで、誰も残業せずに完成した。担当者は「イージーでした」と一言。' },
  ],
}
const TESTI = {
  en: [
    { stars: 5, text: "We made a request and it got resolved, easily. We're not totally sure what happened, but somehow it just worked out.", author: 'Mr. Easy Tanaka', role: 'Manufacturing / Representative Director / Satisfaction: Easy' },
    { stars: 5, text: 'I asked "are you sure this is really okay?" three times, and three times the answer was "it\'s easy." It was okay.', author: 'Mr. Simple Suzuki', role: 'IT company / CTO / Anxious at first' },
    { stars: 5, text: 'A problem other companies called "that\'s a tough one" — EASY.INC just said "it\'s easy" and actually solved it. Honestly, a little scary.', author: 'Ms. Not-Difficult Sato', role: 'Startup / CEO / Former skeptic' },
    { stars: 4, text: "Four stars only because it was so easy I started worrying, 'did they actually try hard?' But the result was excellent. I'll be back.", author: 'Ms. Four-Stars Yamada', role: 'SME / Corporate Planning / A bit of a worrier' },
  ],
  ja: [
    { stars: 5, text: '依頼したらイージーに解決されました。何がどうなったかよくわかりませんでしたが、気づいたらうまくいっていました。', author: '田中 イージー様', role: '製造業 / 代表取締役 / 満足度：イージー' },
    { stars: 5, text: '「本当にこれで大丈夫ですか？」と3回聞きましたが、3回とも「イージーです」と言われました。大丈夫でした。', author: '鈴木 かんたん様', role: 'IT企業 / CTO / 最初は不安でした' },
    { stars: 5, text: '他社には「それは難しいですね」と言われた課題を、EASY.INCは「イージーです」と言って本当に解決した。正直、怖かった。', author: '佐藤 むずかしくない様', role: 'スタートアップ / CEO / 元・懐疑派' },
    { stars: 4, text: '星4つなのは、あまりにイージーすぎて「本当に頑張ってくれたのか？」と少し心配になったから。でも結果は最高でした。次も頼みます。', author: '山田 よんつぼし様', role: '中小企業 / 経営企画 / やや心配性' },
  ],
}

function KpiItem({ count, label, note, fixed }) {
  const ref = useRef(null)
  useEffect(() => {
    if (fixed || count === null) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let n = 0
      const step = Math.ceil(count / 60)
      const t = setInterval(() => {
        n = Math.min(n + step, count)
        el.textContent = n.toLocaleString()
        if (n >= count) clearInterval(t)
      }, 20)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [count, fixed])
  return (
    <div className="kpi-item fade-in">
      <div className="kpi-num" ref={ref}>{fixed ?? '0'}</div>
      <div className="kpi-label">{label}</div>
      <div className="kpi-note">{note}</div>
    </div>
  )
}

export default function Results() {
  useFadeIn()
  useScrollHighlight('.kpi-item, .award-item, .press-item')
  const { lang, t } = useLanguage()
  return (
    <>
      <div className="page-hero">
        <p className="page-eyebrow fade-in">Our Achievements</p>
        <h1 className="page-title fade-in">{t(<>Easy,<br /><em>by the numbers.</em></>, <>数字で見る<br /><em>イージー。</em></>)}</h1>
        <p className="page-lead fade-in">{t("We don't lie. We do, however, have a very particular interpretation of what counts as an achievement.", '私たちは嘘をつきません。ただし、何を実績と呼ぶかについては、かなり独自の解釈をしています。')}</p>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Key Performance Indicators</p>
          <h2 className="section-heading fade-in">{t("The KPIs we're proud of", '私たちが誇る、主要KPI')}</h2>
          <div className="kpi-grid">
            {KPIS[lang].map((k,i) => <KpiItem key={i} {...k} />)}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Data Visualization</p>
          <h2 className="section-heading fade-in">{t('Our Easy Index Over Time (2020–2025)', 'イージー度の推移（2020〜2025）')}</h2>
          <div className="fake-graph fade-in">
            <div className="graph-title">{t('Annual Easy Index (proprietary research / unit: Easy)', '各年のイージー指数（独自調べ / 単位：イージー）')}</div>
            {CHART[lang].map((c) => (
              <div className="bar-row" key={c.label}>
                <div className="bar-label">{c.label}</div>
                <div className="bar-track"><div className="bar-fill" style={{width:`${c.width}%`}}><span>{c.val}</span></div></div>
              </div>
            ))}
            <p style={{marginTop:'1.5rem',fontSize:'0.72rem',opacity:0.3,fontStyle:'italic'}}>{t("* The Easy Index follows our own proprietary methodology. It has not been verified by any third party. Honestly, the methodology is just the founder's mood.", '※ イージー指数は当社独自の計測方法によります。第三者機関による検証は行っていません。というか計測方法は代表の気分です。')}</p>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Awards & Recognition</p>
          <h2 className="section-heading fade-in">{t('Our Awards', '受賞歴')}</h2>
          <div className="awards-grid">
            {AWARDS[lang].map((a,i) => (
              <div className="award-item fade-in" key={i}>
                <div className="award-trophy">{a.icon}</div>
                <div className="award-name">{a.name}</div>
                <div className="award-org">{a.org}</div>
                <div className="award-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Client Testimonials</p>
          <h2 className="section-heading fade-in">{t('What Our Clients Say', 'お客様の声')}</h2>
          <div className="testi-grid">
            {TESTI[lang].map((item,i) => (
              <div className="testi-card fade-in" key={i}>
                <div className="testi-stars">{'★'.repeat(item.stars)}{'☆'.repeat(5-item.stars)}</div>
                <div className="testi-text">{item.text}</div>
                <div className="testi-author">{item.author}</div>
                <div className="testi-role">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
