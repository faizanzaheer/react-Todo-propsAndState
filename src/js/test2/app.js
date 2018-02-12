// import ReactDOM from 'react-dom';
import React from 'react';
// import App from './app';
import _ from 'lodash'

export default class App extends React.Component{
   constructor(){
    super();

    this.state = {
      val: ''

    };
    this.delay = true;

    this.handler = this.handler.bind(this);
    // this.handler = _.debounce(this.handler, 500)
    this.handleRef = this.handleRef.bind(this);
    this.localHandler = this.localHandler.bind(this);
   }
   localHandler(e){
    // console.log(e.target.value)
    e.persist();
    if (this.delay) {
      this.delay = false
      setTimeout(() => this.handler(e), 1000);
    }
   }
   handler(e){
      console.log('Value of e is: ', e.target.value)
      this.delay = true;
   }
   handleRef(elem){
      this.textInput = elem;
      console.log(this.textInput)
      this.textInput.focus();
   }
   render(){

    return(
      <div>
        <input 
            onChange = {this.localHandler}
            // value = 'hello'
            // value = {this.state.val}
            ref = {this.handleRef}
          />
      </div>
    )
   }
}