import { api_endpoint } from ".";

//FUNCTION to GET basket items by id -------------------
export const getBasket = async (id) => {
    const response = await fetch(`${api_endpoint}/baskets/user/${id}`, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3001/'
      }
      });
    const basketItems = await response.json();
      
    return basketItems;
  };


//FUNCTION to POST item to basket items with user id -------------------
export const addItemToBasket = async (newProduct_id, newUser_id, newQuantity) => {    
    const response = await fetch(`${api_endpoint}/baskets`, {
        method: 'POST',
        body: JSON.stringify({
            product_id: newProduct_id,
            quantity: newQuantity,
            user_id: newUser_id
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const newBasketItem = await response.json()
    return newBasketItem
};

//FUNCTION to POST an update for a product in basket by product id -------------------
export const updateItemInBasket = async (newId, newQuantity) => {

    console.log(`Updating item ${newId} to quantity ${newQuantity}`) 
    const response = await fetch(`${api_endpoint}/baskets/update`, {
        method: 'POST',
        body: JSON.stringify({
            quantity: newQuantity,
            id: newId           
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const updatedBasketItem = await response.json()
    return updatedBasketItem
};

//FUNCTION to DELETE a product in basket by product id -------------------
export const deleteItemInBasket = async (product_id) => {
    console.log(`Deleting product with id: ${product_id}`)
    const response = await fetch(`${api_endpoint}/baskets/${product_id}`, {
        method: 'DELETE'
    });
    console.log(response)
    const basketItems = await response.json();
      
    return basketItems;
  };