import React from 'react';
import PropTypes from 'prop-types';



function Event(props){
  var getStyle = () => {
    return  {
        
      width : '100'
        
    };
  };
  return (
    <div >
      <img style = {getStyle()} src={props.imgurl} alt = {`image of ${props.name}`}/>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.location} - {props.date}</p>
    </div>
  );
}

Event.PropTypes = {
  name : PropTypes.string.isRequired,
  description : PropTypes.string,
  date : PropTypes.string.isRequired,
  imgurl : PropTypes.string,
  location : PropTypes.string.isRequired
};

export default Event;

//location, date, name, picture, description