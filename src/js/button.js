import React from 'react';


export default class Button extends React.Component {
  
  handleClick(e) {
    console.log('button has been clicked');
  }

  render() {
    console.log('value received in Button', this.props);
    return (
      <div id="button">
        <div className="my-btn" onClick={this.handleClick.bind(this)}>
          Submit
        </div>
      </div>
    );
  }


}