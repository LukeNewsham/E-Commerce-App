import { api_endpoint } from ".";


//function to get all basket items from id
export const getBasket = async (id) => {
    const response = await fetch(`${api_endpoint}/baskets/user/${id}`);
    const basketItems = await response.json();
      
    return basketItems;
  };


//add product to basket
export const addItemToBasket = async (newUser_id, newProduct_id, newQuanity) => {
    
    const response = await fetch(`${api_endpoint}/baskets`, {
        method: 'POST',
        body: JSON.stringify({
            user_id: newUser_id,
            product_id: newProduct_id,
            quanity: newQuanity            
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const newBasketItem = await response.json()
    return newBasketItem
};


//update product in basket
export const updateItemInBasket = async (newQuanity, newId) => {
    
    const response = await fetch(`${api_endpoint}/baskets/update`, {
        method: 'POST',
        body: JSON.stringify({
            quanity: newQuanity,
            id: newId           
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const updatedBasketItem = await response.json()
    return updatedBasketItem
};