import React, { useState } from 'react';
import './App.css';
import CardTemplateComponent from './card-template/crad-template-component';
import { pink, teal, deepPurple, orange, red } from '@material-ui/core/colors';

const app = (props) =>{
  const [colorState, setColorState]= useState({
    colors:[
      { 
        id:1,
        name:"Magenta",
        imageSrc: require('./static/images/magenta.jpg'),
        isFavorite: false,
        heartColor: pink[500],
        desc:'Magenta is a colour that is variously defined as purplish-red, reddish-purple or mauvish-crimson'
      },
      { 
        id:2,
        name:"Emerald",
        imageSrc: require('./static/images/emerald.jpg'),
        isFavorite: false,
        heartColor: teal[900],
        desc:'Emerald is a color that is a shade of green. It is light and bright, with a faint bluish cast.'
      },
      { 
        id:3,
        name:"Lavendar",
        imageSrc: require('./static/images/lavendar.jpg'),
        isFavorite: false,
        heartColor: deepPurple[200],
        desc:'Lavender is a light purple. It applies particularly to the color of the flower of the same name.'
      },
      { 
        id:4,
        name:"Maroon",
        imageSrc: require('./static/images/maroon.jpg'),
        isFavorite: false,
        heartColor: red[900],
        desc:'Maroon is a dark reddish purple or dark brownish red color that takes its name from the French word marron, or chestnut. '
      },
      { 
        id:5,
        name:"Teal",
        imageSrc: require('./static/images/teal.jpg'),
        isFavorite: false,
        heartColor: teal[500],
        desc:'Teal is a blue-green colour. It can be created by mixing blue into a green base, or deepened as needed with black or gray'
      },
      { 
        id:6,
        name:"Ochre",
        imageSrc: require('./static/images/ochre.jpg'),
        isFavorite: false,
        heartColor: orange[400],
        desc:'Ochre or ocher is a natural clay earth pigment which is a mixture of ferric oxide and varying amounts of clay and sand.'
      },
    ]
  }); 
  const markAsFavorite=(color)=>{
    const colorsArray = colorState.colors.slice();
    // eslint-disable-next-line
    colorsArray.map(e=>{
      if(e.id === color.id) {
         e.isFavorite = !e.isFavorite;
      }
    });
    setColorState({colors:colorsArray});
  }
  const deleteCard = (color) => {
    const colorsArray = colorState.colors.slice().filter(e=>{
      return e.id !== color.id;
    }); 
    console.log(colorsArray);
    setColorState({colors:colorsArray});

  }
 const colorsEle = (
  <div className="card-container">
  {colorState.colors.map(color=>{
    return (
      <div className="card" key = {color.id}>
        <CardTemplateComponent 
          
          name={color.name} 
          desc= {color.desc}
          imageSrc = {color.imageSrc}
          isFavorite = {color.isFavorite}
          heartColor = {color.heartColor}
          favoriteHandler= {()=>markAsFavorite(color)}
          deleteHandler = {()=> deleteCard(color)}
        >
  </CardTemplateComponent> </div>);
      })}
    
    </div>
  
 
 );
  return (
    <div className="main-container">
      {colorsEle}     
    </div>
  );
}  
export default app;
