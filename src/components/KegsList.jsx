import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

const KegsList = (props) => {

  function showNoKegsInfo()
  {
    if (Object.keys(props.kegs).length === 0){
      return <p>There are currently no kegs. Head over to add new keg to add a keg.</p>;
    }
  }
  return (
    <div>
      <p>Welcome to the tap room.</p>
        
      {showNoKegsInfo()}
        
      {Object.keys(props.kegs).map((kegId) => {
        let keg = props.kegs[kegId];
        return <Keg 
          beerType = {keg.beerType} 
          pintsLeft = {keg.pintsLeft}
          onRemovePintFromKeg = {props.onRemovePintFromKeg}
          onAddPintToKeg = {props.onAddPintToKeg}
          id = {kegId}
          key = {kegId}
        
        />;
      })}
    </div>
  );
};

KegsList.propTypes = {
  kegs : PropTypes.object,
  onRemovePintFromKeg : PropTypes.func,
  onAddPintToKeg : PropTypes.func
};
  

export default KegsList;
