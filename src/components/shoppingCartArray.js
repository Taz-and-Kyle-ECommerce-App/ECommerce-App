let cartArray = [];

function shoppingCartArray(info) {

    const cartObj = {
        name: info.name,
        quantity: 1,
        price: parseInt(info.price),
        finalPrice: parseInt(info.price)
    }
    
    const duplicatedItem = cartArray.filter(item => item.name === cartObj.name)
    
    if(duplicatedItem.length) {
        const objIndex = cartArray.findIndex(obj => obj.name === cartObj.name)
        console.log(objIndex)
        cartArray[objIndex].quantity = cartArray[objIndex].quantity + 1
        cartArray[objIndex].finalPrice = cartArray[objIndex].finalPrice + cartArray[objIndex].price 
    } else{
        cartArray.push(cartObj);       
    }

    console.log(cartArray);
}

export {shoppingCartArray, cartArray}
