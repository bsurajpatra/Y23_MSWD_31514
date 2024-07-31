import logo from './logo.svg';
import './App.css';
import Header from './Components.js/Header';

import Faculty from './Components.js/Faculty';
import Students from './Components.js/Students';
import Courses from './Components.js/Courses';
import Footer from './Components.js/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Faculty/>
      <Students/>
      <Courses/>
      <Footer/>
    </div>
  );
}


export default App;

