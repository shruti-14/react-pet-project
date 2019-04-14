import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = (props) =>{
  const [personState, setPersonState]= useState({
    persons:[
      {name:"shruti",age:22},
      {name:"karishma",age:19}
    ]
  }); //returns an array of two elements
  //first having the current state itself
  //second having a function responsible for updating the state
  const [otherState, setOtherState]= useState('Some other value');
  const switchNameHandler=(newAge)=>{
    setPersonState({
      persons:[
        {name:"shruti",age:newAge},
        {name:"karishma",age:20}
      ]
    })
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler.bind(this,23)}>Switch Name</button>
      <Person 
      name = {personState.persons[0].name} 
      age = {personState.persons[0].age}
      clickReference= {switchNameHandler.bind(this,35)}
      />
       <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        clickReference= {switchNameHandler}
      >
        My Hobbies: Racing
      </Person>
    </div>
  );
}  
export default app;
