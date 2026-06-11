import { useEffect, useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import './Results.css'

const KPIS = [
  { count: 2847, label: 'コーヒーを飲んだ回数', note: '※ 一部紅茶を含む' },
  { count: 143,  label: '会議をキャンセルした回数', note: '※ 代わりにSlackで解決' },
  { count: null, label: '残業した日数（累計）', note: '※ これは本当', fixed: '0' },
  { count: 100,  label: '「イージーですね」と言われた回数', note: '※ 褒め言葉として受け取っています' },
  { count: 99,   label: '昼寝した回数', note: '※ 「仮眠」として申請済み' },
  { count: null, label: 'やる気の総量', note: '※ 計測不能につき無限大と表記', fixed: '∞' },
  { count: 4,    label: 'オフィスで飼っている植物の数', note: '※ うち1つは造花' },
  { count: 12,   label: '「これはイージーですか？」と自問した回数/日', note: '※ 平均値。最大記録は41回' },
]
const CHART = [
  { label: '2020年', width: 18, val: '18 Easy' },
  { label: '2021年', width: 25, val: '25 Easy' },
  { label: '2022年（構想期）', width: 42, val: '42 Easy' },
  { label: '2023年', width: 61, val: '61 Easy' },
  { label: '2024年（設立）', width: 88, val: '88 Easy' },
  { label: '2025年（現在）', width: 100, val: 'MAX Easy 🏆' },
]
const AWARDS = [
  { icon: '🥇', name: '最もイージーな会社賞', org: '全日本イージー協会 — 2024年', desc: '「これほどイージーな会社は見たことがない」という審査員全員一致の評価により受賞。審査委員長は会議中に寝ていたが、それもイージーとして加点された。' },
  { icon: '🏆', name: '残業ゼロ継続表彰', org: '自社表彰委員会 — 2024年', desc: '創業以来、残業ゼロを継続していることを社内で表彰。表彰式は定時に終了。賞状は代表が自分で自分に渡した。' },
  { icon: '⭐', name: 'GoogleマップReview 星5獲得', org: 'Google Maps — 2025年', desc: '社員が投稿した1件のレビューにより、評価平均5.0を達成。「イージーでした」とだけ書かれていた。' },
  { icon: '🎖', name: 'コーヒー消費量地域No.1', org: '近隣のカフェ調べ — 2024年', desc: '半径200m以内の企業の中で、一人当たりのコーヒー消費量がトップ。「仕事かどうかわからないが、とにかくよく来る」と店員に称えられた。' },
  { icon: '🌟', name: '「会社名が覚えやすい賞」', org: '代表の友人一同 — 2024年', desc: '「EASY.INCって社名、イージーすぎて逆に覚えられる」という友人の発言をきっかけに即席で制定。盾はAmazonで買った。' },
  { icon: '🎗', name: '弊社史上最大のプロジェクト完遂', org: '社内 — 2025年', desc: 'このコーポレートサイトの制作。要件定義から公開まで、誰も残業せずに完成した。担当者は「イージーでした」と一言。' },
]
const TESTI = [
  { stars: 5, text: '依頼したらイージーに解決されました。何がどうなったかよくわかりませんでしたが、気づいたらうまくいっていました。', author: '田中 イージー様', role: '製造業 / 代表取締役 / 満足度：イージー' },
  { stars: 5, text: '「本当にこれで大丈夫ですか？」と3回聞きましたが、3回とも「イージーです」と言われました。大丈夫でした。', author: '鈴木 かんたん様', role: 'IT企業 / CTO / 最初は不安でした' },
  { stars: 5, text: '他社には「それは難しいですね」と言われた課題を、EASY.INCは「イージーです」と言って本当に解決した。正直、怖かった。', author: '佐藤 むずかしくない様', role: 'スタートアップ / CEO / 元・懐疑派' },
  { stars: 4, text: '星4つなのは、あまりにイージーすぎて「本当に頑張ってくれたのか？」と少し心配になったから。でも結果は最高でした。次も頼みます。', author: '山田 よんつぼし様', role: '中小企業 / 経営企画 / やや心配性' },
]
const PRESS = [
  { outlet: 'イージー経済新聞', title: '「残業ゼロで利益ゼロ」——EASY.INCの驚異の経営モデル', date: '2025年1月15日' },
  { outlet: '週刊東洋イージー', title: '次世代スタートアップ特集：「社名で全部説明できる会社」トップ10', date: '2025年2月3日' },
  { outlet: 'Forbes JAPAN（非公式）', title: '「イージーすぎて取材にならなかった」——記者が語る現場レポート', date: '2025年3月22日' },
  { outlet: 'TechCrunch EASY', title: 'EASY.INC、コーヒー消費量で前年比340%増を達成。売上は非公開。', date: '2025年4月1日' },
  { outlet: 'NHK（夢の中で）', title: '「もっとイージーに生きよう」——注目企業が語る働き方改革の未来', date: '放送日：未定（夢なので）' },
  { outlet: '地元の回覧板', title: '近所にイージーな会社ができました。騒音なし。ゴミ出しも正確。', date: '2024年12月' },
]

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
  return (
    <>
      <div className="page-hero">
        <p className="page-eyebrow fade-in">Our Achievements</p>
        <h1 className="page-title fade-in">数字で見る<br /><em>イージー。</em></h1>
        <p className="page-lead fade-in">私たちは嘘をつきません。ただし、何を実績と呼ぶかについては、かなり独自の解釈をしています。</p>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Key Performance Indicators</p>
          <h2 className="section-heading fade-in">私たちが誇る、主要KPI</h2>
          <div className="kpi-grid">
            {KPIS.map((k,i) => <KpiItem key={i} {...k} />)}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Data Visualization</p>
          <h2 className="section-heading fade-in">イージー度の推移（2020〜2025）</h2>
          <div className="fake-graph fade-in">
            <div className="graph-title">各年のイージー指数（独自調べ / 単位：イージー）</div>
            {CHART.map((c) => (
              <div className="bar-row" key={c.label}>
                <div className="bar-label">{c.label}</div>
                <div className="bar-track"><div className="bar-fill" style={{width:`${c.width}%`}}><span>{c.val}</span></div></div>
              </div>
            ))}
            <p style={{marginTop:'1.5rem',fontSize:'0.72rem',opacity:0.3,fontStyle:'italic'}}>※ イージー指数は当社独自の計測方法によります。第三者機関による検証は行っていません。というか計測方法は代表の気分です。</p>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Awards & Recognition</p>
          <h2 className="section-heading fade-in">受賞歴</h2>
          <div className="awards-grid">
            {AWARDS.map((a,i) => (
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
          <h2 className="section-heading fade-in">お客様の声</h2>
          <div className="testi-grid">
            {TESTI.map((t,i) => (
              <div className="testi-card fade-in" key={i}>
                <div className="testi-stars">{'★'.repeat(t.stars)}{'☆'.repeat(5-t.stars)}</div>
                <div className="testi-text">{t.text}</div>
                <div className="testi-author">{t.author}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">メディア掲載</p>
          <h2 className="section-heading fade-in">Press</h2>
          <div className="press-list">
            {PRESS.map((p,i) => (
              <div className="press-item fade-in" key={i}>
                <div className="press-outlet">{p.outlet}</div>
                <div className="press-title">{p.title}</div>
                <div className="press-date">{p.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
