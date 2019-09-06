import React from 'react';
import Kegs from './Kegs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Beer(props){
    var titleStyle = () => {
         fontSize : "30px"
    }
  return (
    <div>
      <Link style = {titleStyle()} to={`/${props.name}`}>{props.name}</Link> 
      {props.Kegs.map((Keg, index) =>
        <Kegs name={Keg.name}
          brand={Keg.brand}
          alcoholContent={Keg.alcoholContent}
          price={Keg.price}
          imgurl={Keg.imgurl}
          pintsLeft={Keg.pintsLeft}
          key={index}/>
                
      )}
    </div>
  );
}

Beer.PropTypes= {
  name: PropTypes.string.isRequired,
  // imgurl: PropTypes.string,
  Kegs: PropTypes.array
};


export default Beer;