import { api_endpoint } from "./index.js";

//function to get all products
export const getProducts = async () => {
  const response = await fetch(`${api_endpoint}/products`);
  const products = await response.json();
  console.log('worked')

  return products;
};




//function to get product categories


//function to get products by a category
















