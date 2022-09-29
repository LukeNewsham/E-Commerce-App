import { api_endpoint } from "./index.js";

//FUNCTION to GET all products -------------------
export const getProducts = async () => {
  const response = await fetch(`${api_endpoint}/products`, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3001/'
  }
  });
  const products = await response.json();
  return products;
};

// //FUNCTION to GET all product categories -------------------
// export const getProductCategories = async () => {
//   const response = await fetch(`${api_endpoint}/products/categories`);
//   const products = await response.json();
//   return products;
// };

// //FUNCTION to GET products by category -------------------
// export const getProductsByCategory = async (category) => {
//   const response = await fetch(`${api_endpoint}/products/categories/${category}`);
//   const products = await response.json();
//   return products;
// };
















