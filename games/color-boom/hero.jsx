/* hero.jsx — Spotlight hero (screenshot-cluster, app-landing style) */

function HeroD() {
  return (
    <div className="heroD">
      <div className="copy">
        <Eyebrow>Color by number × Magic tiles</Eyebrow>
        <h1 className="wordmark">Tap a color,<br /><span className="pop">boom</span> — it's art.</h1>
        <p className="hd-tag">Every tile you fill bursts into art.</p>
        <AppBadges className="hd-badges" />
        <div className="hero-meta">
          <span className="mt">🎨 <b>1,200+</b> canvases and counting</span>
        </div>
      </div>

      <div className="spot-stack">
        <div className="spot-card sc1"><Screen src="profile.png" className="bob" alt="My Profile screen" /></div>
        <div className="spot-card sc2"><Screen src="library.png" className="bob s2" alt="Art Library screen" /></div>
        <div className="spot-card sc3"><Screen src="ranks.png" className="bob s3" alt="Weekly Ranks screen" /></div>
        <div className="hd-puck bob s2" style={{ top: "2%", left: "0%" }}>
          <span className="pi">🔥</span>
          <span><small>Streak</small><b>Day 2</b></span>
        </div>
        <div className="hd-puck bob s3" style={{ bottom: "4%", right: "-2%" }}>
          <span className="pi">🪙</span>
          <span><small>Earned</small><b>+1,000</b></span>
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
