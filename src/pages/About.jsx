import { useFadeIn } from '../hooks/useFadeIn'
import { useScrollHighlight } from '../hooks/useScrollHighlight'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

export default function About() {
  useFadeIn()
  useScrollHighlight('.value-item')
  const { lang, t } = useLanguage()
  return (
    <>
      <div className="page-hero">
        <p className="page-eyebrow fade-in">About EASY.INC</p>
        <h1 className="page-title fade-in">We believe<br /><em>easy</em><br />is everything.</h1>
        <p className="page-lead fade-in">{t("Easy. That one word holds our entire philosophy. Being easy isn't about cutting corners — it's the most honest answer you arrive at after thinking something all the way through.", 'イージー。その一言に、私たちの哲学のすべてが込められています。簡単であることは、手を抜くことではない。考え抜いた先にたどり着く、もっとも誠実な答えです。')}</p>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">{t('Leadership', '代表挨拶')}</p>
          <h2 className="section-heading fade-in">President's Message</h2>
          <div className="message-grid">
            <div className="president-card fade-in">
              <div className="president-avatar">🙂</div>
              <div className="president-name">{t('Easy Yamada', '山田 イージー')}</div>
              <div className="president-title">Founder &amp; CEO</div>
            </div>
            <div className="message-body fade-in">
              {lang === 'ja' ? (
                <>
                  <p>「イージー」という言葉を社名に選んだとき、多くの人に笑われました。「軽すぎる」「真剣さが伝わらない」と。でも私はむしろ、その反応こそが出発点だと思いました。</p>
                  <p>世の中には、わざと難しくしているものが溢れています。専門用語、複雑な手続き、読みにくい説明書。その多くは「作る側の都合」によるものです。使う人の立場から見れば、それは怠慢に他なりません。</p>
                </>
              ) : (
                <>
                  <p>When I chose the word "Easy" for our company name, a lot of people laughed. "Too light," they said. "It doesn't sound serious." But I thought that reaction was exactly the right place to start.</p>
                  <p>The world is full of things that are deliberately made difficult — jargon, convoluted procedures, manuals nobody can parse. Most of that exists for the maker's convenience. From the user's side, that's nothing but negligence.</p>
                </>
              )}
              <blockquote>"Easy reading is damned hard writing."<br /><span style={{fontSize:'0.8rem',opacity:0.5}}>— Nathaniel Hawthorne</span></blockquote>
              {lang === 'ja' ? (
                <>
                  <p>Hawthorneが言うように、「簡単に読める文章」を書くには、途方もない努力が必要です。同じことがあらゆる仕事に言えます。簡単に使えるプロダクト、簡単に伝わるコミュニケーション、簡単に動ける組織——これらはすべて、深い思考と地道な実行の結果です。</p>
                  <p>私たちは「イージー」を掲げることで、常に問い続けます。「まだ難しい部分が残っていないか？」「本当にこれがベストか？」と。答えが出るまで、私たちの仕事は終わりません。</p>
                  <p>EASY.INCは、難しいことを簡単にする会社です。それ以上でも、それ以下でもありません。その一点に、全力を尽くします。</p>
                </>
              ) : (
                <>
                  <p>As Hawthorne put it, writing something that reads easily takes an enormous amount of effort. The same is true of every kind of work. A product that's easy to use, communication that's easy to follow, an organization that's easy to run — all of it is the result of deep thinking and quiet, persistent execution.</p>
                  <p>By holding up "easy" as our banner, we keep asking ourselves: is there still a hard part left in here? Is this really the best we can do? Until we have an answer, our work isn't finished.</p>
                  <p>EASY.INC is a company that makes hard things easy. Nothing more, nothing less. We put everything we have into that one point.</p>
                </>
              )}
              <div className="message-sig">{t('Easy Yamada', '山田 イージー')}</div>
              <div style={{fontSize:'0.78rem',opacity:0.35,marginTop:'0.4rem',letterSpacing:'0.1em'}}>Founder &amp; CEO, EASY.INC</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">{t('Overview', '会社概要')}</p>
          <h2 className="section-heading fade-in">Company Overview</h2>
          <table className="info-table fade-in">
            <tbody>
              {(lang === 'ja' ? [
                ['会社名','イージー.inc（EASY.INC）'],['設立','2024年12月1日'],['代表者','代表取締役 山田 イージー'],['所在地','〒100-0001 東京都千代田区イージー通り1-2-3'],['資本金','1,000万円'],['事業内容','イージー事業全般（Easy Strategy / Easy Design / Easy Technology / Easy Growth）'],['取引銀行','イージー銀行 東京支店'],['コーポレートサイト','https://kojikojiprg.github.io/easy-inc/'],
              ] : [
                ['Company Name','EASY.INC'],['Founded','December 1, 2024'],['Representative','Easy Yamada, Representative Director'],['Address','1-2-3 Easy-dori, Chiyoda-ku, Tokyo 100-0001, Japan'],['Capital','¥10,000,000'],['Business','The Easy business, in general (Easy Strategy / Easy Design / Easy Technology / Easy Growth)'],['Bank','Easy Bank, Tokyo Branch'],['Website','https://kojikojiprg.github.io/easy-inc/'],
              ]).map(([k,v]) => (
                <tr key={k}><th>{k}</th><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">{t('Timeline', '沿革')}</p>
          <h2 className="section-heading fade-in">Our History</h2>
          <div className="timeline">
            {(lang === 'ja' ? [
              ['2023 — Spring','構想の始まり','創業者・山田が「なぜこんなに多くのことが難しいままなのか」という問いを持ち、EASY.INC の構想をスタート。最初のコンセプトノートを執筆。'],
              ['2024 — January','プロトタイプ開発開始','第一弾サービス「Easy Strategy」のプロトタイプ開発を開始。10社のβテスターとともに検証を繰り返す。'],
              ['2024 — June','シードラウンド調達','国内VCより初回シード資金を調達。チームを5名体制へ拡大し、プロダクト開発を本格化。'],
              ['2024 — December','イージー.inc 設立','東京都千代田区にて正式に法人設立。「Make It Easy」をコーポレートミッションとして掲げる。'],
              ['2025 — January','Easy Strategy サービス開始','第一弾サービスを正式リリース。ローンチ1ヶ月で導入企業20社を突破。'],
              ['2025 — March','Easy Design / Easy Technology ローンチ','サービスラインナップを拡充。デザインとテクノロジー領域のコンサルティングを開始。'],
              ['2025 — Present','プリシリーズA準備中','さらなる事業拡大に向け、次のラウンドを準備中。採用も積極的に強化中。'],
            ] : [
              ['2023 — Spring','The Idea Begins','Founder Yamada starts asking why so many things stay needlessly difficult, and begins shaping the concept for EASY.INC. Writes the first concept notes.'],
              ['2024 — January','Prototype Development Begins','Starts building a prototype of our first service, Easy Strategy. Iterates with 10 beta-testing companies.'],
              ['2024 — June','Seed Round Raised','Raises its first seed round from a domestic VC. Grows the team to 5 and ramps up product development.'],
              ['2024 — December','EASY.INC Incorporated','Officially incorporated in Chiyoda, Tokyo. Adopts "Make It Easy" as its corporate mission.'],
              ['2025 — January','Easy Strategy Launches','Officially releases its first service. Passes 20 client companies within a month of launch.'],
              ['2025 — March','Easy Design / Easy Technology Launch','Expands the service lineup. Begins offering consulting in design and technology.'],
              ['2025 — Present','Pre-Series A in Progress','Preparing the next funding round to fuel further growth. Actively ramping up hiring.'],
            ]).map(([year, event, desc]) => (
              <div className="tl-item fade-in" key={year}>
                <div className="tl-year">{year}</div>
                <div className="tl-event">{event}</div>
                <div className="tl-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">Our Values</p>
          <h2 className="section-heading fade-in">{t('3 Core Values', '3 つの信条')}</h2>
          <div className="values-row">
            {(lang === 'ja' ? [
              ['01','Radical Simplicity','難しさを恐れず、その先の「簡単」を追う。','"Simplicity is the ultimate sophistication." — Leonardo da Vinci'],
              ['02','Honest Effort','「簡単」は楽をすることではない。誠実な努力の結晶。','"Nothing is easy to the unwilling." — Thomas Fuller'],
              ['03','Human First','使う人の視点を、常に最優先に。','"Easy is right." — Zhuangzi'],
            ] : [
              ['01','Radical Simplicity',"Don't fear the hard part — chase the easy that's waiting on the other side of it.",'"Simplicity is the ultimate sophistication." — Leonardo da Vinci'],
              ['02','Honest Effort','"Easy" isn\'t about taking it easy. It\'s the crystallization of honest effort.','"Nothing is easy to the unwilling." — Thomas Fuller'],
              ['03','Human First',"Always put the user's perspective first.",'"Easy is right." — Zhuangzi'],
            ]).map(([num, name, desc, quote]) => (
              <div className="value-item fade-in" key={num}>
                <div className="value-num">{num}</div>
                <div className="value-name">{name}</div>
                <div className="value-desc">{desc}<br /><br /><em style={{opacity:0.4,fontSize:'0.82rem'}}>{quote}</em></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
