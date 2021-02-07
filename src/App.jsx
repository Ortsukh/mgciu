
// import './App.css';
// import './css/less/style.less'
import "../src/css/bootstrap/css/bootstrap.css"
// import "../src/css/build/test.css"
import "../src/css/build/style.css"
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
// import ".css/build/style.css"

import Header from './components/header';
import Navigation from './components/navigation';
import MainSlider from './components/mainSlider';
import MainBlock from './components/mainBlock';
import Footer from './components/footer';
import NewsPage from './components/newsPage';
import PartnersPage from './components/partnersPage';
import AboutCompanyPage from './components/aboutCompanyPage';
import StructureCompany from './components/structureCompany';
import ServicesPage from './components/servicesPage';
import FrameworkPage from './components/frameworkPage';
import OneWindow from './components/oneWindow';
import ContactPage from './components/contactPage';
import FaqPage from './components/faqPage';
import ContactUsPage from './components/contactUsPage';
import ReviewesPage from './components/reviewesPage';
console.log(AboutCompanyPage);
function App() {
  return (
    <Router>
    <Header/>
    <Navigation/>
    <Switch>
      <Route path="/"  exact >
      <MainSlider/>
   <MainBlock/>
      </Route>
      <Route path="/news" >
      <NewsPage/>
  
      </Route>
      <Route path="/partners" >
      <PartnersPage/>
      </Route>
      <Route path="/about_company">
      <AboutCompanyPage/>
      </Route>
      <Route path="/structure">
      <StructureCompany/>
      </Route>
      <Route path="/services">
      <ServicesPage/>
      </Route> 
      <Route path="/regulatoryframework">
      <FrameworkPage/>
      </Route>
      <Route path="/odno_okno">
      <OneWindow/>
      </Route>
      <Route path="/contacts">
      <ContactPage/>
      </Route>
       <Route path="/feedback" exact>
      <ContactUsPage/>
      </Route>
      <Route path="/feedback/reviews">
      <ReviewesPage/>
      </Route>
      <Route path="/feedback/questions">
      <FaqPage/>
      </Route>
    </Switch>
    <Footer/>
  </Router>
    

  );
}

export default App;
