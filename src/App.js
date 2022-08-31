import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import TopBar from './TopBar.js'
import StoreListing from './StoreListing'
import Background from './Background'



function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
