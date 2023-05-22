// import logo from './logo.svg';
import Text from './compo/Text';
import Nav from './compo/Nav';
import React,{useState} from 'react';
import Alert from './compo/Alert';
import About from './compo/About';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [warn, setWarn] = useState('');

  const toggleMode=()=>{
    if(mode==='light')
      setMode("dark");
    else  
      setMode("light");
  }

  const showAlert=(event)=>{
      console.log(event.target.innerText);
      if(event.target.innerText==='Convert To Upper Case')
          setWarn("No Text Found to Use Uppercase Function");
      else  
          setWarn("No Text Found to Use Lowercase Function");
  }

  return (
    <Router>
      <Nav mode={mode} toggle={toggleMode}/>
      <Alert warn={warn}/>
      <div>
        <Routes>
          <Route exact  path="/" element={<Text mode={mode} callalert={showAlert}/>}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
