import React from 'react';


const Input1 = (props) => {

  return(
    <input  
        onChange = {props.handler}
        value = {props.value}
    />

  );

}
export default Input1
