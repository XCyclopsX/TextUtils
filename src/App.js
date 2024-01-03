import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [ mode, setMode ] = useState('light');
  const [ btntext, MyBtnText ] = useState("Enable Dark Mode")

  const togglemode = () =>{
    if(mode === 'light'){

      setMode('dark');
      MyBtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743'

    }
    else{

      setMode('light')
      MyBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white'

    }
}
  return (
  <>
  
  <Navbar title = 'Text Utils' homeText = 'Home' aboutText = 'About Us' mode = {mode} togglemode = {togglemode} btntext = {btntext} />  
  <div className="container my-3">  <TextForm heading = 'Enter the text to analyse below' mode = {mode}/>  </div>
  {/* <About/> */}

  </>
  );
}

export default App;
