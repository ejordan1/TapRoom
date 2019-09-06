import React from 'react';
import Seasons from './Seasons';
import GetSeasonDataArr from './Data';


function SeasonsList() {
    var SeasonsStyle =() => {
        return {
           
        }
    }

  return (
    <div>
      
      {
          console.log(GetSeasonDataArr())}
          {GetSeasonDataArr().map((season, index) =>
        <Seasons name={season.name}
          // imgurl={season.imgurl}
          items={season.items}
          key={index}/>
                
      )}
    </div>
  );
}

export default SeasonsList;