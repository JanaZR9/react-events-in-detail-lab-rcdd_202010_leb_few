// Code CoordinatesButton Component Here
 import React,{Component} from 'react';
 export default class CoordinatesButton extends Component{
   
   onReceiveCoordinates = () =>{
     
   }
   
   handleClick = (event) => {
     const arr = ['evenet.ClientX','event.ClientY'];
     return arr;
     
   }
   render() {
     return (
       <button onClick={this.handleClick}></button>
       )
   }
 }