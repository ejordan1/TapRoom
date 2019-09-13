import React from 'react';
import PropTypes from 'prop-types';

const CreateKeg = (props) => {
    let _beerType = null;
    let _pintsLeft = 124;

    function handleNewKegFormSubmission(event)
    {
        event.preventdefault;
        props.onNewKegAdd({ beerType = _beerType, pintsLeft = 124});
        _beerType.value = "";
        _pintsLeft.value = "";
    }

    return (
    <div>
        {/* ideally would be drop down */}
        <form onSubmit = {handleNewKegFormSubmission}>
            <label htmlFor="BeerType">Beer</label>
            <input
                ref = {(input) => {beerType = input; } } 
                id = "BeerType"
                type= "text"
            />
            
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