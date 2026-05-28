const features = [
  ['🎙', '音声投稿', '声で近況や気持ちを残せます。'],
  ['✍️', 'テキスト投稿', '短い言葉でも、日記のような投稿でもOK。'],
  ['💬', 'コメント', '投稿に対して気軽に反応できます。'],
  ['🎧', '音声返信', 'テキストだけではなく、声で返せます。'],
  ['🔐', '相互フォロー制', 'お互いにつながっている相手だけに中身を届けられます。'],
  ['🧭', '公開範囲設定', 'フォロワー、親しい友達、カスタム、自分のみを選べます。'],
  ['👥', 'フォロー/フォロワー保護', '人間関係もむやみに見えない設計。'],
  ['📱', 'スマホブラウザ対応', 'アプリを入れなくてもスマホから使えます。']
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
        <section className="hero section">
          <div className="hero-left fade-in">
            <p className="brand"><span>◌</span> friendcast</p>
            <h1>声が届く相手を、ちゃんと選べる。</h1>
            <p className="lead">friendcastは、相互フォローの相手だけにテキストと音声を届けられる、クローズド音声SNSです。バズるためではなく、本当に届けたい人とだけ、安心してつながるための場所です。</p>
            <div className="badge-row">
              {['相互フォロー制', '音声投稿対応', 'クローズドSNS', 'テスター募集中'].map((b) => <span key={b} className="badge">{b}</span>)}
            </div>
            <div className="cta-row">
              <a aria-label="friendcastを開く" className="btn primary" href="https://friendcast-tau.vercel.app/" target="_blank" rel="noopener noreferrer">friendcastを開く</a>
              <a aria-label="テスターとして使ってみる" className="btn ghost" href="https://friendcast-tau.vercel.app/" target="_blank" rel="noopener noreferrer">テスターとして使ってみる</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="phone-mock" aria-label="friendcastアプリのイメージモック">
              <div className="mock-top">✈︎ friendcast</div>
              <div className="post-card">
                <div className="user-row"><div className="avatar" /><div><strong>マイペース男</strong><p>2026年5月28日 07:18</p></div></div>
                <h3>最新の更新！！</h3>
                <div className="voice-card">
                  <div className="player-row"><button className="play">▶</button><div className="wave">{Array.from({ length: 16 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />)}</div></div>
                  <div className="meta-row"><span>-:-- / 2:26</span><button className="speed">1.2x</button></div>
                </div>
                <p className="hint">フォロワーに届きます</p>
                <div className="actions">💬 2 &nbsp; 🔁 0 &nbsp; 💗 1 &nbsp; ↗</div>
              </div>
              <div className="bottom-nav"><span>🏠</span><span>🔍</span><span className="plus">＋</span><span>👤</span><span>⚙️</span></div>
            </div>
          </div>
        </section>

        <section className="section card"><h2>friendcastとは</h2><p>friendcastは、友達や仲間にだけ声を届けられる、クローズドな音声SNSです。テキストでも、声でも、近い距離の人たちと安心して会話できます。</p><p>広く拡散するためのSNSではなく、「この人たちにだけ届けたい」を大事にするSNSです。</p></section>
        <section className="section card"><h2>なぜ普通のSNSではなくfriendcastなのか</h2><p>普通のSNSは便利だけど、見られたくない人にまで届きすぎる。バズることを前提にすると、気軽な近況や本音の声を出しづらくなる。</p><p className="quote">「拡散」より「関係性」。「バズ」より「ちゃんと届く」。「フォロワー数」より「声を届けたい相手」。</p></section>

        <section className="section"><h2>できること</h2><div className="grid">{features.map(([e,t,d]) => <article className="feature card" key={t}><h3>{e} {t}</h3><p>{d}</p></article>)}</div></section>

        <section className="section"><h2>見せたい人にだけ、見える。</h2><p>friendcastは、相互フォローを基本にしたクローズドな設計です。</p><div className="privacy-wrap"><article className="card"><h3>見える</h3><ul><li>自分の投稿</li><li>相互フォロー相手の投稿</li><li>相互フォロー相手のボイス</li><li>自分が見られる投稿についたコメント</li></ul></article><article className="card"><h3>見えない</h3><ul><li>非相互フォローの投稿</li><li>非相互フォローのボイス</li><li>非相互フォローのフォロー/フォロワー一覧</li><li>非相互フォローのプロフィール詳細</li></ul></article></div><p className="small">コメントは、親投稿が見える場合は会話の流れとして表示されます。ただし、非相互フォローのコメント投稿者のプロフィール詳細には進めない設計です。</p></section>

        <section className="section card"><h2>文字より近く、通話より軽い。</h2><p>音声投稿は、ポッドキャストほど構えず、通話ほど相手の時間を奪わない。</p><div className="player-visual"><div className="wave wide">{Array.from({ length: 22 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.09}s` }} />)}</div></div></section>

        <section className="section"><h2>利用シーン</h2><div className="grid scenes">{scenes.map((s) => <article key={s} className="card"><p>{s}</p></article>)}</div></section>

        <section className="section card"><h2>開発中の機能・今後のアップデート</h2><p>friendcastは現在開発中です。テスターのフィードバックを受けながら、少しずつ改善しています。</p><ul className="updates"><li>通知機能</li><li>コメントへの返信・いいね</li><li>招待コード改善</li><li>音声プレイヤー改善</li><li>PWA対応</li><li>より強いプライバシー設計</li><li>スマホ操作の改善</li><li>テスター向け導線の整理</li></ul></section>

        <section className="section cta card"><h2>friendcastを、一緒に育ててくれる人へ。</h2><p>friendcastはまだ開発中のサービスです。実際に使ってくれる人の声をもとに、使いやすさや安心感を少しずつ磨いています。</p><div className="cta-row"><a className="btn primary" href="https://friendcast-tau.vercel.app/" target="_blank" rel="noopener noreferrer">テスターとして使ってみる</a><a className="btn ghost" href="https://friendcast-tau.vercel.app/" target="_blank" rel="noopener noreferrer">friendcastを開く</a></div><p className="small">現在はテスト公開中です。予告なく仕様が変わる場合があります。</p></section>
      </main>
      <footer className="footer">friendcast<br />Closed voice social network<br />© 2026 mypaceotoko<div className="small">Built with AI-assisted development.</div></footer>
    </div>
  );
}
