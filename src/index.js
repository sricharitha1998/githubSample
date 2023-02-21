import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const name = "Liquids";
const det = "details";  
const myName = "Sree charitha";
const dateYear = new Date().getFullYear();
const img = "https://picsum.photos/id/237/200/300";
const applyStyles = {
  fontSize : "30px",
  border : "1px solid gray"
}

applyStyles.color = "blue"
ReactDOM.render(
  <div>
    {/* <h1>{name} {det}</h1> */}
    {/* <h1>{name + " " +det}</h1> */}
    <h1 className="heading" contentEditable="true" spellCheck="false">{`${name} ${det}`}</h1>
    <ul>
      <li>Tea</li>
      <li>Coffee</li>
      <li>Drink</li>
    </ul>
    <img src={img+"?blur"} alt="random lorem" />
    <p style={applyStyles}>Created by {myName}</p>
    <p style={{color:"red"}}>{dateYear}</p>
  </div>,
  document.getElementById('root')
);


