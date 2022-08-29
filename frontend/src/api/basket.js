import { api_endpoint } from ".";


//function to get all basket items from id
export const getBasket = async (id) => {
    const response = await fetch(`${api_endpoint}/baskets/users/${id}`);
    const basketItems = await response.json();
      
    return basketItems;
  };


//add product to basket
export const addItemToBasket = async (newProduct_id, newQuanity, newUser_id) => {
    console.log(nproduct_id, quanity, user_id)
    const response = await fetch(`${api_endpoint}/baskets`, {
        method: 'POST',
        body: JSON.stringify({
            product_id: newProduct_id,
            quanity: newQuanity,
            user_id: newUser_id
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const newBasketItem = await response.json()
    return newBasketItem
};