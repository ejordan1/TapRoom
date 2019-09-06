import React from 'react';
import Items from './Items';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Beer(props){
    var titleStyle = () => {
         fontSize : "30px"
    }
  return (
    <div>
      <Link style = {titleStyle()} to={`/${props.name}`}>{props.name}</Link> 
      {props.items.map((item, index) =>
        <Items name={item.name}
          brand={item.brand}
          alcoholContent={item.alcoholContent}
          price={item.price}
          imgurl={item.imgurl}
          pintsLeft={item.pintsLeft}
          key={index}/>
                
      )}
    </div>
  );
}

Beer.PropTypes= {
  name: PropTypes.string.isRequired,
  // imgurl: PropTypes.string,
  items: PropTypes.array
};


export default Beer;