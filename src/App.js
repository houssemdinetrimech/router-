import './App.css';
import React from 'react'
import Header from './Components/Header.js'
import {BrowserRouter,Route} from 'react-router-dom' 
import Home from './Components/Home'
import Trailer from './Components/Trailer';

import Description from './Components/Description';


function App() {
 
  return (
    <BrowserRouter>
  
        <div className="App">
   
  
      <Route exact path='/' component={Home}/>
      <Route path='/Trailer/:name' component={Trailer}/>
      <Route path='/Description/:name' component={Description}/>
      { <Route path='/Description/:name' component={Header}/> }
      </div>
      </BrowserRouter>  
  
 
  )
}

export default App

