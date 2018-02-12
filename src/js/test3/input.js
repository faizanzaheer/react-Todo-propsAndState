// import ReactDOM from 'react-dom';
import React from 'react';
// import App from './app';
// import _ from 'lodash'


export default class Input extends React.Component{
   constructor(props){
    super(props);
    this.value = this.props.value

  }
  componentWillMount(){
    console.log('cwm is rendering')

  }
  componentDidMount(){
    console.log('cdm is rendering')
    this.input.focus();

  }
  componentWillReceiveProps(nextProps){
    console.log('current props are ', this.props)
    console.log('new props are ', nextProps)

  }
  componentDidUpdate(oldProps){
      console.log('current props are ', this.props)
      console.log('old props are ', oldProps)

  }
  shouldComponentUpdate(nextProps){
    for (var key in nextProps) {
      if (nextProps[key] !== this.props[key]) {
          return true;
        }
      }
      // if (nextProps === this.props){
      // return false;
      // }
      return false;
  }
   render(){
        console.log(this.props)

    return(
      <div>
        <input
        className = {this.props.className}
        onChange = {this.props.handler}
        value = {this.props.value}
        ref = {(elem) => this.input = elem} />

        </div>
    );
   }
}