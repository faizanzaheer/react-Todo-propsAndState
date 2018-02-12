// import ReactDOM from 'react-dom';
import React from 'react';
// import App from './app';

export default class App extends React.Component{
   constructor(){
    super();

    this.state = {
      val: ''

    };

    this.handler = this.handler.bind(this);
    this.handleRef = this.handleRef.bind(this);
   }
   handler(e){
      e.target.focus();
      console.log('changed value is', e.target.value)
      this.setState({val: this.textInput.value}, function(){
        console.log('state value is' , this.state.val)
      })
      
   }
   handleRef(elem){
      this.textInput = elem;
      console.log(this.textInput)
      this.textInput.focus();
   }
   render(){

    return(
      <div>
      <input onChange= {this.handler}
      // value = 'hello'
      // value = {this.state.val}
      ref = {this.handleRef}
       />


       
       </div>
    )
   }
}