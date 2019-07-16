import React from 'react';

const  Dishes = (dishes) => {
  const dishesList = dishes.dishes.map(dish=>
    <li key={dish.name}>{dish.name}</li>
  )
  return (
    <ul>
     {dishesList}
    </ul>
  );
}

export default Dishes;
