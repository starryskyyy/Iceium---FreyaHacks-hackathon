/*
Each page's scripts and their custom-methods/functions are separated by comments
Pinboard includes docs and misc ctl+click or cpy+pst =  https =//pinboard.opera.com/view/06501e26-cfcb-4eb8-8db6-957a2f2d1dab  
*/
/* SHOPS CONTAINER */

const containers = document.querySelectorAll('.container')

//make each shop container clickable
const shopsContainer = () => {
    containers.forEach(container => {
    container.addEventListener('click', (e) => {
        e.preventDefault();
        const currentShop = document.querySelector(e.this);
        container.appendChild(currentShop);
        }
      )
    }
  )
};

//call to API and bring in the json as JS objeect and run renderShop
const getShops = () => {
  fetch(`https://api.yelp.com/v3/businesses/search${params}`)
  .then(resp => resp.json())
  .then((shopData) => {
      shopData.forEach((shop) => renderShop(shop))
    }
  )
};
//create span, add class, id
//renderShop can be reused in a react component along with virtually all UI elements/behaviors
const renderShop = (shop) => {
  const shopContainer = document.querySelector('#shop')
  const shopSpan = document.createElement('span') 
  shopSpan.name = shop.name;
  shopSpan.img_url = shop.img_url;
  shopSpan.url = shop.url;
  shopSpan.phone = shop.phone,
  shopSpan.display_phone = shop.display_phone,
  shopSpan.review_count = shop.review_count
  return shopContainer;
  
}

  const shopImage = document.createElement('img')
  shopImage.classList = ''
  shopImage.src = `.//${shop.name}.jpg`
  shopSpan.append(shopImage)

  shopsContainer.append(shopSpan)


'use strict';

import { client as _client } from 'yelp-fusion'

// Place holder for Yelp Fusion's key
const apiKey = "MG_mNqNJ2ghKp_Uwlr_HzVOI8eB9KTm2VdjNjgDCVX_TMicJcqS9EcF1FXR4we_fGh2Dbfnkt6-Cl9cY7uPbzflvHlbrK4a0RRTbMHJiRa79mravQjbkKHjdsl63YnYx";

const searchRequest = {
  "term": 'icecream',
  "location": 'city , state'
};

const client = _client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});


/* Setup the script to run now */
function init() {
  getShops();
  shopsContainer();
}

init();
