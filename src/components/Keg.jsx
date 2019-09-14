import React from 'react';
import PropTypes from 'prop-types';
import BeerTypes from './Data';



function Keg(props){

  console.log(" SDFSDF " + BeerTypes().Costco.name);

  function getBeerTypeFromKey (beerTypeKey) 
  {
    if (BeerTypes()[beerTypeKey] == null){
      throw 'NO BEER OF THIS TYPE IN DATA';
    }
    return BeerTypes()[beerTypeKey];
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

  console.log(props.beerType + ", is the BeER TYPE");
  return (

    <div style = {kegStyle()}>
      <img style = {imgStyle()} src={props.imgurl} alt = {`img of ${props.name}`}/>
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
  beerType : PropTypes.string, //how do this? how to pass beer type: string name or as object?
  pintsLeft: PropTypes.number,
  onRemovePintFromKeg: PropTypes.func,
  onAddPintToKeg: PropTypes.func
};

export default Keg;