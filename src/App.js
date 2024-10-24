import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#devlog">Devlog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1 className="title">A Chill In Time</h1>
      </header>

      <section id="about" className="about-section">
        <p className="description">
          "A Chill In Time" follows a detective who is sent undercover to the town of Scarlettville, a quiet village with a hidden past...
        </p>
      </section>

      <section id="devlog" className="devlog-section">
        <h2>Devlog</h2>

        <div className="devlog-card">
          <div className="devlog-date">Sunday, October 20th, 2024</div>
          <ul className="devlog-entries">
            <li>Brainstormed the idea for the game.</li>
            <li>Conceptualized the core mechanics and setting.</li>
          </ul>
        </div>

        <div className="devlog-card">
          <div className="devlog-date">Monday, October 21st, 2024</div>
          <ul className="devlog-entries">
            <li>Started initial implementation by creating a simple JFrame.</li>
            <li>Added a character sprite and got it moving around the screen.</li>
            <li>
              Detective Character V.1: 
              <div className="devlog-images">
                <img src="link_to_image_1.jpg" alt="Detective Character Image 1" />
                <img src="link_to_image_2.jpg" alt="Detective Character Image 2" />
              </div>
            </li>
          </ul>
        </div>

        <div className="devlog-card">
          <div className="devlog-date">Tuesday, October 22nd, 2024</div>
          <ul className="devlog-entries">
            <li>Decided to switch to Unity, essentially starting from scratch.</li>
            <li>Before the switch, experimented with adding a title screen and worked on the overall aesthetic.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:achillintimegame@gmail.com">achillintimegame@gmail.com</a></p>
          <p>TikTok: <a href="https://www.tiktok.com/@achillintimegame" target="_blank" rel="noopener noreferrer">@achillintimegame</a></p>
        </div>
      </section>

    </div>
  );
}

export default App;
