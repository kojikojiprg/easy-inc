import { useFadeIn } from '../hooks/useFadeIn'
import './Interview.css'

const INTERVIEWS = [
  { icon: '🧑‍💻', name: 'イージー太郎', dept: 'Engineering', join: '入社：2024年12月（創業メンバー）', tags: ['フルスタック','コーヒー','昼寝'], bg: 'linear-gradient(135deg,#1a1a2e,#2a2a4e)',
    qas: [
      { q: 'EASY.INCに入社した理由は？', a: '社名が<strong>イージーだったから</strong>です。「これは入社もイージーかもしれない」と思って応募しました。実際、面接は「好きな食べ物は何ですか？」の1問でした。カレーと答えたら採用でした。' },
      { q: '仕事で大切にしていることは？', a: '「これ、もっとイージーにできないか？」と毎日12回自問しています。12回というのは平均で、先週は41回自問した日がありました。その日はコードを一行も書きませんでしたが、代わりに<strong>非常に深く考えました</strong>。' },
      { q: '休日の過ごし方は？', a: 'イージーに過ごしています。具体的には、起きる→コーヒーを飲む→何もしない→昼寝する→コーヒーを飲む→寝る、のルーティンです。<strong>完成されたイージーな一日</strong>だと思っています。' },
      { q: 'EASY.INCの好きなところは？', a: '残業がないところです。あと、会議が少ないところ。あと、社名を言うと「え、イージー？」って聞き返されるので、<strong>会話のきっかけになる</strong>ところも好きです。' },
    ], quote: '「イージーに生きることは、怠けることじゃない。<br>…まあ、たまに怠けてるけど。」', quoteLabel: 'イージー太郎 / Engineer' },
  { icon: '👩‍🎨', name: 'イージー花子', dept: 'Design', join: '入社：2025年1月', tags: ['UX','紅茶','散歩'], bg: 'linear-gradient(135deg,#2e1a1a,#4e2a2a)',
    qas: [
      { q: 'デザイナーとしての信念は？', a: '「<strong>ユーザーが考えなくていいデザイン</strong>が最高のデザイン」だと思っています。究極のゴールは、デザインが存在していることすら気づかれないこと。透明になることです。なので私の仕事は、存在を消すことです。' },
      { q: '入社前と後で変わったことは？', a: '「難しそう」「複雑だな」と思っていたものが、全部<strong>「もっとイージーにできるじゃん」</strong>に見えるようになりました。呪いみたいなものです。コンビニのセルフレジを見てもイージーにできると思ってしまいます。' },
      { q: 'チームの雰囲気は？', a: 'みんな名前に「イージー」が入っているので、最初は混乱しました。「イージーさん」と呼ぶと全員が振り返ります。でも全員いい人なので、<strong>それもまあイージーです</strong>。' },
      { q: '将来の目標は？', a: '世界で一番イージーなUIを作ることです。ボタンが1個だけのアプリ。それだけで全部できる。ボタンの名前は「イージー」。押すだけで何かが解決する。<strong>何が解決するかはまだ考えていません</strong>。' },
    ], quote: '「最高のデザインは、デザインされていないように見える。<br>だから私の仕事は終わりがない。」', quoteLabel: 'イージー花子 / Designer' },
  { icon: '🧔', name: 'イージー次郎', dept: 'Strategy', join: '入社：2025年2月', tags: ['戦略','緑茶','読書（マンガ）'], bg: 'linear-gradient(135deg,#1a2e1a,#2a4e2a)',
    qas: [
      { q: '前職からの転職理由は？', a: '前職は戦略コンサルで、毎日200ページのパワポを作っていました。あるとき「<strong>これ、1枚にまとめられるのでは？</strong>」と気づきました。上司に言ったら怒られました。EASY.INCに転職しました。今は本当に1枚にまとめています。' },
      { q: 'EASY.INCの戦略とは？', a: '「イージーにする」です。以上です。毎年戦略会議をしますが、毎回この結論になります。会議は<strong>5分で終わります</strong>。残りの時間でコーヒーを飲みます。' },
      { q: '難しかった仕事はありますか？', a: '「難しい仕事」という概念が、EASY.INCでは<strong>まだ発見されていません</strong>。「これは難しいのでは？」と思う瞬間はありますが、「いや、イージーにできる」と思い直すのがルーティンです。今のところ全部イージーでした。' },
      { q: 'これから入社する人へのメッセージは？', a: 'イージーに来てください。難しく考えないでください。応募フォームも、面接も、入社後も、<strong>全部イージーです</strong>。心配しないでください。心配することが一番難しいことです。' },
    ], quote: '「200ページのパワポより、<br>1枚の真実の方が価値がある。」', quoteLabel: 'イージー次郎 / Strategist' },
  { icon: '👩‍💼', name: 'イージー三子', dept: 'Business Development', join: '入社：2025年3月', tags: ['営業','ラテ','ヨガ'], bg: 'linear-gradient(135deg,#2e2a1a,#4e3a2a)',
    qas: [
      { q: '営業職として心がけていることは？', a: '「難しい営業」をしないことです。ゴリゴリ押したり、複雑なトークスクリプトを使ったりしません。代わりに「<strong>うちはイージーですよ</strong>」と言います。それだけで7割のお客様が興味を持ちます。残り3割も時間の問題です。' },
      { q: '一番印象に残っている商談は？', a: '「御社の強みはなんですか？」と聞かれて「イージーです」と答えたら、「それだけですか？」と聞かれました。「はい」と答えたら、<strong>その場で契約</strong>してもらえました。シンプルな強みはシンプルに刺さります。' },
      { q: '仕事とプライベートのバランスは？', a: '仕事がイージーすぎるので、プライベートとの境界がよくわかりません。<strong>常にイージーに生きています</strong>。それが仕事なのかプライベートなのか、もはやどちらでもいいと思っています。' },
    ], quote: '「営業とは、相手の人生を<br>イージーにしてあげる仕事だと思っています。」', quoteLabel: 'イージー三子 / Business Development' },
]
const SUMMARY = [
  { icon: '🧑‍💻', name: 'イージー太郎', dept: 'Engineering' },
  { icon: '👩‍🎨', name: 'イージー花子', dept: 'Design' },
  { icon: '🧔',   name: 'イージー次郎', dept: 'Strategy' },
  { icon: '👩‍💼', name: 'イージー三子', dept: 'Business Dev' },
  { icon: '🧑‍🔬', name: 'イージー四郎', dept: 'Research' },
  { icon: '👩‍🍳', name: 'イージー五子', dept: 'Operations' },
  { icon: '🐈',   name: 'イージーみけ', dept: '社内マスコット / 猫' },
]

export default function Team() {
  useFadeIn()
  return (
    <>
      <div className="page-hero">
        <p className="page-eyebrow fade-in">Employee Interviews</p>
        <h1 className="page-title fade-in">社員全員に<br />聞いてみた。</h1>
        <p className="page-lead fade-in">EASY.INCで働く人たちに、仕事のこと、イージーのこと、そしてどうでもいいことを聞きました。全員が驚くほど似たようなことを言っています。</p>
      </div>

      <div className="wrap">
        {INTERVIEWS.map((p, pi) => (
          <div className="interview fade-in" key={pi}>
            <div className="interview-inner">
              <div className="profile-card">
                <div className="avatar" style={{background: p.bg}}>{p.icon}</div>
                <div className="profile-name">{p.name}</div>
                <div className="profile-dept">{p.dept}</div>
                <div className="profile-join">{p.join}</div>
                <div className="profile-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
              <div>
                <div className="qa-list">
                  {p.qas.map((qa, qi) => (
                    <div className="qa-item" key={qi}>
                      <div className="question">{qa.q}</div>
                      <div className="answer" dangerouslySetInnerHTML={{__html: qa.a}} />
                    </div>
                  ))}
                </div>
                <div className="interview-quote">
                  <div className="iq-text" dangerouslySetInnerHTML={{__html: p.quote}} />
                  <div className="iq-label">{p.quoteLabel}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="section-block">
          <p className="section-label fade-in">Full Team</p>
          <h2 className="section-heading fade-in">社員全員の紹介</h2>
          <div className="summary-grid">
            {SUMMARY.map((m, i) => (
              <div className="summary-item fade-in" key={i}>
                <div className="summary-emoji">{m.icon}</div>
                <div className="summary-name">{m.name}</div>
                <div className="summary-dept">{m.dept}</div>
                <div className="summary-hobby">趣味：イージーなこと{m.name === 'イージーみけ' ? '（全力でイージー）' : ''}</div>
              </div>
            ))}
          </div>
          <p style={{marginTop:'1.5rem',fontSize:'0.72rem',opacity:0.3,fontStyle:'italic'}}>※ 社員の趣味欄に「イージーなこと」と書いてもらったところ、全員がそのまま提出しました。確認したところ「それがイージーだったので」とのことでした。</p>
        </div>
      </div>
    </>
  )
}
