import './App.css';
import backgroundImage from './assets/background.jpg'
import GamePage from './Pages/GamePage/GamePage';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
      <button className='btn btn-primary'>Click me</button>
        <GamePage />
    </div>
  );
}

export default App;
