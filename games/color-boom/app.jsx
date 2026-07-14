/* app.jsx — root. Defaults (theme petal, highlight #F97A2E, confetti on)
   are baked into styles.css :root — no JS overrides needed. */

function App() {
  return (
    <>
      <div className="bg-decor"><i className="blob-a" /><i className="blob-b" /><i className="blob-c" /><i className="blob-d" /></div>

      <Nav />
      <Hero />
      <Proof />
      <Features />
      <Gamification />
      <CTA />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
