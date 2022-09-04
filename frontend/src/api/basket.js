import { api_endpoint } from ".";


//function to get all basket items from id
export const getBasket = async (id) => {
    const response = await fetch(`${api_endpoint}/baskets/user/${id}`);
    const basketItems = await response.json();
      
    return basketItems;
  };


//add product to basket
export const addItemToBasket = async (newProduct_id, newUser_id, newQuanity) => {
    
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



//update product in basket
export const updateItemInBasket = async (newId, newQuanity) => {

    console.log(`Updating item ${newId} to quantity ${newQuanity}`) 
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

//delete product in basket
export const deleteItemInBasket = async (product_id) => {
    console.log(`Deleting product with id: ${product_id}`)
    const response = await fetch(`${api_endpoint}/baskets/${product_id}`, {
        method: 'DELETE'
    });
    console.log(response)
    const basketItems = await response.json();
      
    return basketItems;
  };