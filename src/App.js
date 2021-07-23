import Profil from './profile/profil';
import './App.css';

function App() {
  const handleAlert = (name) => {
        alert (`Hi! My name is ${name}`);
    };
  return (
    
    <div className="App">
      < Profil fullName="wiem" bio="" profession=" ingenieur agronome" handleAlert={handleAlert}  children="img.jpg"/>
      < Profil fullName="sarah" bio="" profession=" infirmier" handleAlert={handleAlert} children="img.jpg"/>
      < Profil fullName="bilel" bio="" profession=" chauffeur taxi" handleAlert={handleAlert} children="img.jpg"/>;
    </div>
  );
}

export default App;
