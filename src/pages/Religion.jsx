import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import { useLanguage } from '../context/LanguageContext'
import '../styles/religion-shisha.css'

const TENETS = {
  en: [
    { num: 'I', title: 'Thou shalt not overthink', body: "Every problem can be solved easily. The moment you think \"this is hard,\" that's nothing but a mental block. Look at it again from an easy angle. But if it really is hard, ask someone who makes things easy to handle it. That, too, is easy.", verdict: "✦ Penalty for overthinking: none in particular (that's easy too)" },
    { num: 'II', title: 'Thou shalt not work overtime', body: "A true believer in Easy always thinks through how to make things easy, and turns the not-easy into the easy. That time isn't overtime — it's time spent thinking about Easy.", verdict: "✦ Penalty for working overtime: read the Easy Scripture (or don't, that's fine too)" },
    { num: 'III', title: 'Thou shalt not hold pointless meetings', body: 'Ask yourself, "is this meeting really necessary?" If the answer is "maybe, probably," the meeting is unnecessary. A meeting that\'s truly necessary ends in 5 minutes. A meeting that doesn\'t end in 5 minutes is either under-prepared, or it was never a meeting to begin with — just chatting.', verdict: '✦ Rule of thumb: the optimal meeting length is "one round of shisha"' },
    { num: 'IV', title: 'Thou shalt smoke shisha', body: "The one and only positive commandment in the Church of Easy. Shisha makes thinking easy, makes conversation easy, makes the flow of time easy. Smoke softened by passing through water slowly dissolves all sense of urgency. Those who can't smoke may simply take in the aroma. The point, fundamentally, is to hold a slow moment facing smoke.", verdict: '✦ Visit a shisha café once a week or more and earn the title of "Easy Practitioner"' },
    { num: 'V', title: 'Thou shalt not fear the nap', body: 'Afternoon drowsiness is a revelation from the God of Easy. A 15–20 minute nap raises afternoon productivity, clears the mind, and makes life easy. The idea that "napping is lazy" is a difficult, outdated value system. Nap easily.', verdict: '✦ Official ruling: naps can be expensed as "rest breaks" (per our own standards)' },
  ],
  ja: [
    { num: '一', title: '難しく考えるなかれ', body: 'あらゆる問題は、イージーに解ける。「これは難しい」と思った瞬間、それは単なる思い込みである。イージーな視点で見直すべし。ただし本当に難しい場合は、それをイージーにする人に頼むべし。それもイージーである。', verdict: '✦ 難しく考えた場合の罰則：特になし（それもイージーに）' },
    { num: '二', title: '残業するなかれ', body: '真のイージー信者は、常に「イージーにする方法」を考え抜き、ノットイージーをイージーにする。残業ではなくイージーについて考える時間である。', verdict: '✦ 残業した場合の罰則：イージー経典を読む（読まなくても良い）' },
    { num: '三', title: '無駄な会議を開くなかれ', body: '「この会議、本当に必要か？」と問え。答えが「たぶんそうかも」であれば、その会議は不要である。本当に必要な会議は5分で終わる。5分で終わらない会議は、準備が足りていないか、そもそも会議でなく雑談である。', verdict: '✦ 目安：会議の最適な長さは「シーシャ1服分」' },
    { num: '四', title: 'シーシャを吸うべし', body: 'イージー教における唯一の積極的戒律。シーシャは思考をイージーにし、会話をイージーにし、時間の流れをイージーにする。水を通したまろやかな煙が、あらゆる焦りをゆっくりと溶かす。吸えない者は香りを嗅ぐだけでも可。要は「ゆっくり煙と向き合う時間を持て」ということである。', verdict: '✦ 週1回以上シーシャカフェに行くことで「イージー修行者」の称号を得る' },
    { num: '五', title: '昼寝を恐れるなかれ', body: '午後の眠気はイージー神からの啓示である。15〜20分の仮眠は、午後の生産性を高め、思考をクリアにし、人生をイージーにする。「昼寝は怠惰だ」という考えは、前時代の難しい価値観である。イージーに昼寝せよ。', verdict: '✦ 公式見解：昼寝は「仮眠」として経費申請可能（当社比）' },
  ],
}
const RANKS = {
  en: [
    { icon: '🌟', title: 'Easy Grand Master', desc: "All-knowing, all-easy. Doesn't know the concept of \"difficult.\" Can solve every problem while smoking shisha. Currently only one confirmed individual exists (and they're not even aware of it).", badge: 'Highest Rank' },
    { icon: '⭐', title: 'Easy Master', desc: 'Someone who smokes shisha 5+ days a week and keeps monthly overtime at zero hours. Catchphrase: "we can make that easy." A little overwhelmed from being relied on too much.', badge: 'Advanced' },
    { icon: '✦',  title: 'Easy Practitioner', desc: 'Still training in "difficult → easy" conversion. Asks themself "could this be made easier?" 12+ times a day. Still works overtime occasionally, and that too is easily tolerated.', badge: 'Intermediate' },
    { icon: '☕', title: 'Easy Novice', desc: "Someone who has read this page all the way to the end. That's you. Congratulations — you've already started down the path of Easy. Joining is free. Leaving is easy too (well, there's no system, so you just fade out naturally).", badge: 'Beginner' },
    { icon: '😴', title: 'Easy Candidate', desc: 'Someone who napped today, or who has ever thought "I wish we had fewer meetings." You have the talent. Smoke some shisha, read this page, and you\'ll be promoted automatically.', badge: 'Entry Level' },
  ],
  ja: [
    { icon: '🌟', title: 'イージー大師', desc: '全知全イージー。「難しい」という概念を知らない。シーシャを吸いながら全ての問題を解決できる。現在1名のみ確認されている（本人は自覚なし）。', badge: '最高位' },
    { icon: '⭐', title: 'イージー師範', desc: '週5日以上シーシャを吸い、残業を月0時間に抑えた者。「それ、イージーにできますよ」が口癖。周囲から頼られすぎて少し困っている。', badge: '上級' },
    { icon: '✦',  title: 'イージー修行者', desc: '「難しい→イージーに変換」の訓練中。1日12回以上「これイージーにできないか？」と自問している。まだ時々残業する。それも含めてイージーに許容されている。', badge: '中級' },
    { icon: '☕', title: 'イージー見習い', desc: 'このページを最後まで読んだ者。あなたのことである。おめでとう。すでにイージーの道を歩み始めている。入信料は無料。退会もイージー（というかシステムがないので自然消滅）。', badge: '初級' },
    { icon: '😴', title: 'イージー候補', desc: '今日昼寝をした者、または「会議を減らしたい」と思ったことがある者。あなたには素質がある。シーシャを吸ってこのページを読んでいただければ、自動的に昇格する。', badge: '入門' },
  ],
}
const HOLYDAYS = {
  en: [
    { date: 'Daily, 7:00–8:00 AM', name: 'Morning Easy Hour', desc: 'A sacred hour for starting the day without rushing. Smoke shisha while thinking about "how to spend today, easily." Not looking at your phone is recommended.', ritual: 'Ritual: Smoke one shisha' },
    { date: 'Every Friday', name: 'Easy Friday', desc: 'A day to close out the week by reflecting on "what did I make easier this week?" If you don\'t want to reflect, you don\'t have to. That\'s easy too.', ritual: 'Ritual: Leave on time (absolute)' },
    { date: 'First Monday of every month', name: 'Easy Month-Start Ceremony', desc: 'A day to silently vow, "I will spend this month easily too." You only need to say the vow inside your head.', ritual: "Ritual: None in particular (that's the easy part)" },
    { date: 'December 1', name: 'Founding Day of the Church of Easy', desc: 'The day EASY.INC was founded. All believers need only mutter the word "Easy" once. No grand ceremony is planned — because that wouldn\'t be easy.', ritual: 'Ritual: Say "Easy" (once)' },
    { date: 'Birthday (yours)', name: 'Personal Easy Day', desc: 'The day you were born. On this day alone, do whatever you like, easily. You may eat cake. You may do nothing at all. Either is easy.', ritual: 'Ritual: Do whatever you like' },
    { date: 'Irregular', name: 'Spontaneous Easy Day', desc: 'A day when you suddenly feel "easy" for no particular reason. On that day, let everything flow easily. Important decisions can wait until tomorrow.', ritual: 'Ritual: Nap (recommended)' },
  ],
  ja: [
    { date: '毎日 7:00〜8:00', name: '朝のイージー時間', desc: '一日を急がず始めるための神聖な1時間。シーシャを吸いながら今日を「どうイージーに過ごすか」を考える。スマホを見ないことが推奨される。', ritual: '儀式：シーシャを1本吸う' },
    { date: '毎週金曜日', name: 'イージー・フライデー', desc: '週の締めくくりに「今週、何をイージーにしたか」を振り返る日。振り返りたくない場合は、振り返らなくてもよい。それもイージーである。', ritual: '儀式：定時退社（絶対）' },
    { date: '毎月第一月曜日', name: 'イージー月始め式', desc: '新しい月に「今月もイージーに過ごします」と心に誓う日。誓いの言葉は心の中で唱えるだけでよい。', ritual: '儀式：特になし（それがイージー）' },
    { date: '12月1日', name: 'イージー教創設記念日', desc: 'EASY.INCが設立された日。信者全員が「イージー」と一言つぶやくだけでよい。盛大な式典は予定していない。イージーではないから。', ritual: '儀式：「イージー」と言う（1回）' },
    { date: '誕生日（各自）', name: '個人イージー記念日', desc: 'あなたが生まれた日。この日ばかりは、イージーに好きなことをしてよい。ケーキを食べてもよい。なにもしなくてもよい。どちらもイージーである。', ritual: '儀式：好きなことをする' },
    { date: '不定期', name: '突発的イージーの日', desc: '「今日はなんかイージーな気分だ」と感じた日。その日は全てをイージーに流してよい。重要な判断は明日でよい。', ritual: '儀式：昼寝（推奨）' },
  ],
}
const FAQS = {
  en: [
    { q: 'What happens if I join the Church of Easy?', a: 'Nothing in particular changes. You\'ll just develop a slightly stronger habit of thinking "if it\'s hard, just make it easy." Side effect: fewer meetings.' },
    { q: 'Is there a fee to join?', a: "It's free. Donations are optional too. Actually, setting up a window to receive donations wasn't easy, so we don't accept them at all." },
    { q: 'Can I follow another religion at the same time?', a: "Easy. Worrying about conflicts with other religions is a hard thing to do, so we've decided not to worry about it." },
    { q: "What if I can't smoke shisha?", a: 'Anything works. The important part is having a "slow time to take something in." Just don\'t forget your respect for shisha.' },
    { q: 'Can I leave?', a: 'There\'s no membership record to begin with, so there\'s no concept of leaving. The moment you think "I don\'t need to be easy anymore," you\'re automatically considered to have left.' },
    { q: 'Is the Church of Easy a real religion?', a: 'No. It\'s placeholder content on EASY.INC\'s website. That said, the idea that "living easy beats living hard" is genuinely real.' },
  ],
  ja: [
    { q: 'イージー教に入信するとどうなりますか？', a: '特に何も変わりません。ただ、「難しいことはイージーにすればいい」という視点が少し強くなります。副作用として、会議が減ります。' },
    { q: '入信費用はかかりますか？', a: '無料です。お布施も任意です。というかお布施の受け取り窓口を作るのがイージーではないので、受け付けていません。' },
    { q: '他の宗教との掛け持ちはできますか？', a: 'イージーです。他の宗教とのコンフリクトを気にするのは難しいことなので、気にしないことにしています。' },
    { q: 'シーシャが吸えない場合はどうすればよいですか？', a: 'なんでもよいです。要は「ゆっくり吸う時間」が大切です。ただし、シーシャへのリスペクトは忘れずに。' },
    { q: '退会できますか？', a: 'そもそも入会記録がないので、退会の概念がありません。「もうイージーじゃなくていいや」と思った瞬間に、自動的に退会扱いになります。' },
    { q: 'イージー教は本物の宗教ですか？', a: 'いいえ。EASY.INCのダミーサイトのコンテンツです。ただ、「難しく生きるより、イージーに生きた方がいい」という考え方は本物です。' },
  ],
}

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
  const { lang, t } = useLanguage()
  return (
    <>
      <section className="reli-hero">
        <div className="reli-hero-bg" />
        <div className="symbol">☯️</div>
        <p className="reli-eyebrow">The Church of Easy</p>
        <h1 className="reli-title">{t(<>Welcome to<br /><em>the Church of Easy</em>.</>, <><em>イージー教</em>へ<br />ようこそ</>)}</h1>
        <p className="reli-sub">{t('For those tired of living the hard way. We are a gathering of people who believe in the truth of Easy. Joining is easy.', '難しく生きることに疲れたあなたへ。私たちは、イージーという真理を信じる者たちの集いです。入信はイージーです。')}</p>
        <span className="reli-scroll">{t('↓ Reach enlightenment', '↓ 悟りを開く')}</span>
      </section>

      <section className="section-block wrap fade-in">
        <p className="reli-section-label">{t('What is the Church of Easy', 'What is イージー教')}</p>
        <h2 className="reli-section-heading">{t('What Is the Church of Easy?', 'イージー教とは何か')}</h2>
        <p style={{opacity:0.65,lineHeight:1.9,marginBottom:'2rem'}}>{t("The Church of Easy is the easiest belief system in human history, secretly founded somewhere in Tokyo in 2024. We consider \"difficulty\" evil and \"easiness\" the highest virtue. We are not registered as a religious organization, because registering wasn't easy.", 'イージー教は、2024年に東京のどこかで密かに創設された、人類史上最もイージーな思想体系です。私たちは「難しさ」を悪とし、「イージーさ」を最高の徳と考えます。宗教法人の登録はしていません。なぜなら、登録がイージーではないからです。')}</p>
        <table className="info-table"><tbody>
          {(lang === 'ja' ? [
            ['開祖','イージー大師（正体不明）'],['創設','2024年（たぶん12月）'],['聖典','イージー教典（全1ページ）'],['礼拝','任意（しなくてもイージー）'],['戒律','難しいことをしない（1つだけ）'],['本部','EASY.INC（兼用）'],
          ] : [
            ['Founder','The Easy Grand Master (identity unknown)'],['Founded','2024 (December, probably)'],['Scripture','The Easy Scripture (one page total)'],['Worship','Optional (skipping it is easy too)'],['Commandment',"Don't do hard things (just the one)"],['Headquarters','EASY.INC (dual-use)'],
          ]).map(([k,v])=>(<tr key={k}><td>{k}</td><td>{v}</td></tr>))}
        </tbody></table>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">{t('The Ten Commandments (well, five)', 'The Ten Commandments（ただし5つ）')}</p>
        <h2 className="reli-section-heading">{t('The Five Precepts of Easy', 'イージー教 五戒')}</h2>
        <div className="tenets">
          {TENETS[lang].map((tn,i)=>(
            <div className="tenet fade-in" key={i}>
              <div className="tenet-num">{tn.num}</div>
              <div><h3 className="tenet-title">{tn.title}</h3><p className="tenet-body">{tn.body}</p><p className="tenet-verdict">{tn.verdict}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Holy Scripture</p>
        <h2 className="reli-section-heading">{t('The Easy Scripture (Full Text)', 'イージー教典（全文）')}</h2>
        <div className="scripture-block fade-in">
          <p className="scripture-label">{t('The Easy Scripture, Chapter One, All Verses (also the Final Chapter)', 'イージー教典 第一章 全節（兼 最終章）')}</p>
          <div className="scripture-text">
            {lang === 'ja' ? (
              <>
                <p><span className="scripture-verse">第一節：</span> はじめに、イージーがあった。イージーは世とともにあり、世はイージーによって作られた。難しいものは、後から人が作った。</p>
                <p><span className="scripture-verse">第二節：</span> イージー大師は言った。「難しいと思うな。イージーだと思え。すると、イージーになる。」弟子たちは「それだけですか？」と聞いた。大師は「それだけだ。イージーだろう？」と答えた。</p>
                <p><span className="scripture-verse">第三節：</span> ある日、弟子のひとりが大師に「もっと深い教えを」と求めた。大師はシーシャをひと服吸い、煙をゆっくりと吐き出し、「イージーに生きよ」と言った。弟子は悟った。</p>
                <p><span className="scripture-verse">第四節：</span> 難しき者は難しく生き、イージーなる者はイージーに生きる。どちらが幸せかは、問うまでもない。</p>
                <p><span className="scripture-verse">最終節：</span> 以上がイージー教典の全てである。短いと思うかもしれないが、それがイージーである証拠である。アーイージー。</p>
              </>
            ) : (
              <>
                <p><span className="scripture-verse">Verse 1:</span> In the beginning, there was Easy. Easy was with the world, and the world was made through Easy. Difficult things were made by people, afterward.</p>
                <p><span className="scripture-verse">Verse 2:</span> The Easy Grand Master said, "Do not think it is hard. Think it is easy. Then it becomes easy." The disciples asked, "Is that all?" The Master replied, "That is all. Easy, isn't it?"</p>
                <p><span className="scripture-verse">Verse 3:</span> One day, a disciple asked the Master for a deeper teaching. The Master took a draw of shisha, slowly exhaled the smoke, and said, "Live easy." The disciple was enlightened.</p>
                <p><span className="scripture-verse">Verse 4:</span> The difficult live difficultly, and the easy live easily. Which one is happier need not be asked.</p>
                <p><span className="scripture-verse">Final Verse:</span> That is the entirety of the Easy Scripture. You may think it short, but that is proof of its easiness. A-easy-men.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Hierarchy of Easiness</p>
        <h2 className="reli-section-heading">{t('The Hierarchy of Easy', 'イージー教 階位制度')}</h2>
        <div className="hierarchy">
          {RANKS[lang].map((r,i)=>(
            <div className="rank-item fade-in" key={i}>
              <div className="rank-content"><span className="rank-icon">{r.icon}</span><span className="rank-title">{r.title}</span><span className="rank-desc">{r.desc}</span></div>
              <span className="rank-badge">{r.badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Sacred Calendar</p>
        <h2 className="reli-section-heading">{t('The Sacred Calendar of Easy', 'イージー教 祝祭日')}</h2>
        <div className="holydays-grid">
          {HOLYDAYS[lang].map((h,i)=>(
            <div className="holyday-item fade-in" key={i}>
              <p className="holyday-date">{h.date}</p><h3 className="holyday-name">{h.name}</h3>
              <p className="holyday-desc">{h.desc}</p><p className="holyday-ritual">{h.ritual}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block wrap">
        <p className="reli-section-label">Frequently Asked Questions</p>
        <h2 className="reli-section-heading">{t('Frequently Asked Questions', 'よくある質問')}</h2>
        <div className="faq-list">{FAQS[lang].map((f,i)=><FaqItem key={i} {...f} />)}</div>
      </section>

      <div className="join-banner">
        <h2 className="join-title">{t(<>Join right now.<br />(Actually, you already have.)</>, <>今すぐ入信する。<br />（というか、もうしてます）</>)}</h2>
        <p className="join-sub">{t("Having read this page to the end, you're already an Easy Novice. Congratulations. There's no paperwork required.", 'このページを最後まで読んだあなたは、すでにイージー見習いです。おめでとうございます。特に手続きはありません。')}</p>
        <Link to="/careers" className="join-btn">{t('Work at EASY.INC (the real initiation)', 'EASY.INCで働く（本物の入信）')}</Link>
        <p className="join-disclaimer">{t('* The Church of Easy is not a registered religious organization. It has no legal authority. Shisha is not mandatory (though it is recommended).', '※ イージー教は宗教法人ではありません。法的拘束力もありません。シーシャの強制もありません（推奨はします）。')}</p>
      </div>
    </>
  )
}
