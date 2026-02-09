const sections = [
  {
    eyebrow: "Section One",
    title: "A cinematic start",
    copy: "The first layer glides over the hero and holds position while the story continues.",
  },
  {
    eyebrow: "Section Two",
    title: "Depth without clipping",
    copy: "Each sheet keeps its own space, revealing the next layer with soft shadows.",
  },
  {
    eyebrow: "Section Three",
    title: "Product focus",
    copy: "Use this space to spotlight key features with clean typography and bold visuals.",
  },
  {
    eyebrow: "Section Four",
    title: "Momentum",
    copy: "The stacked scroll rhythm makes the journey feel smooth and intentional.",
  },
  {
    eyebrow: "Section Five",
    title: "Call to action",
    copy: "End with a decisive next step so the user knows what comes after the scroll.",
  },
];

const sectionThemes = [
  "theme-one",
  "theme-two",
  "theme-three",
  "theme-four",
  "theme-five",
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="navbar">
          <div className="brand">ScrollTest</div>
          <div className="nav-links">
            <a href="#story">Story</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="nav-cta">Get Started</button>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Cinematic stacking scroll</p>
          <h1>Layers that glide over the hero and lock in place.</h1>
          <p className="hero-copy">
            Build immersive storytelling with smooth, paper-like sections that stack without harsh
            clipping.
          </p>
          <div className="hero-actions">
            <button className="primary">Start the journey</button>
            <button className="secondary">View demo</button>
          </div>
        </div>
      </header>

      <main className="stack" id="story">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className={`stack-section ${sectionThemes[index]}`}
            style={{ zIndex: sections.length - index }}
          >
            <div className="section-inner">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
              <div className="section-meta">
                <span>Estimated read · 2 min</span>
                <span>Layer {index + 1}</span>
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="footer" id="contact">
        <div>
          <h3>Ready to build?</h3>
          <p>Let the scroll do the storytelling. Build your next launch with cinematic layers.</p>
        </div>
        <button className="primary">Contact sales</button>
      </footer>
    </div>
  );
}
