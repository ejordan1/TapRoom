import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  var imgStyle = () => {
    return  {
      height: '150',
      width : '190',
      border : "5px",
      borderStyle : "solid",
      color : "red",
      backgroundColor : "white"
     
    };
  };

  var itemStyle = () => {
    return  {
            
      border : "5px",
      borderStyle : "solid",
      color : "red",
      width : "200px",
      backgroundColor : "yellow",
      display : "inline-block",
      height: "300px",
      margin : "5px"
    };
  };

  
  return (
    <div style = {itemStyle()}>
      <img style = {imgStyle()} src={props.imgurl} alt = {`img of ${props.name}`}/>
      <h6>{props.name}</h6>
      <p>{props.price}</p>
    </div>
  );
}

Item.PropTypes= {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgurl: PropTypes.string
};

export default Item;