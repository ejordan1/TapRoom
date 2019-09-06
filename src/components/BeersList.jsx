import React from 'react';
import Beers from './Beers';
import GetBeerDataArr from './Data';


function BeersList() {
    var BeersStyle =() => {
        return {
           
        }
    }

  return (
    <div>
      
      {
          console.log(GetBeerDataArr())}
          {GetBeerDataArr().map((Beer, index) =>
        <Beers name={Beer.name}
          // imgurl={Beer.imgurl}
          items={Beer.items}
          key={index}/>
                
      )}
    </div>
  );
}

export default BeersList;