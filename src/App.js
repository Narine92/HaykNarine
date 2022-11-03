import './App.css';
// import myIMG from './components/images/bg.svg'
import Login from './components/login/login';
import { useState } from "react";
import Shake from './components/shake/shake';




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user-info"));

  return (
    <div className="App">
        {isLoggedIn ? <Shake /> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
}

export default App;





