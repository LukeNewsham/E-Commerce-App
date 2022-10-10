<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">project_title</h3> 
</div>



## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)


### Built With
PERN Stack:
* ![Postgres]
* ![Express.js]
* ![React.js]
* ![NodeJS]



## Installation and Running

To get a local copy up and running follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/LukeNewsham/E-Commerce-App.git
   ```
   
2. Install NPM packages
   ```sh
   npm install 
    ``` 
  
3. Run Backend Server (localhost: 3000)
    ```sh
    npm run devStart 
    ```  
    
 4. Run Frontend Server (localhost: 3001)
      ```sh
      npm run start    
      ```

## Usage




## Roadmap

**Component & Pages File Structure**
- Components
    - navbar
    - addButton
    - addRemoveButton
    - basketItem
    - basketList
    - formInput
    - product
    - productsList
- Pages
    - account
    - basket
    - gadgets
    - home
    - laptops
    - login
    - mobile_phones
    - product_details
    - register
    
**Component & Pages Usage Structure**
- app - navbar

- app (router)  -  account
- app (router)  -  login  - formInput 
- app (router)  -  register  -  formInput
- app (router)  -  product details page - addButton (basket item = 0)
- app (router)  -  product details page - addRemoveButton (basket item > 0)                                               
- app (router)  -  product page  -  productsList  -  product  -  addRemoveButton
- app (router)  -  basket page  -  basketList  -  basketItem  -  addRemoveButton



<!-- MARKDOWN LINKS & IMAGES -->
[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
