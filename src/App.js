import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/MenuComponent';
import FormBar from './components/Form';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Blogs from './components/Blogs';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
   
    };
  }
  
  render(){

  return (

    <div className="page-container">
    <div className="flex-wrap">
    <Router>
    <Menu/>
    <Route exact path = "/" render={props => (
      <React.Fragment>
       <Home/>
      </React.Fragment>
    )}  />
    <Route exact path = "/about" render={props => (
      <React.Fragment>
       <About/>
      </React.Fragment>
    )}  />
    <Route exact path = "/contact" render={props => (
      <React.Fragment>
       <FormBar/>
      </React.Fragment>
    )}  />
    <Route exact path = "/blogs" render={props => (
      <React.Fragment>
       <Blogs/>
      </React.Fragment>
    )}  />
    <Footer/>
    </Router>
    </div>
    </div>
  
  );
}
}
export default App;
