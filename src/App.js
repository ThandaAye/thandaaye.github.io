import logo from './logo.svg';
import './App.css';
import TypeWriter from 'react-typewriter';

const mainBackground = new URL("../public/city-view.jpg", import.meta.url)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <TypeWriter id='intro' typing={1}>Hello I'm Tracy</TypeWriter>
          <img className='main-background' src={mainBackground}/>
        </div>
      </header>
    </div>
  );
}

export default App;
