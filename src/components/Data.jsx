import React from 'react';

var Items = {
  apple : {
    name : 'Apple',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '0.45',
    pintsLeft : 124,
    imgurl : 'data:image/jpeg;base64,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'
  },
  tomato : {
    name : 'Tomato',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '0.80',
    pintsLeft : 124,
    imgurl : 'https://media.istockphoto.com/photos/three-juicy-red-tomatoes-isolated-on-white-background-picture-id831570242?k=6&m=831570242&s=612x612&w=0&h=nEanpSUl2vfqWEl4824HGP5QAP-WDLAjhnp-ZVIBTks='
},
  banana : {
    name : 'Banana',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '0.25',
    pintsLeft : 124,
    imgurl : 'https://cdn-prod.medicalnewstoday.com/content/images/headlines/271/271157/bananas.jpg'
  },
  squash : {
    name : 'Squash',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '1.00',
    pintsLeft : 124,
    imgurl : 'https://assets.epicurious.com/photos/5893bf1beb3e360a3e384091/master/w_1600%2Cc_limit/kabocha-squash-japanese-pumpkin-020217.jpg'
  },
  peach : {
    name : 'Peach',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '0.75',
    pintsLeft : 124,
    imgurl : 'https://cdn-prod.medicalnewstoday.com/content/images/articles/274/274620/two-peaches.jpg'
  },
  orange : {
    name : 'Orange',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '0.25',
    pintsLeft : 124,
    imgurl : 'https://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY='
  },
  pumpkin : {
    name : 'Pumpkin',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '1.00',
    pintsLeft : 124,
    imgurl : 'data:image/jpeg;base64,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'
  },
  cranberries : {
    name : 'Cranber',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '0.25',
    pintsLeft : 124,
    imgurl : 'https://cdn-prod.medicalnewstoday.com/content/images/articles/306/306498/cranberries.jpg'
  },
  strawberries : {
    name : 'Strawbe',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '1.50',
    pintsLeft : 124,
    imgurl : 'https://berryworld.imgix.net/consumerAssets/Strawberry-transparent1.png?auto=compress%2Cformat&fit=clip&w=1024'
  },
  flowers : {
    name : 'Flowers',
    brand : 'Rainier',
    alcoholContent : 5,
    price : '10.00',
    pintsLeft : 124,
    imgurl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ584kWB2AD8PsbXyF6ynmRLZMQqOP0sxbUG-xQzlLXLeGZSXOQRA'
  }
    
};

function GetBeerData()
{ 
    return BeerData = {
    spring : {
        name: 'Spring',
        items: [Items.flowers, Items.tomato, Items.strawberries, Items.peach, Items.banana]
    },
    summer : {
        name: 'Summer',
        items: [Items.tomato, Items.banana, Items.strawberries, Items.orange]
    },
    fall : {
        name: 'Fall',
        items: [Items.squash, Items.pumpkin, Items.apple,  Items.banana]
    },
    winter : {
        name: 'Winter',
        items: [ Items.banana, Items.cranberries, Items.pumpkin]
    }

    };
}

function GetBeerDataArr()
{ 
    return [
    {
        name: 'Spring',
        items: [Items.flowers, Items.tomato, Items.strawberries, Items.peach, Items.banana]
    },
    {
        name: 'Summer',
        items: [Items.tomato, Items.banana, Items.strawberries, Items.orange]
    },
    {
        name: 'Fall',
        items: [Items.squash, Items.pumpkin, Items.apple,  Items.banana]
    },
    {
        name: 'Winter',
        items: [ Items.banana, Items.cranberries, Items.pumpkin]
    }
]
}

// export default GetBeerData;
export default GetBeerDataArr;