import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">A Chill In Time</h1>
        <nav>
          <ul className="navbar">
            <li><a href="#about">About</a></li>
            <li><a href="#devlog">Devlog</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="about-section">
        <p className="description">
          "A Chill In Time" follows a detective who is sent undercover to the town of Scarlettville, a quiet village with a hidden past. Tasked with solving a centuries-old cold case, the detective must gain the trust of the wary townsfolk. By completing quests, doing favors, and giving gifts, you’ll slowly uncover hidden clues—but not everything is revealed easily. As part of his cover, the detective works as a landscaper, completing daily tasks and taking on personal jobs from the townspeople. Explore, build relationships, and uncover hidden secrets in this mysterious adventure!
        </p>
      </section>

      <section id="devlog" className="devlog-section">
        <h2>Devlog</h2>
        <p>Sunday, October 20th, 2024:</p>
        <ul>
          <li>Brainstormed the idea for the game.</li>
          <li>Conceptualized the core mechanics and setting.</li>
        </ul>
        <p>Monday, October 21st, 2024:</p>
        <ul>
          <li>Started initial implementation by creating a simple JFrame.</li>
          <li>Added a character sprite and got it moving around the screen.</li>
          <li>Detective Character V.1: <a href="link_to_image_1">Image 1</a>, <a href="link_to_image_2">Image 2</a></li>
        </ul>
        <p>Tuesday, October 22nd, 2024:</p>
        <ul>
          <li>Decided to switch to Unity, essentially starting from scratch.</li>
          <li>Before the switch, experimented with adding a title screen and worked on the overall aesthetic.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
