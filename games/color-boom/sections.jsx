/* sections.jsx — nav, proof, features, gamification, studio, cta, footer */

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <a className="back-link" href="../../index.html">← <span className="back-label">TrironGames</span></a>
          <a className="brand" href="#top">
            <span className="mark"><img src="assets/logo.png" alt="" /></span>
            <span>Color Boom</span>
          </a>
          <div className="nav-links">
            <a href="#game">The Game</a>
            <a href="#features">Features</a>
            <a href="#download">Download</a>
          </div>
          <button className="nav-cta" onClick={() => document.getElementById("download")?.scrollIntoView()}>Get the app</button>
        </div>
      </div>
    </nav>);

}

function Proof() {
  const items = [
  { big: "1,200+", lbl: "Canvases\nto paint" },
  { big: "5", lbl: "Themes &\nfill effects" },
  { big: "Weekly", lbl: "New canvas\ndrops" },
  { big: "Solo", lbl: "Indie-made\nwith ❤" }];

  return (
    <section className="proof reveal">
      <div className="wrap">
        <div className="proof-row">
          {items.map((it, i) =>
          <React.Fragment key={i}>
              <div className="proof-item">
                <div>
                  <div className="big">{it.big}</div>
                  <div className="lbl" style={{ whiteSpace: "pre-line" }}>{it.lbl}</div>
                </div>
              </div>
              {i < items.length - 1 && <span className="proof-sep" />}
            </React.Fragment>
          )}
        </div>
      </div>
    </section>);

}

function FeatureRow({ f, idx }) {
  return (
    <div className={"frow reveal" + (f.flip ? " flip" : "")}>
      <div className="fr-copy">
        <Eyebrow>{f.eyebrow}</Eyebrow>
        <h3 style={{ whiteSpace: "pre-line" }}>{f.title}</h3>
        <p>{f.body}</p>
        <div className="fr-pills">
          {f.pills.map((p, i) =>
          <span className="fr-pill" key={i}><span className="em">{p[0]}</span>{p[1]}</span>
          )}
        </div>
      </div>
      <div className="fr-media">
        <span className="fr-blob" style={{ background: f.blob, opacity: .18 }} />
        {f.mini && <Screen src={f.mini + ".png"} className="bob s3" style={{ position: "absolute", width: 150, zIndex: 1, ...(f.flip ? { top: "2%", right: "2%" } : { bottom: "2%", left: "2%" }) }} alt="" />}
        <Screen src={f.screen + ".png"} className="bob" style={{ zIndex: 3 }} alt={f.eyebrow} />
        <div className="float-card bob s2" style={{ ...f.float.pos }}>
          <span className="em">{f.float.em}</span>
          <span><b style={{ fontSize: 18 }}>{f.float.big}</b><small>{f.float.small}</small></span>
        </div>
      </div>
    </div>);

}

function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className="sec-head center reveal" style={{ marginBottom: "clamp(50px,7vw,90px)" }}>
          <Eyebrow>Why painters stay</Eyebrow>
          <h2>A little ritual that feels like magic.</h2>
          <p>Color Boom blends the calm of paint-by-number with the spark of a tile-matching game — wrapped in rewards that make every day worth opening.</p>
        </div>
        {FEATURES.map((f, i) => <FeatureRow key={i} f={f} idx={i} />)}
      </div>
    </section>);

}

function Gamification() {
  const tiles = [
  { ic: "🪙", cls: "ic-gold", h: "Coins", p: "Spend on canvases, hints and paint boosters in the in-game shop." },
  { ic: "💎", cls: "ic-blue", h: "Gems", p: "Premium currency for art packs, frames and rare fill effects." },
  { ic: "🔥", cls: "ic-pink", h: "Streaks", p: "Keep your daily streak alive for ever-rarer rewards." },
  { ic: "🏆", cls: "ic-green", h: "Ranks", p: "Battle for the top of the weekly global leaderboard." }];

  return (
    <section className="section" id="game" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="gband reveal">
          <div className="sec-head" style={{ marginBottom: 34, maxWidth: 620 }}>
            <Eyebrow>A whole little economy</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.9rem,3.6vw,2.9rem)" }}>Earn it, spend it, show it off.</h2>
          </div>
          <div className="gband-grid">
            {tiles.map((t, i) =>
            <div className="gtile reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className={"ic " + t.cls}>{t.ic}</div>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function CTA() {
  return (
    <section className="section" id="download" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta reveal">
          <span className="dot" style={{ width: 120, height: 120, background: "rgba(255,255,255,.14)", top: "-30px", left: "-20px" }} />
          <span className="sq" style={{ width: 60, height: 60, background: "rgba(255,255,255,.12)", bottom: "20px", left: "32%", transform: "rotate(20deg)" }} />
          <span className="dot" style={{ width: 26, height: 26, background: "rgba(255,255,255,.5)", top: "30%", left: "46%" }} />
          <div className="cta-grid">
            <div>
              <Eyebrow><span style={{ color: "#fff" }}>Free to play</span></Eyebrow>
              <h2 style={{ marginTop: 14 }}>Your next favorite way to unwind.</h2>
              <p>Download Color Boom free on Google Play. Your first masterpiece is one tap away.</p>
              <div style={{ marginTop: 28 }}><AppBadges /></div>
            </div>
            <div className="cta-phone">
              <Screen src="my-feed.png" className="bob" alt="Start painting" />
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  const cols = [
  { h: "Game", links: [["Features", "#features"], ["Canvases", "#features"], ["Daily rewards", "#game"], ["Leaderboards", "#game"]] },
  { h: "Studio", links: [["About us", "../../index.html#studio"], ["Contact", "mailto:trirongames@gmail.com"]] },
  { h: "Legal", links: [["Privacy Policy", "../../legal/privacy-policy.html"], ["Terms", "../../legal/terms.html"], ["Delete Account", "../../legal/delete-account.html"]] }];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="../../index.html">
              <span className="mark"><img src="assets/logo.png" alt="" /></span>
              <span>TrironGames<small>Studio</small></span>
            </a>
            <p>The cozy color-by-number game where every tile bursts into art.</p>
            <div className="socials">
              <a href={window.SOCIALS.instagram} target="_blank" rel="noopener" aria-label="Instagram"><IconInstagram /></a>
              <a href={window.SOCIALS.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><IconTikTok /></a>
              <a href={window.SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook"><IconFacebook /></a>
            </div>
          </div>
          {cols.map((c, i) =>
          <div key={i}>
              <h4>{c.h}</h4>
              <ul>{c.links.map((l, j) => <li key={j}><a href={l[1]}>{l[0]}</a></li>)}</ul>
            </div>
          )}
        </div>
        <div className="footer-bot">
          <span>© 2026 TrironGames. Made with 🎨 and a lot of coffee.</span>
          <span>Beta 1.2.32</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Nav, Proof, Features, Gamification, CTA, Footer });