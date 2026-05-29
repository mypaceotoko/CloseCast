const appUrl = 'https://friendcast-tau.vercel.app/';

const recommendItems = [
  '普通のSNSに少し疲れている人',
  '友達や仲間だけに近況を残したい人',
  'LINEほど直接的じゃなく、SNSほど公開したくない人',
  '音声で気軽に日常を共有したい人',
  '小さなコミュニティを持っている人'
];

const comparisons = {
  normal: ['広く届く', '見られすぎる', 'バズや数字を意識しやすい', '気軽な本音を出しにくい'],
  friendcast: ['相互フォローの相手だけに届く', '声で温度感が伝わる', '小さな関係性を大事にできる', '通話より軽く、SNSより安心']
};

const features = [
  ['🎙', '音声投稿', '近況や気持ちを、声の温度感ごと残せます。'],
  ['🎧', '音声返信', '気になった投稿へ、テキストだけでなく声でも返せます。'],
  ['✍️', 'テキスト投稿', '短い言葉も、日記のような長めの近況も投稿できます。'],
  ['🔐', '相互フォロー制', 'お互いにつながった相手だけに、投稿や声が届きます。'],
  ['🧭', '公開範囲設定', 'フォロワー、親しい友達、カスタム、自分のみを選べます。'],
  ['📱', 'スマホブラウザ対応', 'アプリを入れなくても、スマホのブラウザから使えます。']
];

const scenes = [
  '友達だけの音声SNS',
  '仲間内の近況共有',
  '小さなコミュニティ',
  'ポッドキャスト未満のラジオ投稿',
  '家族や親しい人への声の記録',
  '創作仲間とのクローズドな場所',
  'ダンス仲間・趣味仲間との共有',
  'テスターコミュニティ'
];

export default function App() {
  return (
    <div className="page">
      <main className="container">
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-left fade-in">
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
            <p className="eyebrow">友達だけに声が届く、クローズド音声SNS</p>
            <h1 id="hero-title">声が届く相手を、ちゃんと選べる。</h1>
            <p className="lead">
              friendcastは、友達だけに声や文章を届けられるクローズド音声SNSです。<br />
              <strong>バズらない。広がりすぎない。</strong><br />
              でも、大事な人にはちゃんと届く。
            </p>
            <p className="lead-sub">
              通話ほど重くなく、普通のSNSほど開かれすぎない。近い人と、声でゆるくつながる場所です。
            </p>
            <div className="badge-row" aria-label="friendcastの特徴">
              {['相互フォロー制', '音声投稿・返信', '公開範囲を選べる', 'スマホで使える'].map((b) => (
                <span key={b} className="badge">{b}</span>
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
              <a aria-label="friendcastの使い方を見る" className="btn ghost" href="#features">
                使い方を見る
              </a>
            </div>
          </div>
          <div className="hero-right" aria-hidden="true">
            <div className="phone-mock">
              <div className="mock-top">✈︎ friendcast</div>
              <div className="post-card">
                <div className="user-row">
                  <div className="avatar" />
                  <div>
                    <strong>親しい友達</strong>
                    <p>今日 07:18</p>
                  </div>
                </div>
                <h3>朝の散歩で思ったこと</h3>
                <div className="voice-card">
                  <div className="player-row">
                    <button className="play" tabIndex={-1}>▶</button>
                    <div className="wave">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />
                      ))}
                    </div>
                  </div>
                  <div className="meta-row"><span>-:-- / 2:26</span><button className="speed" tabIndex={-1}>1.2x</button></div>
                </div>
                <p className="hint">相互フォローの友達にだけ届きます</p>
                <div className="actions">💬 2 &nbsp; 🎧 1 &nbsp; 💗 4</div>
              </div>
              <div className="bottom-nav"><span>🏠</span><span>🔍</span><span className="plus">＋</span><span>👤</span><span>⚙️</span></div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="recommend-title">
          <div className="section-head">
            <p className="eyebrow">RECOMMENDED</p>
            <h2 id="recommend-title">こんな人におすすめ</h2>
            <p>広く見られる場所ではなく、近い人にだけ安心して残したい声がある人へ。</p>
          </div>
          <div className="recommend-grid">
            {recommendItems.map((item) => (
              <article className="recommend-card card" key={item}>
                <span className="check-icon" aria-hidden="true">✓</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section card about-card" aria-labelledby="about-title">
          <p className="eyebrow">ABOUT</p>
          <h2 id="about-title">friendcastとは</h2>
          <p>
            friendcastは、友達や仲間にだけ声や文章を届けられる、クローズドな音声SNSです。
            テキストでも、声でも、近い距離の人たちと安心して会話できます。
          </p>
          <p className="quote">「拡散」より「関係性」。「バズ」より「ちゃんと届く」。「数字」より「大事な人の反応」。</p>
        </section>

        <section className="section" aria-labelledby="comparison-title">
          <div className="section-head">
            <p className="eyebrow">COMPARE</p>
            <h2 id="comparison-title">普通のSNSとの違い</h2>
            <p>初見でも価値が伝わるように、friendcastは届く範囲と関係性を最初から小さく設計しています。</p>
          </div>
          <div className="comparison-grid">
            <article className="compare-card card muted-card">
              <h3>普通のSNS</h3>
              <ul>
                {comparisons.normal.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="compare-card card friendcast-card">
              <span className="positive-badge">friendcast</span>
              <h3>friendcast</h3>
              <ul>
                {comparisons.friendcast.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="section voice-reply card">
          <div className="voice-reply-head">
            <p className="voice-reply-kicker">VOICE REPLY FEATURE</p>
            <h2>返信も、声で返せる。</h2>
            <p>テキストだけじゃ伝わらない温度感も、声ならそのまま届く。friendcastなら、投稿だけでなく返信も音声で残せます。</p>
          </div>
          <p>ちょっとしたリアクション、感想、励まし、雑談。文字にすると硬くなる言葉も、声ならやわらかく届きます。</p>
          <div className="voice-reply-visual" aria-hidden="true">
            <div className="reply-bubble incoming">投稿を聴いたよ、元気出た！</div>
            <div className="reply-player"><span className="reply-icon">🎤↩︎</span><div className="wave">{Array.from({ length: 12 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.1}s` }} />)}</div></div>
            <div className="reply-bubble outgoing">ありがとう！返信も声で送るね。</div>
          </div>
          <ul className="voice-points">
            <li>投稿に音声で返信できる</li>
            <li>テキストでは伝わりにくい温度感が届く</li>
            <li>相互フォローの相手だけに安心して返せる</li>
          </ul>
        </section>

        <section className="section" id="features" aria-labelledby="features-title">
          <div className="section-head">
            <p className="eyebrow">FEATURES</p>
            <h2 id="features-title">できること</h2>
            <p>声で残す、文章で補う、届ける相手を選ぶ。friendcastの基本機能です。</p>
          </div>
          <div className="grid">
            {features.map(([emoji, title, description]) => (
              <article className="feature card" key={title}>
                <span className="feature-icon" aria-hidden="true">{emoji}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section privacy-section" aria-labelledby="privacy-title">
          <div className="section-head">
            <p className="eyebrow">PRIVACY</p>
            <h2 id="privacy-title">見せたい人にだけ、見える。</h2>
            <p>friendcastは、相互フォローを基本にしたクローズドな設計です。</p>
          </div>
          <div className="privacy-wrap">
            <article className="card">
              <h3>見える</h3>
              <ul>
                <li>自分の投稿</li>
                <li>相互フォロー相手の投稿</li>
                <li>相互フォロー相手のボイス</li>
                <li>自分が見られる投稿についたコメント</li>
              </ul>
            </article>
            <article className="card">
              <h3>見えない</h3>
              <ul>
                <li>つながっていない相手の投稿</li>
                <li>つながっていない相手のボイス</li>
                <li>つながっていない相手の関係リスト</li>
                <li>つながっていない相手のプロフィール詳細</li>
              </ul>
            </article>
          </div>
          <p className="small">コメントは、親投稿が見える場合は会話の流れとして表示されます。ただし、つながっていない相手のプロフィール詳細には進めない設計です。</p>
        </section>

        <section className="section card light-card" aria-labelledby="light-title">
          <p className="eyebrow">LIGHT VOICE</p>
          <h2 id="light-title">文字より近く、通話より軽い。</h2>
          <p>音声投稿は、ポッドキャストほど構えず、通話ほど相手の時間を奪わない。思いついた日常を、あとから好きなタイミングで聴いてもらえます。</p>
          <div className="player-visual" aria-hidden="true"><div className="wave wide">{Array.from({ length: 22 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.09}s` }} />)}</div></div>
        </section>

        <section className="section" aria-labelledby="scenes-title">
          <div className="section-head">
            <p className="eyebrow">SCENES</p>
            <h2 id="scenes-title">利用シーン</h2>
          </div>
          <div className="grid scenes">{scenes.map((scene) => <article key={scene} className="card"><p>{scene}</p></article>)}</div>
        </section>

        <section className="section card updates-card" aria-labelledby="updates-title">
          <p className="eyebrow">ROADMAP</p>
          <h2 id="updates-title">開発中の機能・今後のアップデート</h2>
          <p>friendcastは現在開発中です。テスターのフィードバックを受けながら、少しずつ改善しています。</p>
          <ul className="updates">
            <li>通知機能</li>
            <li>コメントへの返信・いいね</li>
            <li>招待コード改善</li>
            <li>音声プレイヤー改善</li>
            <li>PWA対応</li>
            <li>より強いプライバシー設計</li>
            <li>スマホ操作の改善</li>
            <li>テスター向け導線の整理</li>
          </ul>
        </section>

        <section className="section cta card" aria-labelledby="cta-title">
          <span className="tester-ribbon small-ribbon">現在テスター募集中</span>
          <h2 id="cta-title">friendcastを、一緒に育ててくれる人へ。</h2>
          <p>普通のSNSに疲れた人が、友達や仲間と安心して声でつながれる場所をつくっています。まずはテスターとして触ってみてください。</p>
          <div className="cta-row">
            <a
              className="btn primary"
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="friendcastをテスターとして使ってみる（新しいタブで開きます）"
            >
              テスターとして使ってみる
            </a>
            <a className="btn ghost" href="#features" aria-label="friendcastでできることをもう一度見る">使い方を見る</a>
          </div>
          <p className="small">現在はテスト公開中です。予告なく仕様が変わる場合があります。</p>
        </section>
      </main>
      <footer className="footer">
        friendcast<br />
        友達だけに声が届くクローズド音声SNS<br />
        © 2026 mypaceotoko
        <div className="small">Built with AI-assisted development.</div>
      </footer>
    </div>
  );
}
