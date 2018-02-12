// import ReactDOM from 'react-dom';
import React from 'react';
// import App from './app';
// import _ from 'lodash'
import Input from './input'
import Input1 from './input'

export default class App extends React.Component{
   constructor(){
    super();

    this.state = {
      value: '',
      value2: '',
      value3: ''

    };
    

    this.handler = this.handler.bind(this);
    this.handler2 = this.handler2.bind(this);
    this.handler3 = this.handler3.bind(this);
    }
   handler(e){
    this.setState({value: e.target.value})

   };
   handler2(e){
    this.setState({value2: e.target.value})

   };
   handler3(e){
    this.setState({value3: e.target.value})

   };
   render(){

    return(
      <div>
        <Input value = {this.state.value} handler = {this.handler} className = "test1" />
         <br/> 
        <Input value = {this.state.value2} handler = {this.handler2} />
        <br/>
        <Input1 value = {this.state.value3} handler = {this.handler3} />
      <div> {this.state.value} </div>
      </div>
    )
   }
}