// Code CoordinatesButton Component Here
 import React,{Component} from 'react';
 
 export default class CoordinatesButton extends Component{
   
   
   handleClick = (event) => {
     const arr = [event.ClientX,event.ClientY];
    this.props.onReceiveCoordinates(arr);
     
   }
   
   render() {
     return (
       <button onClick={this.handleClick}></button>
       )
   }
 }