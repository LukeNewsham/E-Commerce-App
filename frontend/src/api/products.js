import { api_endpoint } from "./index.js";

//function to get all products
export const getProducts = async () => {
  const response = await fetch(`${api_endpoint}/products`);
  const products = await response.json();
  console.log('worked')

  return products;
};


//function to get product categories

export const getProductCategories = async () => {
  const response = await fetch(`${api_endpoint}/products/categories`);
  const products = await response.json();
  console.log('worked')

  return products;
};


//function to get products by a category

export const getProductsByCategory = async (category) => {
  const response = await fetch(`${api_endpoint}/products/categories/${category}`);
  const products = await response.json();
  console.log('worked')

  return products;
};
















