import React from 'react';

const Person= (props) => {
    return (
        <div>
            <p onClick={props.clickReference}>Hi, my name is {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}></input>
        </div>
        
    )
}

export default Person;