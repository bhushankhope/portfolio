import './App.css';
import Experience from './components/experience';
import Expertise from './components/expertise';
import GetInTouch from './components/getInTouch';
import Introduction from './components/intro';
import NavBar from './components/navbar';
import Projects from './components/projects';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <section className='section'>
        <Introduction></Introduction>
        <Expertise></Expertise>
        <Projects />
        <Experience></Experience>
        <GetInTouch />
      </section>
    </div>
  );
}

export default App;
