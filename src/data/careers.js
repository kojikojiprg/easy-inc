export const requirements = {
  required: [
    'なんとなくやる気がある',
    'パソコンが開ける',
    'コーヒーまたは飲み物を飲める（種類不問）',
    '「イージー」という言葉に嫌悪感がない',
    '定時に帰れる（これは必須）',
  ],
  welcomed: [
    '昼寝が得意',
    '「これイージーにできるな」が口癖',
    '1日2杯以上コーヒーを飲む',
    '名前に「イージー」が入っている（加点方式）',
    'このページを最後まで読んだ（あなたは今ここです）',
  ],
}

export const process = [
  { num: '01', title: '書類選考', desc: 'メールが届いていれば通過。届いていなければ、迷惑メールフォルダを確認してください。', time: '所要時間：1秒' },
  { num: '02', title: '面接（1回のみ）', desc: '質問は1問のみ。「好きな食べ物は何ですか？」\n正解はありません。', time: '所要時間：5分' },
  { num: '03', title: '内定', desc: '面接当日にお伝えします。「考えます」と言った場合も、翌日にお伝えします。', time: '所要時間：イージー' },
  { num: '04', title: '入社', desc: 'ご都合のよい日にお越しください。入社手続きも、できる限りイージーにしています。', time: '所要時間：ゆっくりどうぞ' },
]

export const culture = [
  { icon: '🎯', title: '本質だけに集中する', desc: '不必要な会議、不必要なプロセス、不必要な複雑さを徹底的に排除します。あなたの時間は、本当に大切なことだけに使われます。', quote: '"The ability to simplify means to eliminate the unnecessary so that the necessary may speak." — Hans Hofmann' },
  { icon: '😴', title: '昼寝は権利である', desc: '15〜20分の仮眠は公式に推奨されています。「仮眠室」という名の会議室があります。予約不要。起こしません。', quote: '"A rested mind is an easy mind." — EASY.INC Employee Handbook, p.1（全1ページ）' },
  { icon: '☕', title: 'コーヒーは無限に出る', desc: 'オフィスのコーヒーマシンに上限はありません。飲みすぎ注意という規定もありません。全部会社持ちです。', quote: '"Coffee is a language in itself." — Jackie Chan（本当にこう言ったらしい）' },
]

export const benefits = [
  { icon: '🏠', title: 'フルリモート可', desc: '布団の中から働いても怒りません。ただしカメラオフを推奨します（お互いのために）。' },
  { icon: '⏰', title: 'コアタイム：なし', desc: '「コアタイムを決めること」がイージーではないため、設定していません。起きたら仕事してください。' },
  { icon: '📚', title: '学習支援 無制限', desc: '「これ買いたい」と言えばだいたい通ります。申請フォームはありません。Slackで「買っていいですか」と聞くだけです。' },
  { icon: '💤', title: '昼寝手当', desc: '昼寝した日は+500円。証明方法：「昼寝しました」と申告するだけ。確認はしません。イージーに申告してください。' },
  { icon: '☕', title: 'コーヒー飲み放題', desc: '前述の通り。リモートの場合はコーヒー代を月1万円まで経費申請できます。スタバでもイージーに。' },
  { icon: '🌴', title: '有休：存在しない', desc: '休みたい日は休んでください。申請不要。「今日休みます」とSlackに書けば十分です。既読スルーで承認とします。' },
  { icon: '💰', title: '給与：要相談', desc: '「いくら欲しいですか？」という質問から始まります。高い方が頑張れるならそれがイージーです。' },
  { icon: '🐈', title: 'ペット同伴可', desc: '社内猫「イージーみけ」と仲良くできる方に限ります。みけの機嫌が最終面接の合否に影響することがあります。' },
]

export const jobs = [
  { id: 'job1', dept: 'Engineering', type: '正社員', badge: 'NEW',   title: '何かをイージーにするエンジニア',        location: 'どこでも',          salary: '希望を言ってください', hours: 'いつでも',    body: '何かをイージーにしてください。何かはあなたが決めていいです。「これイージーにしたいな」と思ったことを、イージーにしてください。それが仕事です。週報もイージーです（任意）。', required: ['パソコンが開ける', '「イージー」という言葉に抵抗がない', '何かをイージーにしたいという気持ち'], welcomed: ['TypeScript / Python / その他なんでも', 'コーヒーが好き', '昼寝が得意'], mailto: 'careers@easy-inc.jp?subject=エンジニア応募', cta: 'イージーに応募する →' },
  { id: 'job2', dept: 'Design',      type: '正社員', badge: null,    title: '見た目をイージーにするデザイナー',        location: 'フルリモート',        salary: '話し合い',             hours: 'ゆっくりどうぞ', body: '見た目をイージーにしてください。「これ、ごちゃごちゃしてるな」と思ったらシンプルにしてください。「これ、難しそうに見えるな」と思ったらわかりやすくしてください。それだけです。',      required: ['Figmaが使える（またはなんか他のツール）', '「ごちゃごちゃ」を「すっきり」に変える感覚', 'ポートフォリオ（あれば。なければ手描きでも可）'], welcomed: [], mailto: 'careers@easy-inc.jp?subject=デザイナー応募', cta: 'イージーに応募する →' },
  { id: 'job3', dept: 'Special',     type: '正社員', badge: '大注目', title: 'イージー推進部長（新設ポジション）',      location: 'オフィス（猫がいる）', salary: 'コーヒー代込み',       hours: '昼寝込み',    body: '社内の「難しいもの」を見つけて、「イージーにしろ」と言う役職です。具体的な解決策は考えなくていいです。「これイージーじゃない」と声に出すだけで、周囲が動きます。',             required: ['「これイージーじゃない」と言える勇気', '猫と仲良くできる（イージーみけとの面接あり）', '特になし'], welcomed: [], mailto: 'careers@easy-inc.jp?subject=イージー推進部長応募', cta: '部長になる →' },
  { id: 'job4', dept: 'Executive',   type: '役員候補', badge: null,   title: '最高イージー責任者（CeO: Chief easy Officer）', location: 'どこでも（宇宙以外）', salary: '要相談（高め希望）', hours: '基本定時',    body: '会社全体の「イージー度」に責任を持つ役員です。「全体的にイージーか？」を常に監視し、イージーでない状況が発生したら「もっとイージーに」と指示を出します。',             required: ['CEO = Chief Executive Officerと区別できる', 'CeO = Chief easy Officerの重要性を理解している', '当社ではCeOの方が重要と知っている'], welcomed: [], mailto: 'careers@easy-inc.jp?subject=CeO応募', cta: '役員になる（イージーに）→' },
  { id: 'job5', dept: 'Mascot',      type: '業務委託', badge: null,   title: '社内マスコット補佐（猫枠・人間も可）',    location: 'オフィス必須',       salary: 'おやつ支給',           hours: '自由',        body: '社内猫「イージーみけ」の補佐業務全般。みけが昼寝している間のオフィス雰囲気の維持、みけが機嫌を損ねた際の対応、みけが採用面接に参加する際のアシスタントなどが主な業務です。猫枠ですが人間も応募可能です。', required: ['猫が好き（嫌いな場合、みけが察知します）', 'おやつを勝手に食べない', '昼寝を邪魔しない'], welcomed: [], mailto: 'careers@easy-inc.jp?subject=マスコット補佐応募', cta: 'みけに会いに来る →' },
]
