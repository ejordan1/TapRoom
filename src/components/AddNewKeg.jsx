import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const CreateKeg = (props) => {
    let _beerType = null;
    let _pintsLeft = 124;

    function handleNewKegFormSubmission(event)
    {   
        console.log("BEER TYPE IS:" + _beerType);
        event.preventdefault;
        props.onNewKegAdd({ beerType : _beerType.value, pintsLeft : 124});
        _beerType.value = "";
       
    }

    return (
    <div>
        {/* ideally would be drop down */}
        <form onSubmit = {handleNewKegFormSubmission}>
            <label htmlFor="BeerType">Beer Type: </label>
            <input
                ref = {(input) => {_beerType = input; } } 
                id = "BeerType"
                type= "text"
            />
            <button type="submit">Submit</button>
        </form>
        <hr />
      <Link to="/"><button>Back</button></Link>

    </div> );
}

CreateKeg.propTypes = {
    beerTypeList : PropTypes.array,
    onNewKegAdd : PropTypes.func
}
 
export default CreateKeg;

//will need to import method to create beer