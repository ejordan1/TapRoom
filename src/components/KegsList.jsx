import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

class KegsList extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      confirmingDeleteNotEmptyKeg : false
    }
  }

  render(){
    return (
      <div>
        <p>Welcome to the tap room. These are our kegs</p>
        {Object.keys(props.kegs).map((kegId) => {
            let keg = props.kegs[kegId];
            return <Keg 
            beerType = {keg.beerType} 
            pintsLeft = {keg.pintsLeft}
            onRemovePintFromKeg = {props.onRemovePintFromKeg}
            onAddPintToKeg = {props.onAddPintToKeg}
            id = {kegId}
        
            />
        })}
        

      </div>
      
    );
  }
}

KegsList.propTypes = {
    kegs = PropTypes.object,
    onRemovePintFromKeg = PropTypes.func,
    onAddPintToKeg = PropTypes.func
  }
  

export default KegsList;
