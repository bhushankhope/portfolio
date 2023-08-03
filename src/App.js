import './App.css';
import Introduction from './components/intro';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
