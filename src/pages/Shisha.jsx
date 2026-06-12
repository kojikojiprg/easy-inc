import { useFadeIn } from '../hooks/useFadeIn'
import { Link } from 'react-router-dom'
import '../styles/religion-shisha.css'

const CHARMS = [
  { num: '一', title: '煙が、時間を遅くする', body: 'シーシャを吸う行為は、本質的に「急げない」。炭を熱し、煙が立ち上がるのを待ち、ゆっくりと吸い込み、静かに吐き出す。この一連のリズムが、現代人が失った「待つ能力」を自然に引き出す。', verdict: '✦ 1セッション平均60〜90分。それだけ「急がない」が続く' },
  { num: '二', title: 'みんなで囲む、最高の会話装置', body: 'シーシャは、本来ひとつの器を複数人でシェアする文化から生まれた。ひとつのホースを囲んで座る。それだけで、不思議と会話が始まる。画面を見なくなる。沈黙も苦にならない。', verdict: '✦「シーシャしながら話す」は、世界どこでも通じる万国共通の社交スタイル' },
  { num: '三', title: 'フレーバーという名の、感情の翻訳', body: 'ミント、ダブルアップル、マンゴー、グレープ、ローズ——シーシャのフレーバーは100種を超える。今日の気分に合わせてフレーバーを選ぶ行為は、自分の感情をおいしく言語化することだ。', verdict: '✦ フレーバーで今日の感情を表現する新習慣を、EASY.INCは推奨する' },
  { num: '四', title: '美しすぎる、存在そのもの', body: 'シーシャの器具は、それ自体がアート作品だ。ガラスのフラスコ、金属の装飾、彩り豊かなホース。卓上に置くだけで場の雰囲気が変わる。煙の立ち上る様は、見ているだけで瞑想に近い状態を生む。', verdict: '✦ 煙の形を眺めていた時間は、無駄ではない。それが最も豊かな時間だ' },
  { num: '五', title: '500年続く文化の、重力', body: 'インドで生まれ、ペルシャで洗練され、オスマン帝国で社交の中心となり、エジプトで民衆に広まり、今や東京・渋谷のシーシャカフェでも楽しめる。500年以上、人類がやめなかった習慣には理由がある。', verdict: '✦ トルコ語で「ナルギーレ」、アラビア語で「شيشة」。名前は違えど、気持ちいいは共通' },
]

const EFFECTS = [
  { num: 'Effect 01', title: '思考のリセット', desc: 'ゆっくりとした呼吸リズムが、過集中した脳に「落ち着け」というシグナルを送る。瞑想に近い状態が自然と訪れる。', note: '※ 当社比。個人差あり。' },
  { num: 'Effect 02', title: 'ストレス値の低下', desc: '薄暗い照明、くつろげるソファ、穏やかな音楽。この環境トリオが、コルチゾールを自動的に破壊する（たぶん）。', note: '※ コルチゾール破壊は比喩です。' },
  { num: 'Effect 03', title: '会話の質が上がる', desc: 'シーシャを囲むと不思議と深い話になる。煙が口を開かせるのか、時間がそうさせるのか。いずれにせよ、良い会話が生まれる。', note: '※ 口論になった場合はシーシャのせいではありません。' },
  { num: 'Effect 04', title: '時間感覚の正常化', desc: '現代人はせっかちすぎる。シーシャの1セッションで、「1時間をかけてひとつのことをする」という人類本来の時間感覚を取り戻せる。', note: '※ 元の時間感覚が正常かどうかは各自に委ねます。' },
  { num: 'Effect 05', title: '人間関係のイージー化', desc: '「シーシャ行かない？」は最強の誘い文句だ。断られることが少なく、行けば必ず楽しく、帰りに「また行こう」と言える。', note: '※ 断られた場合も、イージーに受け流してください。' },
  { num: 'Effect 06', title: 'アイデアの自然発生', desc: 'シーシャを吸っているとき、脳はリラックスしながらも覚醒している。この状態が創造的思考を促す。偉大な発明の何割かはシーシャ中に生まれたと当社は考えている（根拠なし）。', note: '※ 根拠はありません。でも気がしています。' },
]

const FLAVORS = [
  { tag: 'EASY定番', emoji: '🍃', name: 'ミント', desc: '清涼感と爽やかさの王道。迷ったらこれ。どんな気分でも外さない、イージー教公認フレーバー。' },
  { tag: '中東の王道', emoji: '🍎', name: 'ダブルアップル', desc: '500年の歴史を持つ定番中の定番。甘さと酸味が絶妙で、初心者にも玄人にも愛される不滅の一品。' },
  { tag: 'やる気を出したい日', emoji: '🍋', name: 'レモン＆ミント', desc: '爽快感と清涼感の合わせ技。頭をスッキリさせたいとき、気合いを入れたいときに最適。' },
  { tag: '甘えたい日', emoji: '🍇', name: 'グレープ', desc: '濃厚な甘みと果実感。誰かに甘えたいとき、自分を甘やかしたいとき。イージーに糖分補給。' },
  { tag: '南国に逃げたい日', emoji: '🥭', name: 'マンゴー', desc: 'トロピカルな甘さで、一瞬で南の島へ。現実から逃げたいすべての人類へ贈るフレーバー。' },
  { tag: '自分を大事にしたい日', emoji: '🌹', name: 'ローズ', desc: '上品で華やかな花の香り。「今日は自分へのご褒美」と思いながら吸うと効果が2倍になる（当社比）。' },
]

const HISTORY = [
  { era: '16世紀', title: '発祥', desc: 'インド・ペルシャ地方で発祥。タバコの煙を水に通すことで喉への刺激を和らげる方法を、インドの医者たちが考案。イージーの原点はここにある。', badge: '発祥' },
  { era: '17世紀', title: '黄金期', desc: 'オスマン帝国で爆発的に普及。イスタンブールのカフェでは、上流階級から庶民まで、シーシャを囲んで語り合う文化が根付く。社交とシーシャが不可分になる。', badge: '黄金期' },
  { era: '18〜19世紀', title: '拡散', desc: 'エジプト・レバント・北アフリカへ広がる。各地域独自のスタイルとフレーバーが生まれ、シーシャ文化が多様化。', badge: '拡散' },
  { era: '20世紀後半', title: '西方進出', desc: 'グローバル化とともに欧米へ上陸。ロンドン、ニューヨーク、パリにシーシャバーが登場。異文化体験として若者世代に支持される。', badge: '西方進出' },
  { era: '2010年代〜', title: '日本上陸', desc: '日本でシーシャカフェブーム到来。都市部を中心に専門店が急増。SNSでの拡散とともに「体験型コンテンツ」として若者文化に溶け込む。', badge: '日本上陸' },
  { era: '2024年', title: '新章突入', desc: 'EASY.INCが設立。シーシャを公式哲学として採択。「イージー教四戒：シーシャを吸うべし」が制定される。歴史はここで新たな章へ突入する。', badge: '新章突入' },
]

const THESIS = [
  '第一条：シーシャは「急ぐ」を物理的に不可能にする。炭に火をつけ、煙が安定するまで待つ。煙を急いで吸い込んでも美味しくない。シーシャは、急ごうとする人間の本能を、設計の段階で潰してある。これ以上イージーな強制装置があるか。ない。',
  '第二条：シーシャは「何もしない」を正当化してくれる。「何してたの？」「シーシャ」——これで全て説明がつく。現代最強の「何もしない」の免罪符である。',
  '第三条：準備も片付けも誰かがやってくれる。シーシャカフェに行けば、炭の準備も器具の設置も灰の処理も全部スタッフがやってくれる。自分がやることは座って吸うだけ。これを「アウトソーシング」と呼ばずに何と呼ぶ。',
  '第四条：シーシャに失敗はない。煙が少なくても、フレーバーが好みでなくても、それはそれで体験だ。「これはこれでアリかも」が必ず生まれる。',
  '第五条：500年間、誰も「もうやめよう」と言わなかった。これが最大の証拠だ。流行が来て、批判が来て、規制が来て、それでもやめなかった。イージーでないものは、人は500年続けない。シーシャはイージーだ。これ以上の論拠はない。',
]

export default function Shisha() {
  useFadeIn()
  return (
    <>
      <section className="reli-hero">
        <div className="reli-hero-bg" />
        <div className="symbol">💨</div>
        <p className="reli-eyebrow">The Official Philosophy of EASY.INC</p>
        <h1 className="reli-title"><em>シーシャ</em>は<br />イージーです</h1>
        <p className="reli-sub">私たちは長い議論の末に結論を出した。シーシャこそが、イージーの最終形態である、と。</p>
        <span className="reli-scroll">↓ 煙とともに悟れ</span>
      </section>

      {/* WHAT IS */}
      <section className="section-block wrap fade-in">
        <p className="reli-section-label">What is Shisha</p>
        <h2 className="reli-section-heading">シーシャとは何か</h2>
        <p style={{opacity:0.65,lineHeight:1.9,marginBottom:'1.5rem'}}>シーシャ（水タバコ）は、16世紀のインド・ペルシャ地方で生まれた喫煙文化だ。タバコの煙を一度水にくぐらせることで冷却・浄化し、まろやかなフレーバーとともに楽しむ。</p>
        <p style={{opacity:0.65,lineHeight:1.9,marginBottom:'2rem'}}>EASY.INCは、シーシャを単なる嗜好品として推奨しているのではない。シーシャを<em style={{color:'var(--gold)',fontStyle:'normal'}}>哲学として</em>推奨している。</p>
        <table className="info-table"><tbody>
          {[['発祥','インド・ペルシャ地方（16世紀）'],['歴史','500年以上（やめた人類なし）'],['フレーバー','100種以上（まだ増えてる）'],['平均時間','60〜90分/セッション'],['急げるか','物理的に不可能'],['イージー度','∞（測定不能）']].map(([k,v])=>(<tr key={k}><td>{k}</td><td>{v}</td></tr>))}
        </tbody></table>
      </section>

      {/* CHARMS */}
      <section className="section-block wrap">
        <p className="reli-section-label">Why We Love It</p>
        <h2 className="reli-section-heading">シーシャの魅力</h2>
        <div className="tenets">
          {CHARMS.map((t,i)=>(
            <div className="tenet fade-in" key={i}>
              <div className="tenet-num">{t.num}</div>
              <div><h3 className="tenet-title">{t.title}</h3><p className="tenet-body">{t.body}</p><p className="tenet-verdict">{t.verdict}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* EFFECTS */}
      <section className="section-block wrap">
        <p className="reli-section-label">The Science of Easy</p>
        <h2 className="reli-section-heading">シーシャの効果</h2>
        <div className="effects-grid">
          {EFFECTS.map((e,i)=>(
            <div className="effect-item fade-in" key={i}>
              <p className="effect-num">{e.num}</p>
              <h3 className="effect-title">{e.title}</h3>
              <p className="effect-desc">{e.desc}</p>
              <p className="effect-note">{e.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THESIS */}
      <section className="section-block wrap">
        <p className="reli-section-label">The EASY.INC Thesis</p>
        <h2 className="reli-section-heading">シーシャはなぜイージーか</h2>
        <div className="scripture-block fade-in">
          <p className="scripture-label">EASY.INC 公式見解書 — 全5条</p>
          <div className="scripture-text">
            {THESIS.map((t,i)=><p key={i}><span className="scripture-verse">{t.slice(0,3)}</span>{t.slice(3)}</p>)}
          </div>
        </div>
      </section>

      {/* FLAVORS */}
      <section className="section-block wrap">
        <p className="reli-section-label">Flavor Guide</p>
        <h2 className="reli-section-heading">フレーバーで選ぶ、今日のイージー</h2>
        <div className="flavor-grid">
          {FLAVORS.map((f,i)=>(
            <div className="flavor-item fade-in" key={i}>
              <p className="flavor-tag">{f.tag}</p>
              <div className="flavor-emoji">{f.emoji}</div>
              <h3 className="flavor-name">{f.name}</h3>
              <p className="flavor-desc">{f.desc}</p>
            </div>
          ))}
        </div>
        <p style={{fontSize:'0.72rem',opacity:0.35,marginTop:'1rem'}}>※ フレーバー対応表は完全に当社の主観です。あなたの好みが最優先です。それがイージーです。</p>
      </section>

      {/* HISTORY */}
      <section className="section-block wrap">
        <p className="reli-section-label">History of Shisha</p>
        <h2 className="reli-section-heading">500年のイージー史</h2>
        <div className="shisha-timeline">
          {HISTORY.map((h,i)=>(
            <div className="stl-item fade-in" key={i}>
              <div className="stl-era">{h.era}<br /><span className="stl-badge">{h.badge}</span></div>
              <div><h3 className="stl-title">{h.title}</h3><p className="stl-desc">{h.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="join-banner">
        <h2 className="join-title">シーシャを吸え。<br />話はそれからだ。</h2>
        <p className="join-sub">結論は出た。シーシャはイージーだ。これ以上の議論は不要である。煙の向こうに、答えはある。</p>
        <Link to="/religion" className="join-btn">イージー教を信仰する →</Link>
        <p className="join-disclaimer">※ シーシャには健康リスクがあります。適度に、イージーに楽しんでください。当社は一切の責任を負いません（イージーに免責）。</p>
      </div>
    </>
  )
}
