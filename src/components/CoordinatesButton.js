// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends React.Component{
  
  handleClick=(event)=>{
    let arr=[event.clientX,event.clientY]
    this.props.onReceiveCoordinates(arr)

  }
 render(){
   return(
     <button onClick={this.handleClick}>Coordinates Button</button>
     )
 }
  }