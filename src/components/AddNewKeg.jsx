import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GetBeerTypes from './Data';
const CreateKeg = (props) => {
  let _beerType = null;

  function handleNewKegFormSubmission(event)
  {   
       
    event.preventdefault;
    props.onNewKegAdd({ beerType : _beerType.value, pintsLeft : 124});
    _beerType.value = '';
       
  }

  return (
    <div>
      <h3>BeerTypes: (copy and paste from the names below)</h3>
      <form onSubmit = {handleNewKegFormSubmission}>
        <label htmlFor="BeerType">Beer Type: </label>
        <input
          ref = {(input) => {_beerType = input; } } 
          id = "BeerType"
          type= "text"
        />
        <button type="submit">Submit</button>
      </form>
        
      {Object.keys(GetBeerTypes()).map((beerType) => {
        return <p>{beerType}</p>;
      })}
      <hr />
      <Link to="/"><button>Back</button></Link>

    </div> );
};

CreateKeg.propTypes = {
  beerTypeList : PropTypes.array,
  onNewKegAdd : PropTypes.func
};
 
export default CreateKeg;

//will need to import method to create beer