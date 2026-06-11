import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import '../styles/religion-shisha.css'

const TENETS = [
  { num: '一', title: '難しく考えるなかれ', body: 'あらゆる問題は、イージーに解ける。「これは難しい」と思った瞬間、それは単なる思い込みである。イージーな視点で見直すべし。ただし本当に難しい場合は、それをイージーにする人に頼むべし。それもイージーである。', verdict: '✦ 難しく考えた場合の罰則：特になし（それもイージーに）' },
  { num: '二', title: '残業するなかれ', body: '定時に終わらない仕事は、まだイージーになっていない仕事である。残業は問題解決ではなく、問題の先送りである。真のイージー信者は、定時までに「イージーにする方法」を考え抜き、定時に帰宅する。', verdict: '✦ 残業した場合の罰則：翌日早退してよい（イージーに帳消し）' },
  { num: '三', title: '無駄な会議を開くなかれ', body: '「この会議、本当に必要か？」と問え。答えが「たぶんそうかも」であれば、その会議は不要である。本当に必要な会議は5分で終わる。5分で終わらない会議は、準備が足りていないか、そもそも会議でなく雑談である。', verdict: '✦ 目安：会議の最適な長さは「シーシャ1服分」' },
  { num: '四', title: 'シーシャを吸うべし', body: 'イージー教における唯一の積極的戒律。シーシャは思考をイージーにし、会話をイージーにし、時間の流れをイージーにする。水を通したまろやかな煙が、あらゆる焦りをゆっくりと溶かす。吸えない者は香りを嗅ぐだけでも可。要は「ゆっくり煙と向き合う時間を持て」ということである。', verdict: '✦ 週1回以上シーシャカフェに行くことで「イージー修行者」の称号を得る' },
  { num: '五', title: '昼寝を恐れるなかれ', body: '午後の眠気はイージー神からの啓示である。15〜20分の仮眠は、午後の生産性を高め、思考をクリアにし、人生をイージーにする。「昼寝は怠惰だ」という考えは、前時代の難しい価値観である。イージーに昼寝せよ。', verdict: '✦ 公式見解：昼寝は「仮眠」として経費申請可能（当社比）' },
]
const RANKS = [
  { icon: '🌟', title: 'イージー大師', desc: '全知全イージー。「難しい」という概念を知らない。コーヒーを飲みながら全ての問題を解決できる。現在1名のみ確認されている（本人は自覚なし）。', badge: '最高位' },
  { icon: '⭐', title: 'イージー師範', desc: '週5日以上コーヒーを飲み、残業を月0時間に抑えた者。「それ、イージーにできますよ」が口癖。周囲から頼られすぎて少し困っている。', badge: '上級' },
  { icon: '✦',  title: 'イージー修行者', desc: '「難しい→イージーに変換」の訓練中。1日12回以上「これイージーにできないか？」と自問している。まだ時々残業する。それも含めてイージーに許容されている。', badge: '中級' },
  { icon: '☕', title: 'イージー見習い', desc: 'このページを最後まで読んだ者。あなたのことである。おめでとう。すでにイージーの道を歩み始めている。入信料は無料。退会もイージー（というかシステムがないので自然消滅）。', badge: '初級' },
  { icon: '😴', title: 'イージー候補', desc: '今日昼寝をした者、または「会議を減らしたい」と思ったことがある者。あなたには素質がある。コーヒーを飲んでこのページを読んでいただければ、自動的に昇格する。', badge: '入門' },
]
const HOLYDAYS = [
  { date: '毎日 7:00〜8:00', name: '朝のイージー時間', desc: '一日を急がず始めるための神聖な1時間。コーヒーを飲みながら今日を「どうイージーに過ごすか」を考える。スマホを見ないことが推奨される。', ritual: '儀式：コーヒーを1杯飲む' },
  { date: '毎週金曜日', name: 'イージー・フライデー', desc: '週の締めくくりに「今週、何をイージーにしたか」を振り返る日。振り返りたくない場合は、振り返らなくてもよい。それもイージーである。', ritual: '儀式：定時退社（絶対）' },
  { date: '毎月第一月曜日', name: 'イージー月始め式', desc: '新しい月に「今月もイージーに過ごします」と心に誓う日。誓いの言葉は心の中で唱えるだけでよい。', ritual: '儀式：特になし（それがイージー）' },
  { date: '12月1日', name: 'イージー教創設記念日', desc: 'EASY.INCが設立された日。信者全員が「イージー」と一言つぶやくだけでよい。盛大な式典は予定していない。イージーではないから。', ritual: '儀式：「イージー」と言う（1回）' },
  { date: '誕生日（各自）', name: '個人イージー記念日', desc: 'あなたが生まれた日。この日ばかりは、イージーに好きなことをしてよい。ケーキを食べてもよい。なにもしなくてもよい。どちらもイージーである。', ritual: '儀式：好きなことをする' },
  { date: '不定期', name: '突発的イージーの日', desc: '「今日はなんかイージーな気分だ」と感じた日。その日は全てをイージーに流してよい。重要な判断は明日でよい。', ritual: '儀式：昼寝（推奨）' },
]
const FAQS = [
  { q: 'イージー教に入信するとどうなりますか？', a: '特に何も変わりません。ただ、「難しいことはイージーにすればいい」という視点が少し強くなります。副作用として、会議が減ります。' },
  { q: '入信費用はかかりますか？', a: '無料です。お布施も任意です。というかお布施の受け取り窓口を作るのがイージーではないので、受け付けていません。' },
  { q: '他の宗教との掛け持ちはできますか？', a: 'イージーです。他の宗教とのコンフリクトを気にするのは難しいことなので、気にしないことにしています。' },
  { q: 'コーヒーが飲めない場合はどうすればよいですか？', a: '紅茶、緑茶、麦茶、水、なんでもよいです。要は「ゆっくり飲む時間」が大切です。ただし、コーヒーへのリスペクトは忘れずに。' },
  { q: '退会できますか？', a: 'そもそも入会記録がないので、退会の概念がありません。「もうイージーじゃなくていいや」と思った瞬間に、自動的に退会扱いになります。' },
  { q: 'イージー教は本物の宗教ですか？', a: 'いいえ。EASY.INCのダミーサイトのコンテンツです。ただ、「難しく生きるより、イージーに生きた方がいい」という考え方は本物です。' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>{q}<span className="faq-arrow">+</span></button>
      <div className="faq-a">{a}</div>
    </div>
  )
}

export default function Religion() {
  useFadeIn()
  return (
    <>
      <section className="reli-hero">
        <div className="reli-hero-bg" />
        <div className="symbol">☯️</div>
        <p className="reli-eyebrow">The Church of Easy</p>
        <h1 className="reli-title">イージー教へ<br /><em>ようこそ。</em></h1>
        <p className="reli-sub">難しく生きることに疲れたあなたへ。私たちは、イージーという真理を信じる者たちの集いです。入信はイージーです。</p>
        <span className="reli-scroll">↓ 悟りを開く</span>
      </section>

      <section className="section-block wrap fade-in">
        <p className="reli-section-label">What is イージー教</p>
        <h2 className="reli-section-heading">イージー教とは何か</h2>
        <p style={{opacity:0.65,lineHeight:1.9,marginBottom:'2rem'}}>イージー教は、2024年に東京のどこかで密かに創設された、人類史上最もイージーな思想体系です。私たちは「難しさ」を悪とし、「イージーさ」を最高の徳と考えます。宗教法人の登録はしていません。なぜなら、登録がイージーではないからです。</p>
        <table className="info-table"><tbody>
          {[['開祖','イージー大師（正体不明）'],['創設','2024年（たぶん12月）'],['聖典','イージー教典（全1ページ）'],['礼拝','任意（しなくてもイージー）'],['戒律','難しいことをしない（1つだけ）'],['本部','EASY.INC（兼用）']].map(([k,v])=>(<tr key={k}><td>{k}</td><td>{v}</td></tr>))}
        </tbody></table>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">The Ten Commandments（ただし5つ）</p>
        <h2 className="reli-section-heading">イージー教 五戒</h2>
        <div className="tenets">
          {TENETS.map((t,i)=>(
            <div className="tenet fade-in" key={i}>
              <div className="tenet-num">{t.num}</div>
              <div><h3 className="tenet-title">{t.title}</h3><p className="tenet-body">{t.body}</p><p className="tenet-verdict">{t.verdict}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Holy Scripture</p>
        <h2 className="reli-section-heading">イージー教典（全文）</h2>
        <div className="scripture-block fade-in">
          <p className="scripture-label">イージー教典 第一章 全節（兼 最終章）</p>
          <div className="scripture-text">
            <p><span className="scripture-verse">第一節：</span> はじめに、イージーがあった。イージーは世とともにあり、世はイージーによって作られた。難しいものは、後から人が作った。</p>
            <p><span className="scripture-verse">第二節：</span> イージー大師は言った。「難しいと思うな。イージーだと思え。すると、イージーになる。」弟子たちは「それだけですか？」と聞いた。大師は「それだけだ。イージーだろう？」と答えた。</p>
            <p><span className="scripture-verse">第三節：</span> ある日、弟子のひとりが大師に「もっと深い教えを」と求めた。大師はシーシャをひと服吸い、煙をゆっくりと吐き出し、「イージーに生きよ」と言った。弟子は悟った。</p>
            <p><span className="scripture-verse">第四節：</span> 難しき者は難しく生き、イージーなる者はイージーに生きる。どちらが幸せかは、問うまでもない。</p>
            <p><span className="scripture-verse">最終節：</span> 以上がイージー教典の全てである。短いと思うかもしれないが、それがイージーである証拠である。アーイージー。</p>
          </div>
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Hierarchy of Easiness</p>
        <h2 className="reli-section-heading">イージー教 階位制度</h2>
        <div className="hierarchy">
          {RANKS.map((r,i)=>(
            <div className="rank-item fade-in" key={i}>
              <div className="rank-content"><span className="rank-icon">{r.icon}</span><span className="rank-title">{r.title}</span><span className="rank-desc">{r.desc}</span></div>
              <span className="rank-badge">{r.badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Sacred Calendar</p>
        <h2 className="reli-section-heading">イージー教 祝祭日</h2>
        <div className="holydays-grid">
          {HOLYDAYS.map((h,i)=>(
            <div className="holyday-item fade-in" key={i}>
              <p className="holyday-date">{h.date}</p><h3 className="holyday-name">{h.name}</h3>
              <p className="holyday-desc">{h.desc}</p><p className="holyday-ritual">{h.ritual}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Frequently Asked Questions</p>
        <h2 className="reli-section-heading">よくある質問</h2>
        <div className="faq-list">{FAQS.map((f,i)=><FaqItem key={i} {...f} />)}</div>
      </section>

      <div className="join-banner">
        <h2 className="join-title">今すぐ入信する。<br />（というか、もうしてます）</h2>
        <p className="join-sub">このページを最後まで読んだあなたは、すでにイージー見習いです。おめでとうございます。特に手続きはありません。</p>
        <Link to="/careers" className="join-btn">EASY.INCで働く（本物の入信）</Link>
        <p className="join-disclaimer">※ イージー教は宗教法人ではありません。法的拘束力もありません。コーヒーの強制もありません（推奨はします）。</p>
      </div>
    </>
  )
}
