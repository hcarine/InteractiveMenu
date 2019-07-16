import React from 'react';
import './App.css';
import { dishes } from './menu';
import Dishes from './Dishes'

const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Menu Interactive
        </h1>
      </header>
      <Dishes dishes={dishes}/>
    </div>
  );
}

export default App;
