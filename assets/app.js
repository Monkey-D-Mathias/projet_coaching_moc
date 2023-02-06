import  ReactDOM  from 'react-dom';
import React, { useEffect,useState } from 'react';
import './styles/app.scss';
import './bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import FormRegister from './components/modules/FormRegister';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loader from './components/modules/loader';
import HomePage from './components/HomePage';
import CoachsPage from './components/CoachsPage';
const $ = require('jquery');
require('bootstrap');

console.log("Hello word!!!")
const App = () =>{
     const [loader, setLoader] = useState(true);

     useEffect(()=> {
          setTimeout(()=>{
               setLoader(false);
          }, 3000 );
     }, []) ;

     return loader ? (
          <Loader></Loader>
     ) : (
          <HashRouter>
               <Route exact path="/" component={HomePage}/>
               <Route path="/coachs" component={CoachsPage}/>
               <Route path="/auth" component={FormRegister}/>
          </HashRouter>
     );
}

// Dans la div app rend moi le contenu de App
const rootElement = document.querySelector("#app");
ReactDOM.render(<App/>, rootElement);
