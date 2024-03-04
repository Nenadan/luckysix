import './App.css';
import backgroundImage from './assets/background.jpg'
import GamePage from './Pages/GamePage/GamePage';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
        <GamePage />
    </div>
  );
}

export default App;
