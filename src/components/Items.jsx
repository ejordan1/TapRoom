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
      height: "400px",
      margin : "5px"
    };
  };

  
  return (
    <div style = {itemStyle()}>
      <img style = {imgStyle()} src={props.imgurl} alt = {`img of ${props.name}`}/>
      <h4>{props.name}</h4>
      <h5>{props.brand}</h5>
      <h5>{props.alcoholContent}% ABV</h5>
      <p>{props.price}</p>
      <p>Pints Left: {props.pintsLeft}</p>
      
    </div>
  );
}

Item.PropTypes= {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.string.isRequired,
  imgurl: PropTypes.string,
  pintsLeft: PropTypes.number,
};

export default Item;