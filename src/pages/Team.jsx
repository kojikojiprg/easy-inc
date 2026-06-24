import { useFadeIn } from '../hooks/useFadeIn'
import { useLanguage } from '../context/LanguageContext'
import './Interview.css'

const INTERVIEWS = {
  en: [
    { icon: '🧑‍💻', name: 'Easy Taro', dept: 'Engineering', join: 'Joined: December 2024 (founding member)', tags: ['Full-stack','Shisha','Napping'], bg: 'linear-gradient(135deg,#1a1a2e,#2a2a4e)',
      qas: [
        { q: 'Why did you join EASY INC.?', a: 'Because the company name was <strong>literally "Easy"</strong>. I figured, "maybe even joining this place will be easy," and applied. The interview really was just one question: "What\'s your favorite food?" I said curry and got hired.' },
        { q: 'What matters most to you at work?', a: 'I ask myself "can this be made easier?" twelve times a day on average. Last week I had a day where I asked it 41 times. I didn\'t write a single line of code that day, but instead I <strong>thought extremely hard</strong>.' },
        { q: 'How do you spend your days off?', a: 'Easily. Specifically: wake up → smoke shisha → do nothing → take a nap → smoke shisha → sleep. I consider it <strong>a perfectly complete easy day</strong>.' },
        { q: 'What do you like about EASY INC.?', a: 'No overtime. Also, very few meetings. And when I say the company name, people go "wait, Easy?" so it <strong>always gets a conversation started</strong>, which I like too.' },
      ], quote: "Living easy isn't the same as being lazy.<br>...Well, sometimes it is, a little.", quoteLabel: 'Easy Taro / Engineer' },
    { icon: '👩‍🎨', name: 'Easy Hanako', dept: 'Design', join: 'Joined: January 2025', tags: ['UX','Shisha','Walking'], bg: 'linear-gradient(135deg,#2e1a1a,#4e2a2a)',
      qas: [
        { q: "What's your belief as a designer?", a: 'I believe <strong>"design the user never has to think about" is the best design</strong>. The ultimate goal is for people to not even notice the design exists — to become transparent. So my job is to make myself disappear.' },
        { q: 'What changed for you before vs. after joining?', a: 'Everything I used to think looked "hard" or "complicated" now looks like <strong>"we could obviously make this easier."</strong> It\'s basically a curse. Even looking at a convenience-store self-checkout, I think, this could be made easier.' },
        { q: "What's the team atmosphere like?", a: 'Everyone has "Easy" somewhere in their name, which confused me at first. If you call out "Easy-san," everyone turns around. But everyone\'s nice, so <strong>that\'s easy enough too, I guess</strong>.' },
        { q: "What's your future goal?", a: 'To build the easiest UI in the world. An app with exactly one button that does everything. The button is labeled "Easy." Press it and something gets solved. <strong>I haven\'t figured out what, yet</strong>.' },
      ], quote: 'The best design looks like it was never designed at all.<br>Which means my job never really ends.', quoteLabel: 'Easy Hanako / Designer' },
    { icon: '🧔', name: 'Easy Jiro', dept: 'Strategy', join: 'Joined: February 2025', tags: ['Strategy','Shisha','Reading (manga)'], bg: 'linear-gradient(135deg,#1a2e1a,#2a4e2a)',
      qas: [
        { q: 'Why did you leave your previous job?', a: 'I used to work in strategy consulting, building 200-page slide decks every day. One day I realized, <strong>"couldn\'t this just be one page?"</strong> I said that to my boss and got yelled at. So I moved to EASY INC.. Now I really do fit it on one page.' },
        { q: "What is EASY INC.'s strategy?", a: '"Make it easy." That\'s it. We hold a strategy meeting every year, and we always land on this same conclusion. The meeting <strong>wraps up in 5 minutes</strong>. We spend the rest of the time smoking shisha.' },
        { q: 'Has there been any difficult work?', a: 'The concept of "difficult work" <strong>hasn\'t been discovered yet</strong> at EASY INC.. There are moments where I think "isn\'t this hard?" but my routine is to immediately rethink it as "no, this can be made easy." So far, everything has been easy.' },
        { q: 'Any message for future hires?', a: "Come on in, easily. Don't overthink it. The application form, the interview, life after joining — <strong>all of it is easy</strong>. Don't worry. Worrying is the single hardest thing here." },
      ], quote: 'A single page of truth is worth more<br>than 200 pages of slides.', quoteLabel: 'Easy Jiro / Strategist' },
    { icon: '👩‍💼', name: 'Easy Mitsuko', dept: 'Business Development', join: 'Joined: March 2025', tags: ['Sales','Shisha','Yoga'], bg: 'linear-gradient(135deg,#2e2a1a,#4e3a2a)',
      qas: [
        { q: 'What do you keep in mind as someone in sales?', a: 'Not doing "hard sales." No hard-pushing, no elaborate talk scripts. Instead, I just say, <strong>"we\'re easy to work with."</strong> That alone gets 70% of clients interested. The other 30% are just a matter of time.' },
        { q: "What's the most memorable deal you've closed?", a: 'They asked, "what\'s your company\'s strength?" I said "easy." They asked, "that\'s it?" I said "yes," and <strong>we signed the contract on the spot</strong>. A simple strength lands simply.' },
        { q: 'How do you balance work and personal life?', a: "Work is so easy that I'm honestly not sure where the line with personal life is anymore. <strong>I just live easy, all the time</strong>. Whether that counts as work or personal life — at this point, I don't think it matters." },
      ], quote: "I think sales is the job<br>of making someone else's life easier.", quoteLabel: 'Easy Mitsuko / Business Development' },
  ],
  ja: [
    { icon: '🧑‍💻', name: 'イージー太郎', dept: 'Engineering', join: '入社：2024年12月（創業メンバー）', tags: ['フルスタック','シーシャ','昼寝'], bg: 'linear-gradient(135deg,#1a1a2e,#2a2a4e)',
      qas: [
        { q: 'EASY INC.に入社した理由は？', a: '社名が<strong>イージーだったから</strong>です。「これは入社もイージーかもしれない」と思って応募しました。実際、面接は「好きな食べ物は何ですか？」の1問でした。カレーと答えたら採用でした。' },
        { q: '仕事で大切にしていることは？', a: '「これ、もっとイージーにできないか？」と毎日12回自問しています。12回というのは平均で、先週は41回自問した日がありました。その日はコードを一行も書きませんでしたが、代わりに<strong>非常に深く考えました</strong>。' },
        { q: '休日の過ごし方は？', a: 'イージーに過ごしています。具体的には、起きる→シーシャを吸う→何もしない→昼寝する→シーシャを吸う→寝る、のルーティンです。<strong>完成されたイージーな一日</strong>だと思っています。' },
        { q: 'EASY INC.の好きなところは？', a: '残業がないところです。あと、会議が少ないところ。あと、社名を言うと「え、イージー？」って聞き返されるので、<strong>会話のきっかけになる</strong>ところも好きです。' },
      ], quote: '「イージーに生きることは、怠けることじゃない。<br>…まあ、たまに怠けてるけど。」', quoteLabel: 'イージー太郎 / Engineer' },
    { icon: '👩‍🎨', name: 'イージー花子', dept: 'Design', join: '入社：2025年1月', tags: ['UX','シーシャ','散歩'], bg: 'linear-gradient(135deg,#2e1a1a,#4e2a2a)',
      qas: [
        { q: 'デザイナーとしての信念は？', a: '「<strong>ユーザーが考えなくていいデザイン</strong>が最高のデザイン」だと思っています。究極のゴールは、デザインが存在していることすら気づかれないこと。透明になることです。なので私の仕事は、存在を消すことです。' },
        { q: '入社前と後で変わったことは？', a: '「難しそう」「複雑だな」と思っていたものが、全部<strong>「もっとイージーにできるじゃん」</strong>に見えるようになりました。呪いみたいなものです。コンビニのセルフレジを見てもイージーにできると思ってしまいます。' },
        { q: 'チームの雰囲気は？', a: 'みんな名前に「イージー」が入っているので、最初は混乱しました。「イージーさん」と呼ぶと全員が振り返ります。でも全員いい人なので、<strong>それもまあイージーです</strong>。' },
        { q: '将来の目標は？', a: '世界で一番イージーなUIを作ることです。ボタンが1個だけのアプリ。それだけで全部できる。ボタンの名前は「イージー」。押すだけで何かが解決する。<strong>何が解決するかはまだ考えていません</strong>。' },
      ], quote: '「最高のデザインは、デザインされていないように見える。<br>だから私の仕事は終わりがない。」', quoteLabel: 'イージー花子 / Designer' },
    { icon: '🧔', name: 'イージー次郎', dept: 'Strategy', join: '入社：2025年2月', tags: ['戦略','シーシャ','読書（マンガ）'], bg: 'linear-gradient(135deg,#1a2e1a,#2a4e2a)',
      qas: [
        { q: '前職からの転職理由は？', a: '前職は戦略コンサルで、毎日200ページのパワポを作っていました。あるとき「<strong>これ、1枚にまとめられるのでは？</strong>」と気づきました。上司に言ったら怒られました。EASY INC.に転職しました。今は本当に1枚にまとめています。' },
        { q: 'EASY INC.の戦略とは？', a: '「イージーにする」です。以上です。毎年戦略会議をしますが、毎回この結論になります。会議は<strong>5分で終わります</strong>。残りの時間でシーシャを吸います。' },
        { q: '難しかった仕事はありますか？', a: '「難しい仕事」という概念が、EASY INC.では<strong>まだ発見されていません</strong>。「これは難しいのでは？」と思う瞬間はありますが、「いや、イージーにできる」と思い直すのがルーティンです。今のところ全部イージーでした。' },
        { q: 'これから入社する人へのメッセージは？', a: 'イージーに来てください。難しく考えないでください。応募フォームも、面接も、入社後も、<strong>全部イージーです</strong>。心配しないでください。心配することが一番難しいことです。' },
      ], quote: '「200ページのパワポより、<br>1枚の真実の方が価値がある。」', quoteLabel: 'イージー次郎 / Strategist' },
    { icon: '👩‍💼', name: 'イージー三子', dept: 'Business Development', join: '入社：2025年3月', tags: ['営業','シーシャ','ヨガ'], bg: 'linear-gradient(135deg,#2e2a1a,#4e3a2a)',
      qas: [
        { q: '営業職として心がけていることは？', a: '「難しい営業」をしないことです。ゴリゴリ押したり、複雑なトークスクリプトを使ったりしません。代わりに「<strong>うちはイージーですよ</strong>」と言います。それだけで7割のお客様が興味を持ちます。残り3割も時間の問題です。' },
        { q: '一番印象に残っている商談は？', a: '「御社の強みはなんですか？」と聞かれて「イージーです」と答えたら、「それだけですか？」と聞かれました。「はい」と答えたら、<strong>その場で契約</strong>してもらえました。シンプルな強みはシンプルに刺さります。' },
        { q: '仕事とプライベートのバランスは？', a: '仕事がイージーすぎるので、プライベートとの境界がよくわかりません。<strong>常にイージーに生きています</strong>。それが仕事なのかプライベートなのか、もはやどちらでもいいと思っています。' },
      ], quote: '「営業とは、相手の人生を<br>イージーにしてあげる仕事だと思っています。」', quoteLabel: 'イージー三子 / Business Development' },
  ],
}
const SUMMARY = {
  en: [
    { icon: '🧑‍💻', name: 'Easy Taro', dept: 'Engineering', isCat: false },
    { icon: '👩‍🎨', name: 'Easy Hanako', dept: 'Design', isCat: false },
    { icon: '🧔',   name: 'Easy Jiro', dept: 'Strategy', isCat: false },
    { icon: '👩‍💼', name: 'Easy Mitsuko', dept: 'Business Dev', isCat: false },
    { icon: '🧑‍🔬', name: 'Easy Shiro', dept: 'Research', isCat: false },
    { icon: '👩‍🍳', name: 'Easy Itsuko', dept: 'Operations', isCat: false },
    { icon: '🐈',   name: 'Easy Mike', dept: 'Office Mascot / Cat', isCat: true },
  ],
  ja: [
    { icon: '🧑‍💻', name: 'イージー太郎', dept: 'Engineering', isCat: false },
    { icon: '👩‍🎨', name: 'イージー花子', dept: 'Design', isCat: false },
    { icon: '🧔',   name: 'イージー次郎', dept: 'Strategy', isCat: false },
    { icon: '👩‍💼', name: 'イージー三子', dept: 'Business Dev', isCat: false },
    { icon: '🧑‍🔬', name: 'イージー四郎', dept: 'Research', isCat: false },
    { icon: '👩‍🍳', name: 'イージー五子', dept: 'Operations', isCat: false },
    { icon: '🐈',   name: 'イージーみけ', dept: '社内マスコット / 猫', isCat: true },
  ],
}

export default function Team() {
  useFadeIn()
  const { lang, t } = useLanguage()
  return (
    <>
      <div className="page-hero">
        <p className="page-eyebrow fade-in">Employee Interviews</p>
        <h1 className="page-title fade-in">{t(<>We asked<br />everyone on the team.</>, <>社員全員に<br />聞いてみた。</>)}</h1>
        <p className="page-lead fade-in">{t("We asked the people who work at EASY INC. about their jobs, about Easy, and about things that don't really matter. Everyone said shockingly similar things.", 'EASY INC.で働く人たちに、仕事のこと、イージーのこと、そしてどうでもいいことを聞きました。全員が驚くほど似たようなことを言っています。')}</p>
      </div>

      <div className="wrap">
        {INTERVIEWS[lang].map((p, pi) => (
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
          <h2 className="section-heading fade-in">{t('Meet the Whole Team', '社員全員の紹介')}</h2>
          <div className="summary-grid">
            {SUMMARY[lang].map((m, i) => (
              <div className="summary-item fade-in" key={i}>
                <div className="summary-emoji">{m.icon}</div>
                <div className="summary-name">{m.name}</div>
                <div className="summary-dept">{m.dept}</div>
                <div className="summary-hobby">{t('Hobby: Easy stuff', '趣味：イージーなこと')}{m.isCat ? t(' (full-effort easy)', '（全力でイージー）') : ''}</div>
              </div>
            ))}
          </div>
          <p style={{marginTop:'1.5rem',fontSize:'0.72rem',opacity:0.3,fontStyle:'italic'}}>{t('* When we asked employees to fill in their hobby field as "easy stuff," everyone submitted exactly that. When we asked why, the answer was "because that was easy."', '※ 社員の趣味欄に「イージーなこと」と書いてもらったところ、全員がそのまま提出しました。確認したところ「それがイージーだったので」とのことでした。')}</p>
        </div>
      </div>
    </>
  )
}
