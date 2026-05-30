const appUrl = "https://friendcast-tau.vercel.app/";

const aboutCards = [
  {
    title: "親しい人だけの声のタイムライン",
    text: "日記、近況、雑談、愚痴、考えを、届けたい相手にだけ残せます。広く拡散するより、ちゃんと伝わることを大切にします。",
  },
  {
    title: "文章からでも、音声からでも",
    text: "140文字以内の短文から始めても、最初から声で話してもOK。文字では足りない温度を、声でそっと補えます。",
  },
  {
    title: "配信者とリスナーではなく、友人同士",
    text: "番組をつくる場所ではなく、近い人へ話しかける場所。通話ほど重くなく、普通のSNSほど開かれすぎません。",
  },
];

const problems = [
  "音声サービスは配信者感が強く、ちゃんと話さなきゃと思いやすい",
  "公開SNSでは誰に見られるか分からず、本音を出しづらい",
  "テキストだけでは感情や温度、人柄が伝わりにくい",
  "数字や反応を意識すると、気軽な投稿がしにくい",
  "友達への声の投稿を安心して残せる場所が少ない",
];

const solutions = [
  "親しい人だけに届けられる",
  "投稿ごとに公開範囲を選べる",
  "雑談、愚痴、日記でも気軽に残せる",
  "文字では足りない部分を声で補える",
  "数字より関係性を大事にできる",
];

const comparisons = [
  {
    title: "普通のSNS",
    tag: "Open",
    points: [
      "広く届きやすい",
      "拡散や数字を意識しやすい",
      "本音を書きづらい",
      "テキスト中心になりやすい",
    ],
  },
  {
    title: "音声配信サービス",
    tag: "Broadcast",
    points: [
      "配信者とリスナーの構図になりやすい",
      "ちゃんと話す必要があるように感じる",
      "番組や放送っぽくなりやすい",
      "日常のひとことには少し重い",
    ],
  },
  {
    title: "friendcast",
    tag: "Close friends",
    featured: true,
    points: [
      "親しい人にだけ届く",
      "声の温度が残る",
      "日記や雑談でも投稿できる",
      "投稿ごとに届ける相手を選べる",
      "通話より軽く、SNSより安心",
    ],
  },
];

const features = [
  ["✍️", "テキスト投稿", "短い文章から始められるので、声にする前のメモや日記も残せます。"],
  ["🎙️", "音声録音・投稿", "文字では伝わりにくい感情や熱量を、そのまま声で届けられます。"],
  ["🏠", "タイムライン", "親しい人の近況や声を、落ち着いた順番で受け取れます。"],
  ["💬", "コメント / 返信", "反応を急かさず、短い言葉で会話を続けられます。"],
  ["↩️", "音声返信", "コメントだけでなく声で返せるから、会話の温度が残ります。"],
  ["🔐", "公開範囲設定", "投稿ごとに、誰へ届けるかを選べます。"],
  ["🤝", "フォロー / つながり", "友達や仲間、小さなコミュニティの距離感に合わせてつながれます。"],
  ["👤", "プロフィール", "声や文章の積み重ねで、自分らしさを自然に伝えられます。"],
  ["📱", "スマホブラウザ対応", "アプリを入れなくても、スマホからすぐに試せます。"],
  ["🔗", "リンク共有 / リンクカード", "気になった記事や動画を添えて、考えや感想を共有できます。"],
  ["🔖", "あとで聴く / しおり保存", "今すぐ聴けない声も、落ち着いたタイミングで聴き返せます。"],
  ["⬇️", "自分の音声ダウンロード", "残した声を、自分の記録として手元にも残せます。"],
];

const recommendItems = [
  "友達や仲間に近況を残したい人",
  "公開SNSで本音を出しづらい人",
  "音声配信まではしたくないけど、声で話したい人",
  "自分の人柄をテキスト以上に伝えたい人",
  "小さなコミュニティで距離を縮めたい人",
  "LINEほど直接的ではなく、SNSほど開かれすぎない場所が欲しい人",
];

const scenes = [
  ["🌙", "日記", "今日あったことを、寝る前に声で残す。"],
  ["🌿", "近況共有", "最近考えていることや生活の変化を、親しい人にだけ話す。"],
  ["☁️", "愚痴", "公開SNSには書きづらいモヤモヤを、聞いてほしい人だけに届ける。"],
  ["🫖", "雑談", "用件はないけれど、今の気分や小さな出来事をゆるく共有する。"],
  ["🙌", "自己紹介", "文字だけでは伝わらない人柄や雰囲気を、声で知ってもらう。"],
  ["💭", "相談", "すぐ通話するほどではない悩みを、近い人に投げかける。"],
  ["📣", "発信したいこと", "考えや気づきを、広くではなくちゃんと届く相手へ話す。"],
  ["🧩", "問題提起", "仕事・生活・人間関係で感じた違和感を、近い人に投げかける。"],
  ["🏡", "小さなコミュニティ", "仲間内の連絡や振り返りを、声の温度ごと共有する。"],
];

const principles = [
  ["親密圏ファースト", "大きく広げるより、安心して話せる範囲に届けることを優先します。"],
  ["音声ファースト", "感情、迷い、笑い、間のような人間らしさを声で残します。"],
  ["SNS感の維持", "通話のように時間を合わせなくても、タイムラインでゆるくつながれます。"],
  ["数字を強調しすぎない", "バズや反応の大きさより、関係性が温まる体験を大切にします。"],
  ["投稿ごとの公開範囲", "話す内容に合わせて、届ける相手を毎回選べます。"],
  ["自分らしさの蓄積", "声と文章が積み重なり、人柄や考えが自然に残っていきます。"],
];

const steps = [
  ["01", "Googleでログイン", "スマホブラウザから、すぐにテスター利用を始められます。"],
  ["02", "プロフィールを作る", "名前や自己紹介を整えて、友達に見つけてもらいやすくします。"],
  ["03", "友達を探す / 招待する", "つながりたい相手を探したり、リンクで招待したりできます。"],
  ["04", "文章または音声で投稿", "短文からでも、録音からでも、その日の気分で残せます。"],
  ["05", "届ける相手を選ぶ", "親しい人、フォロワー、自分だけなど、投稿ごとに範囲を選びます。"],
  ["06", "コメントや音声返信で会話", "声が届いたあとも、言葉や声でゆるく会話が続きます。"],
];

function Wave() {
  return (
    <div className="wave" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.06}s` }} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <main className="container">
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-copy fade-in">
            <div className="tester-ribbon">現在テスター募集中</div>
            <div className="hero-banner-wrap">
              <img
                className="hero-banner"
                src={`${import.meta.env.BASE_URL}friendcast-logo-banner.jpeg`}
                alt="friendcastのロゴバナー"
                loading="eager"
                decoding="async"
              />
            </div>
            <p className="eyebrow">友人や仲間にだけ届ける、クローズド型の音声SNS</p>
            <h1 id="hero-title">親しい人にだけ届ける、声のタイムライン。</h1>
            <p className="lead">
              friendcastは、友人や仲間にだけ声や文章を届けられる場所です。日記、近況、雑談、愚痴、考えを、文字では伝わりきらない温度とともに残せます。
            </p>
            <p className="lead-sub">
              バズるためではなく、声で関係性を温めるために。通話ほど重くなく、普通のSNSほど開かれすぎない、安心できるタイムラインです。
            </p>
            <div className="badge-row" aria-label="friendcastの特徴">
              {["声が届く相手を選べる", "文章からでも音声からでも", "音声返信", "しおり保存"].map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
            <div className="cta-row">
              <a
                aria-label="friendcastをテスターとして使ってみる（新しいタブで開きます）"
                className="btn primary"
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                テスターとして使ってみる
              </a>
              <a
                aria-label="friendcastとは何かを読む（説明セクションへ移動します）"
                className="btn ghost"
                href="#about"
              >
                friendcastとは
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="friendcastの投稿画面イメージ">
            <div className="phone-mock">
              <div className="mock-top">
                <span className="mock-brand">friendcast</span>
                <span className="mock-status">親しい友達</span>
              </div>
              <article className="post-card">
                <div className="user-row">
                  <div className="avatar" />
                  <div>
                    <strong>mika</strong>
                    <p>今日 22:14 ・ 公開範囲: 仲間だけ</p>
                  </div>
                </div>
                <p className="post-text">今日は少しだけ声で日記。文字にすると軽く見えそうな気持ちも、そのまま残しておくね。</p>
                <div className="link-card">
                  <span>🔗 Link card</span>
                  <strong>最近考えていたことのメモ</strong>
                </div>
                <div className="voice-card">
                  <div className="player-row">
                    <button aria-label="再生" className="play" type="button">▶</button>
                    <Wave />
                  </div>
                  <div className="player-tools">
                    <button type="button">-15秒</button>
                    <span>1:26</span>
                    <button type="button">+15秒</button>
                    <strong>1.2x</strong>
                  </div>
                </div>
                <div className="actions" aria-label="投稿アクション">
                  <span>♡ 12</span>
                  <span>💬 3</span>
                  <span>🔖</span>
                  <span className="visibility-pill">友達だけ</span>
                </div>
              </article>
              <article className="post-card mini-card">
                <span className="reply-label">↩ 音声返信</span>
                <div className="reply-mini-player">
                  <span className="mini-play">▶</span>
                  <Wave />
                </div>
              </article>
              <nav className="bottom-nav" aria-label="アプリ下部ナビゲーションのイメージ">
                <span>🏠 Home</span>
                <span>🔍 Search</span>
                <span className="plus">＋</span>
                <span>🔖 Save</span>
                <span>👤 Me</span>
              </nav>
            </div>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="section-head centered">
            <p className="eyebrow">About</p>
            <h2 id="about-title">friendcastとは</h2>
            <p>広く届けるためではなく、ちゃんと届けたい人に声を残す場所。</p>
          </div>
          <div className="about-grid">
            {aboutCards.map((card) => (
              <article className="card about-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" aria-labelledby="why-title">
          <div className="section-head">
            <p className="eyebrow">Why</p>
            <h2 id="why-title">なぜfriendcastが必要なのか</h2>
            <p>声で話したい瞬間はある。でも、公開SNSや音声配信では少し大げさに感じることがあります。</p>
          </div>
          <div className="problem-solution-grid">
            <article className="card list-card problem-card">
              <span className="card-label">よくある悩み</span>
              <h3>話したいのに、話しにくい</h3>
              <ul>
                {problems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="card list-card solution-card">
              <span className="card-label positive">friendcastなら</span>
              <h3>近い人へ、ちょうどよく届く</h3>
              <ul>
                {solutions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" aria-labelledby="compare-title">
          <div className="section-head centered">
            <p className="eyebrow">Compare</p>
            <h2 id="compare-title">普通のSNSや音声配信との違い</h2>
            <p>friendcastは、音声配信サービスではなく、友人同士のクローズド音声SNSです。</p>
          </div>
          <div className="comparison-grid">
            {comparisons.map((item) => (
              <article className={`card comparison-card ${item.featured ? "featured" : ""}`} key={item.title}>
                <span className="card-label">{item.tag}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="features-title">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2 id="features-title">できること</h2>
            <p>機能は、声で関係性を温めるために。投稿、返信、保存、公開範囲まで、親しい人とのやりとりを支えます。</p>
          </div>
          <div className="feature-grid">
            {features.map(([icon, title, text]) => (
              <article className="card feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section recommend-section" aria-labelledby="recommend-title">
          <div className="section-head centered">
            <p className="eyebrow">For you</p>
            <h2 id="recommend-title">こんな人におすすめ</h2>
          </div>
          <div className="recommend-grid">
            {recommendItems.map((item) => (
              <article className="card recommend-card" key={item}>
                <span className="check-icon">✓</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="scene-title">
          <div className="section-head centered">
            <p className="eyebrow">Scenes</p>
            <h2 id="scene-title">利用シーン</h2>
            <p>大きな発信ではなく、近い人にだけ残したい声や考えに。</p>
          </div>
          <div className="scene-grid">
            {scenes.map(([icon, title, text]) => (
              <article className="card scene-card" key={title}>
                <span className="scene-icon">{icon}</span>
                <span className="scene-label">Voice note</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section principle-section" aria-labelledby="principle-title">
          <div className="section-head centered">
            <p className="eyebrow">Principles</p>
            <h2 id="principle-title">声で関係性を温めるために</h2>
            <p>friendcastは、バズるためのSNSではありません。AI時代だからこそ、感情、温度感、迷い、笑い、間のような人間らしさを大切にします。</p>
          </div>
          <div className="principle-grid">
            {principles.map(([title, text]) => (
              <article className="card principle-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-to-use" className="section" aria-labelledby="steps-title">
          <div className="section-head">
            <p className="eyebrow">How to use</p>
            <h2 id="steps-title">使い方の流れ</h2>
            <p>最初の投稿までを、スマホで迷わず進められるシンプルな導線にしています。</p>
          </div>
          <div className="steps">
            {steps.map(([num, title, text]) => (
              <article className="step-card" key={num}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section final-cta" aria-labelledby="final-cta-title">
          <div className="card cta-card">
            <p className="eyebrow">Join beta</p>
            <h2 id="final-cta-title">声で残す、親しい人だけのタイムラインを始めよう。</h2>
            <p>日記も、近況も、雑談も、考えも。ちゃんと届けたい相手にだけ、あなたの声の温度ごと残せます。</p>
            <div className="cta-row center">
              <a
                aria-label="friendcastをテスターとして使ってみる（新しいタブで開きます）"
                className="btn primary"
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                テスターとして使ってみる
              </a>
              <a
                aria-label="friendcastの使い方を見る（使い方セクションへ移動します）"
                className="btn ghost light"
                href="#how-to-use"
              >
                使い方を見る
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026 friendcast</p>
      </footer>
    </div>
  );
}
