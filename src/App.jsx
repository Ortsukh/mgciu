
// import './App.css';
// import './css/less/style.less'
import "../src/css/bootstrap/css/bootstrap.css"
// import "../src/css/build/test.css"
import "../src/css/build/style.css"
// import ".css/build/style.css"
import logo from '../src/css/images/logo.png'

import Header from './components/header';
import Navigation from './components/navigation';
import MainSlider from './components/mainSlider';
import MainBlock from './components/mainBlock';
import Footer from './components/footer';
function App() {
  return (
    <div> <Header/>
   <Navigation/>
   
   <MainSlider/>
   <MainBlock/>
   <Footer/>
  </div> 

  );
}

export default App;
