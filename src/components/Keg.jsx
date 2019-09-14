import React from 'react';
import PropTypes from 'prop-types';
import GetBeerTypes from './Data';



function Keg(props){
  function getBeerTypeFromKey (beerTypeKey) 
  {
    if (GetBeerTypes()[beerTypeKey] == null){
      throw 'NO BEER OF THIS TYPE IN DATA';
    }
    return GetBeerTypes()[beerTypeKey];
  }

  var imgStyle = () => {
    return  {
      height: '150',
      width : '190',
      border : "5px",
      borderStyle : "solid",
      color : "brown",
      backgroundColor : "tan"
      
    };
  };

  var kegStyle = () => {
    return  {
            
      border : "5px",
      borderStyle : "solid",
      borderColor: "brown",
      color : "white",
      width : "200px",
      backgroundColor : "#b3814b",
      display : "inline-block",
      height: "400px",
      margin : "5px"
    };
  };

  return (

    <div style = {kegStyle()}>
      <img style = {imgStyle()} src={getBeerTypeFromKey(props.beerType).imgurl} alt = {`img of ${props.name}`}/>
      <h4>{getBeerTypeFromKey(props.beerType).name}</h4>
      <h5>{getBeerTypeFromKey(props.beerType).brand}</h5>
      <h5>{getBeerTypeFromKey(props.beerType).alcoholContent}% ABV</h5>
      <p>{getBeerTypeFromKey(props.beerType).price}</p>
      
      <p>Pints Left: {props.pintsLeft}</p>
      <button onClick={()=> {props.onRemovePintFromKeg(props.id)}}>- Pint</button>
      <button onClick={()=> {props.onAddPintToKeg(props.id)}}>+ Pint</button>
      
    </div>
  );
}

Keg.PropTypes= {
  id : PropTypes.string,
  beerType : PropTypes.string, 
  pintsLeft: PropTypes.number,
  onRemovePintFromKeg: PropTypes.func,
  onAddPintToKeg: PropTypes.func
};

export default Keg;