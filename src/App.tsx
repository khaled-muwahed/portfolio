import "./App.css";
import Contacts from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="App">
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
