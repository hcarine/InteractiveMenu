import React, { useState } from 'react';
import './App.css';
import { dishes,ingredients } from './menu';
import Dishes from './Dishes';
import TextField from '@material-ui/core/TextField';

const verifyFood = (alergy,food)=>{
  return food && food.toLowerCase().startsWith(alergy)
}
const verifyTypeFood = (alergy,type)=>{
  return type.length > 0 && type.filter(i=>
    verifyFood(alergy,i)
  ).length > 0
}


const filterValue = (alergy, dishes) => {
  alergy = alergy.toLowerCase()
  const filterAlergy = ingredients.filter(item =>
    !verifyFood(alergy,item.name)?
    !verifyFood(alergy,item.variety)?
    !verifyTypeFood(alergy,item.type)?
    false : true : true: true
    )
   .map(item=> item.id)

  const filterDisches = dishes.filter(item => 
   item.ingredient.filter(item=>
     filterAlergy.includes(item)
  )
  .length > 0)
  return filterDisches

}

const  App = () => {
  const [selectedDishes,setSelectedDishes]= useState(dishes)

  const handleChange = (event) => {
    setSelectedDishes(filterValue( event.target.value,dishes))
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Menu Interactive
        </h1>
      </header>
      <TextField
        id="Seach-alergy"
        label="Search your alergy"
        onChange={handleChange}
      />
      <Dishes dishes={selectedDishes}/>
    </div>
  );
}

export default App;
