import React from 'react';
import Event from './Event';

var scheduleData = [
  {
    name : 'FarmersThing',
    location : 'Ballard',
    date : 'In the future',
    description : 'a thing',
    imgurl : 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/corn-1296x728-feature.jpg?w=1155&h=1528' 
  },
  {
    name : 'FarmersThing  2',
    location : 'Ballard',
    date : 'In the future',
    description : 'a thing',
    imgurl : 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/corn-1296x728-feature.jpg?w=1155&h=1528' 
  }
];

function Schedule()
{
  return (
    <div>
      {scheduleData.map((event, index) => 
        <Event name = {event.name}
          location = {event.location}
          date = {event.date}
          description = {event.description}
          imgurl = {event.imgurl}
          key = {index}/>
      )}
    </div>
  );
}

export default Schedule;