import './App.css';
import Header from './Components/Header.js'
import Luxury from './Components/Luxury.js';
import Options from './Components/Options.js';
import UsedCars from './Components/UserCars.js'
function App() {
  return (
    <div className="App">
          <Header/>
          <Options/>
          <Luxury/>
          <UsedCars/>
        
    </div>
  );
}

export default App;
