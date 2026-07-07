/* hero.jsx — Headliner hero (big game presentation, app-landing style) */

function HeroD() {
  return (
    <div className="heroD">
      <div className="copy">
        <div className="hd-top">
          <div className="app-icon" aria-label="Color Boom app icon">
            <img src="assets/logo.png" alt="" />
          </div>
          <button className="trailer" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="play">▶</span>
            <span>Trailer</span>
          </button>
        </div>
        <h1 className="wordmark">Color<br /><span className="pop">Boom</span></h1>
        <p className="hd-tag">
          Unwind with the cozy color-by-number game where every tile you fill bursts into art.
          <br />Join millions of painters enjoying it daily!
        </p>
        <AppBadges className="hd-badges" />
        <div className="hd-follow">
          <span className="fl">Follow Us</span>
          <div className="socials">
            <a href={window.SOCIALS.instagram} target="_blank" rel="noopener" aria-label="Instagram"><IconInstagram /></a>
            <a href={window.SOCIALS.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><IconTikTok /></a>
            <a href={window.SOCIALS.facebook} target="_blank" rel="noopener" aria-label="Facebook"><IconFacebook /></a>
          </div>
        </div>
      </div>

      <div className="hd-art-wrap">
        <span className="hd-ring r1" />
        <span className="hd-ring r2" />
        <span className="dot bob s2" style={{ width: 18, height: 18, background: "var(--gold)", top: "10%", left: "8%" }} />
        <span className="sq bob s3" style={{ width: 16, height: 16, background: "var(--blue)", bottom: "14%", right: "10%", transform: "rotate(20deg)" }} />
        <span className="dot bob" style={{ width: 24, height: 24, background: "var(--pink)", bottom: "6%", left: "16%" }} />
        <div className="hd-art bob">
          <image-slot id="hero-art" shape="rounded" radius="34"
            src="assets/screens/hero-art.svg"
            placeholder="Drop a finished Color Boom painting"
            style={{ width: "100%", height: "100%", display: "block" }}></image-slot>
        </div>
        <div className="hd-puck bob s2" style={{ top: "4%", right: "2%" }}>
          <span className="pi">🖼️</span>
          <span><small>Canvases</small><b>1,200+</b></span>
        </div>
        <div className="hd-puck bob s3" style={{ bottom: "2%", left: "-2%" }}>
          <span className="pi">⭐</span>
          <span><small>Rated</small><b>4.9</b></span>
        </div>
      </div>
    </div>
  );
}

function ScrollCue() {
  return (
    <a className="scroll-cue" href="#features" aria-label="See more features">
      <span className="sc-label">More features</span>
      <span className="chev">⌄</span>
    </a>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <HeroD />
      </div>
      <ScrollCue />
    </header>
  );
}

Object.assign(window, { Hero });
