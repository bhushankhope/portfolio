import './App.css';
import Expertise from './components/expertise';
import Introduction from './components/intro';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Introduction></Introduction>
      <Expertise></Expertise>
    </div>
  );
}

export default App;
