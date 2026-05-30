const appUrl = "https://friendcast-tau.vercel.app/";

const heroBadges = ["相互フォロー制", "音声投稿", "音声返信", "スマホブラウザ対応"];

const aboutCards = [
  ["01", "声で残せる", "日記、近況、雑談、本音を声で投稿。"],
  ["02", "届く相手を選べる", "投稿ごとに公開範囲を選択。"],
  ["03", "会話が続く", "コメントも、音声返信もできる。"],
];

const comparisonCards = [
  {
    label: "普通のSNS",
    tone: "muted",
    points: ["広がりやすい", "見られすぎる", "数字が気になる"],
  },
  {
    label: "friendcast",
    tone: "featured",
    points: ["近い人にだけ届く", "声の温度が残る", "小さな関係を大切にできる"],
  },
];

const features = [
  ["🎙️", "音声投稿", "声で日記や近況を残せる。"],
  ["✍️", "テキスト投稿", "短く言えることは文章で。"],
  ["↩️", "音声返信", "コメントも声で返せる。"],
  ["🔐", "公開範囲", "届ける相手を投稿ごとに選べる。"],
  ["🔗", "リンクカード", "URLを貼ると内容が見える。"],
  ["🔖", "あとで聴く", "気になる声をしおり保存。"],
  ["⬇️", "自分の音声保存", "自分の投稿は端末に残せる。"],
  ["📱", "スマホブラウザ", "アプリなしですぐ試せる。"],
];

const recommendItems = [
  "友達や仲間に近況を残したい",
  "公開SNSでは本音を出しづらい",
  "音声配信ほど重くしたくない",
  "声で人柄や温度を伝えたい",
  "小さなコミュニティでつながりたい",
  "LINEよりゆるい場所がほしい",
];

const scenes = [
  ["🌙", "寝る前の日記"],
  ["🌿", "友達への近況"],
  ["☁️", "公開しづらい愚痴"],
  ["💭", "小さな相談"],
  ["🫧", "活動の裏話"],
  ["🏡", "仲間内の共有"],
  ["🙌", "声の自己紹介"],
  ["🧩", "問題提起"],
];

const steps = [
  ["1", "相互フォローでつながる", "親しい人だけのタイムラインへ。"],
  ["2", "声か文章で投稿", "公開範囲を選んで、軽く残す。"],
  ["3", "声で返して会話する", "聴けない声は、あとでしおりへ。"],
];

const Wave = ({ compact = false }: { compact?: boolean }) => (
  <div className={compact ? "wave compact" : "wave"} aria-hidden="true">
    {Array.from({ length: compact ? 12 : 18 }).map((_, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.07}s` }} />
    ))}
  </div>
);

function App() {
  return (
    <main className="page">
      <div className="orb orb-lavender" aria-hidden="true" />
      <div className="orb orb-cyan" aria-hidden="true" />
      <div className="orb orb-pink" aria-hidden="true" />

      <div className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy fade-in">
            <div className="tester-ribbon">テスター募集中</div>
            <figure className="hero-banner-wrap">
              <img
                className="hero-banner"
                src="/CloseCast/friendcast-logo-banner.jpeg"
                alt="friendcast ロゴ"
              />
            </figure>
            <p className="brand-kicker">friendcast</p>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-line">
                <span className="hero-title-phrase">親しい人にだけ</span><span className="hero-title-phrase">届ける、</span>
              </span>
              <span className="hero-title-line">声のタイムライン。</span>
            </h1>
            <p className="lead">
              バズらない。広がりすぎない。
              <br />
              でも、大事な人にはちゃんと届く。
            </p>
            <div className="badge-row" aria-label="friendcastの特徴">
              {heroBadges.map((badge) => (
                <span className="badge" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
            <div className="cta-row">
              <a
                className="btn primary"
                href={appUrl}
                aria-label="friendcastをテスターとして使ってみる"
              >
                テスターとして使ってみる
              </a>
              <a className="btn ghost" href="#about" aria-label="friendcastとはセクションへ移動">
                friendcastとは
              </a>
            </div>
          </div>

          <div className="hero-visual fade-in" aria-label="friendcastのタイムライン画面イメージ">
            <div className="floating-note note-one">親しい人にだけ</div>
            <div className="floating-note note-two">声で返信</div>
            <PhoneMock />
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-head centered">
            <span className="eyebrow">What is friendcast?</span>
            <h2 id="about-title">通話より軽く、SNSより安心。</h2>
            <p>文字では伝わりきらない温度を、声で残すクローズド音声SNSです。</p>
          </div>
          <div className="about-grid">
            {aboutCards.map(([num, title, text]) => (
              <article className="card about-card" key={title}>
                <span className="card-number">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section comparison-section" aria-labelledby="comparison-title">
          <div className="section-head">
            <span className="eyebrow">Difference</span>
            <h2 id="comparison-title">広げるより、ちゃんと届く。</h2>
          </div>
          <div className="comparison-grid">
            {comparisonCards.map((card) => (
              <article className={`card comparison-card ${card.tone}`} key={card.label}>
                <span className="card-label">{card.label}</span>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="features-title">
          <div className="section-head centered">
            <span className="eyebrow">Features</span>
            <h2 id="features-title">できることは、必要な分だけ。</h2>
          </div>
          <div className="feature-grid">
            {features.map(([icon, title, text]) => (
              <article className="card feature-card" key={title}>
                <span className="feature-icon" aria-hidden="true">
                  {icon}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reply-showcase" aria-labelledby="reply-title">
          <div className="reply-copy">
            <span className="eyebrow light">Voice reply</span>
            <h2 id="reply-title">返信も、声で返せる。</h2>
            <p>
              短いコメントでも、声のひとことでも。気持ちの温度を落とさず、会話が続きます。
            </p>
          </div>
          <div className="reply-panel" aria-label="音声返信の画面イメージ">
            <div className="reply-bubble">「今日の話、すごく分かる」</div>
            <div className="reply-player">
              <button type="button" aria-label="音声返信を再生" className="play mini-play">
                ▶
              </button>
              <Wave compact />
              <span>0:18</span>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="recommend-title">
          <div className="section-head centered">
            <span className="eyebrow">For you</span>
            <h2 id="recommend-title">こんな人におすすめ。</h2>
          </div>
          <div className="recommend-grid">
            {recommendItems.map((item) => (
              <div className="card recommend-card" key={item}>
                <span className="check-icon" aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="scenes-title">
          <div className="section-head centered">
            <span className="eyebrow">Scenes</span>
            <h2 id="scenes-title">使い道は、日常のすぐそばに。</h2>
          </div>
          <div className="scene-grid">
            {scenes.map(([icon, title]) => (
              <article className="card scene-card" key={title}>
                <span className="scene-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section steps-section" aria-labelledby="steps-title">
          <div className="section-head">
            <span className="eyebrow">How to use</span>
            <h2 id="steps-title">3ステップで、ゆるくつながる。</h2>
          </div>
          <div className="step-grid">
            {steps.map(([num, title, text]) => (
              <article className="card step-card" key={title}>
                <span className="step-num">{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section update-note" aria-label="テスト運用のお知らせ">
          <p>
            friendcastは現在テスト運用中です。フィードバックを受けながら、録音編集や音声アップロードなどを改善しています。
          </p>
        </section>

        <section className="section final-cta" aria-labelledby="final-cta-title">
          <div className="cta-card card">
            <span className="tester-ribbon">テスター募集中</span>
            <h2 id="final-cta-title" className="final-cta-title">
              <span>あなたの声を、</span><span>届く人へ。</span>
            </h2>
            <p>親しい人にだけ、声や文章を残せる場所を試してみませんか。</p>
            <div className="cta-row centered-row">
              <a
                className="btn primary"
                href={appUrl}
                aria-label="friendcastをテスターとして使ってみる"
              >
                テスターとして使ってみる
              </a>
              <a className="btn ghost" href="#about" aria-label="friendcastとはセクションへ移動">
                friendcastとは
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>friendcast</span>
          <span>親しい人にだけ届ける、声のタイムライン</span>
        </footer>
      </div>
    </main>
  );
}

function PhoneMock() {
  return (
    <div className="phone-shell">
      <div className="phone-mock">
        <header className="mock-top">
          <strong>friendcast</strong>
          <span className="mock-status">相互フォロー</span>
        </header>

        <article className="post-card mini-card">
          <div className="user-row">
            <span className="avatar" aria-hidden="true" />
            <div>
              <strong>mika</strong>
              <p>親しい友達 · 2分前</p>
            </div>
            <span className="visibility-pill">友達まで</span>
          </div>
          <p className="post-text">寝る前に、今日のうれしかったことだけ。</p>
          <div className="voice-card">
            <div className="player-row">
              <button type="button" aria-label="音声投稿を再生" className="play">
                ▶
              </button>
              <Wave />
            </div>
            <div className="player-tools" aria-label="音声プレイヤー操作">
              <button type="button">-15秒</button>
              <span>0:42</span>
              <button type="button">+15秒</button>
              <strong>1.2x</strong>
            </div>
          </div>
          <a className="link-card" href={appUrl} aria-label="friendcastのリンクカード例">
            <span>Link card</span>
            今日のメモをあとで見る
          </a>
          <div className="actions" aria-label="投稿へのアクション">
            <span>♡ 12</span>
            <span>💬 4</span>
            <span>🔖 しおり</span>
          </div>
        </article>

        <article className="post-card reply-card">
          <span className="reply-label">音声返信</span>
          <div className="reply-mini-player">
            <button type="button" aria-label="音声返信を再生" className="mini-play">
              ▶
            </button>
            <Wave compact />
            <span>0:11</span>
          </div>
        </article>

        <nav className="bottom-nav" aria-label="friendcast下部ナビゲーションのイメージ">
          <span>Home</span>
          <span>Search</span>
          <span className="plus">Post</span>
          <span>Saved</span>
          <span>Me</span>
        </nav>
      </div>
    </div>
  );
}

export default App;
