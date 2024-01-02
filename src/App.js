import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
  
  <Navbar title = 'Text Utils' homeText = 'Home' aboutText = 'About Us'/>  
  <TextForm/>
  </>
  );
}

export default App;
