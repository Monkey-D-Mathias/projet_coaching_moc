import  ReactDOM  from 'react-dom';
import React, { useEffect,useState } from 'react';
import './styles/app.scss';
import './bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoachsPage from './components/CoachsPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Loader from './components/modules/Loader';
import './config';

const $ = require('jquery');
require('bootstrap');

console.log("Hello word!!!")
const App = () =>{
     const [loader, setLoader] = useState(true);

     useEffect(()=> {
          setTimeout(()=>{
               setLoader(false);
          }, 0 );
     }, []) ;

     return loader ? (
          <Loader></Loader>
     ) : (
          <HashRouter>
               <Route exact path="/" component={HomePage}/>
               <Route path="/coachs" component={CoachsPage}/>
               <Route path="/auth" component={RegisterPage}/>
               <Route path="/login" component={LoginPage}></Route>
          </HashRouter>

     );

}


// Dans la div app rend moi le contenu de App
const rootElement = document.querySelector("#app");
ReactDOM.render(<App/>, rootElement);

console.log(rootElement);
