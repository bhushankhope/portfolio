import './App.css';
import Expertise from './components/expertise';
import Introduction from './components/intro';
import NavBar from './components/navbar';
import Projects from './components/projects';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Introduction></Introduction>
      <Expertise></Expertise>
      <Projects/>
    </div>
  );
}

export default App;
