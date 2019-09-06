import React from 'react';
import BeerCategory from './BeerCategory';
import GetBeerDataArr from './Data';


function BeerCategoryList() {
    var BeerCategoryStyle =() => {
        return {
           
        }
    }

  return (
    <div>
      
      {
          console.log(GetBeerDataArr())}
          {GetBeerDataArr().map((Beer, index) =>
        <BeerCategory name={Beer.name}
          // imgurl={Beer.imgurl}
          Kegs={Beer.Kegs}
          key={index}/>
                
      )}
    </div>
  );
}

export default BeerCategoryList;