import './App.css';
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Contact from './Components/ContactMe/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
       
    </div>
  );
}

export default App;
