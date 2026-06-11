import { useFadeIn } from '../hooks/useFadeIn'
import './About.css'

export default function About() {
  useFadeIn()
  return (
    <>
      <div className="page-hero">
        <p className="page-eyebrow fade-in">About EASY.INC</p>
        <h1 className="page-title fade-in">We believe<br /><em>easy</em><br />is everything.</h1>
        <p className="page-lead fade-in">イージー。その一言に、私たちの哲学のすべてが込められています。簡単であることは、手を抜くことではない。考え抜いた先にたどり着く、もっとも誠実な答えです。</p>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">代表挨拶</p>
          <h2 className="section-heading fade-in">President's Message</h2>
          <div className="message-grid">
            <div className="president-card fade-in">
              <div className="president-avatar">🙂</div>
              <div className="president-name">山田 イージー</div>
              <div className="president-title">Founder &amp; CEO</div>
            </div>
            <div className="message-body fade-in">
              <p>「イージー」という言葉を社名に選んだとき、多くの人に笑われました。「軽すぎる」「真剣さが伝わらない」と。でも私はむしろ、その反応こそが出発点だと思いました。</p>
              <p>世の中には、わざと難しくしているものが溢れています。専門用語、複雑な手続き、読みにくい説明書。その多くは「作る側の都合」によるものです。使う人の立場から見れば、それは怠慢に他なりません。</p>
              <blockquote>"Easy reading is damned hard writing."<br /><span style={{fontSize:'0.8rem',opacity:0.5}}>— Nathaniel Hawthorne</span></blockquote>
              <p>Hawthorneが言うように、「簡単に読める文章」を書くには、途方もない努力が必要です。同じことがあらゆる仕事に言えます。簡単に使えるプロダクト、簡単に伝わるコミュニケーション、簡単に動ける組織——これらはすべて、深い思考と地道な実行の結果です。</p>
              <p>私たちは「イージー」を掲げることで、常に問い続けます。「まだ難しい部分が残っていないか？」「本当にこれがベストか？」と。答えが出るまで、私たちの仕事は終わりません。</p>
              <p>EASY.INCは、難しいことを簡単にする会社です。それ以上でも、それ以下でもありません。その一点に、全力を尽くします。</p>
              <div className="message-sig">山田 イージー</div>
              <div style={{fontSize:'0.78rem',opacity:0.35,marginTop:'0.4rem',letterSpacing:'0.1em'}}>Founder &amp; CEO, EASY.INC</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">会社概要</p>
          <h2 className="section-heading fade-in">Company Overview</h2>
          <table className="info-table fade-in">
            <tbody>
              {[['会社名','イージー.inc（EASY.INC）'],['設立','2024年12月1日'],['代表者','代表取締役 山田 イージー'],['所在地','〒100-0001 東京都千代田区イージー通り1-2-3'],['資本金','1,000万円'],['事業内容','イージー事業全般（Easy Strategy / Easy Design / Easy Technology / Easy Growth）'],['取引銀行','イージー銀行 東京支店'],['コーポレートサイト','https://easy-inc.jp']].map(([k,v]) => (
                <tr key={k}><th>{k}</th><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="wrap">
        <div className="section-block">
          <p className="section-label fade-in">沿革</p>
          <h2 className="section-heading fade-in">Our History</h2>
          <div className="timeline">
            {[['2023 — Spring','構想の始まり','創業者・山田が「なぜこんなに多くのことが難しいままなのか」という問いを持ち、EASY.INC の構想をスタート。最初のコンセプトノートを執筆。'],
              ['2024 — January','プロトタイプ開発開始','第一弾サービス「Easy Strategy」のプロトタイプ開発を開始。10社のβテスターとともに検証を繰り返す。'],
              ['2024 — June','シードラウンド調達','国内VCより初回シード資金を調達。チームを5名体制へ拡大し、プロダクト開発を本格化。'],
              ['2024 — December','イージー.inc 設立','東京都千代田区にて正式に法人設立。「Make It Easy」をコーポレートミッションとして掲げる。'],
              ['2025 — January','Easy Strategy サービス開始','第一弾サービスを正式リリース。ローンチ1ヶ月で導入企業20社を突破。'],
              ['2025 — March','Easy Design / Easy Technology ローンチ','サービスラインナップを拡充。デザインとテクノロジー領域のコンサルティングを開始。'],
              ['2025 — Present','プリシリーズA準備中','さらなる事業拡大に向け、次のラウンドを準備中。採用も積極的に強化中。'],
            ].map(([year, event, desc]) => (
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
          <h2 className="section-heading fade-in">3 つの信条</h2>
          <div className="values-row">
            {[['01','Radical Simplicity','難しさを恐れず、その先の「簡単」を追う。','"Simplicity is the ultimate sophistication." — Leonardo da Vinci'],
              ['02','Honest Effort','「簡単」は楽をすることではない。誠実な努力の結晶。','"Nothing is easy to the unwilling." — Thomas Fuller'],
              ['03','Human First','使う人の視点を、常に最優先に。','"Easy is right." — Zhuangzi'],
            ].map(([num, name, desc, quote]) => (
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
