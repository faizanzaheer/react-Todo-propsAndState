// React Rules
 
 // Dynamic data has to be in a state object
 
 // When defining javascript inside html then we have to use curly braces{}
 
 // If an array is given to render inside a virtial dom then it will auto render
 
 // Make sure the array has data in html format, we can use map for it
  
 //  key attribute has to given for each index item i an Array and 
 //normally we can use the index argument inside the map cb

// we can only change state using the setState(partialState, cb) function
// and we use it to change the value of an existing key
// if we donot change any other existing keys then those key values will not
// change

// We cannot use setState inside the render function as it will keep changing
// the state which means render has to run again hence forming a loop. 

// In JSX html if we have a single tag element like input or img then we have 
// to close it within the same single tag

// Beacuse of <class> being used both in html and javascript, so in react
// when we need to use class inside html-JSX then we call it <className>

//In react custom tags(custom Elements) are written as components that
// return the required html. These components must start with a capital 
// letter

// For React if we want to share the state i.e dynamic data across the 
// components then we write it as high as possible like the App 
// Component and then pass it down as props
// In addition any handlers(cb functions) that change that state, should also
// to be wirtten in the same high component where the state is and the
// handler(function) is also passed down with the state. 


import React from 'react';
import _ from 'lodash';
import Button from './button';
import Input from './input';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: ['tea', 'coffee'],
      favorite: 'milk',
      input: '',
      showmenu: false
    };

  this.handleChange = this.handleChange.bind(this);
  // this.handleChange = _.debounce(this.handleChange, 500)

  }

  handleChange(e) {
    var list = this.state.list;
    var input = this.state.input;

    list.push(e.target.value);
  
    this.setState({
      list: list,
      input: e.target.value,
    });
  }


  render() {
    var newList = this.state.list.map(function(v, i){
      return (
        <li key={i}>{v}</li>
      );
    })

    return (
      <div className="container">
        <h3>Enter an item</h3>
        
        { this.state.showmenu && <div>show some submenu</div> }

        <Input 
          handleChange={this.handleChange}/>

        <Button
          list={this.state.list}
          favorite={this.state.favorite} 
          input={this.state.input}
          name1={this.props.name}
        />

        <ul>
          {newList}
          <li>My Favorite is {this.state.favorite}</li>
        </ul>
      </div>
      
    );
  }
};

export default App;