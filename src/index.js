/*
Each page's scripts are separated by: ================================ 
*/ 

/* Pinboard includes docs and misc https://pinboard.opera.com/view/06501e26-cfcb-4eb8-8db6-957a2f2d1dab  */

const renderShop = (shop) => {
  //create span, add class, id, and draggable attribute
  //this can be reused in a react component along with other UI elements/behaviors
  const shopContainer = document.querySelector('#shop')
  
  const shopSpan = document.createElement('span')
  shopSpan.id = shop.name


  const shopImage = document.createElement('img')
  shopImage.classList = ''
  shopImage.src = `.//${shop.name}.jpg`
  shopSpan.append(shopImage)

  shopContainer.append(shopSpan)
}