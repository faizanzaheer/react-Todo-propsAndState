import React from 'react';

export default class Input extends React.Component {

  render() {
    console.log('In Input Component', this.props)
    return (
      <input type="text" id="something" onChange= { this.props.handleChange }/>
    );
  }
}
