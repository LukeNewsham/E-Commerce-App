
# Gizmo.

A full stack, fully responsive, e-commerse application which uses the PERN stack (PostgreSQL, Express.js, React.js, Node.js). Users are able to log in and save their basket using passport.js.

Database designed and updated by myself.






## Tech Stack

**Client:** React, Redux, Css

**Server:** Node, Express

**Database:** PostgreSQL



## Features

- Users are able to register and save their baske, details and orders to the database.
- Basket data is saved locally so the user stays logged in through a webpage refresh/crash.
- Users are able to log in using Goggle or Facebook, which saved the data to the database for an easier register/log in experience.
- Products are loaded onto tiles, which can be sorted by category.
- Products a details page once clicked for more infomation. 
- The number count of products displays correctly across the site.
- The basket appears in the navbar once the user has logged in, and displays the total basket cost.
- The app is fully responsive and allows a great user experience on all screen sizes by inplementing a hamburger menu for smaller devices.


## Roadmap

This project is still being developed. Remaining tasks include:

- Add Facebook log in
- Add user order history
- Add user change password

## Screenshots and Demo

#### Home page for easy site navigation
![Gizmo Screenshot 1](https://user-images.githubusercontent.com/95356508/218988418-57039858-3dbd-4fe8-b762-b0ce9b0d4682.png)

#### Product flex cards which dymanically update depending on screen size
![Gizmo Screenshot 2](https://user-images.githubusercontent.com/95356508/218988429-2f7ec868-6fc9-4d4f-b132-b8eecf95884d.png)

#### Product category pages
![Gizmo Screenshot 3](https://user-images.githubusercontent.com/95356508/218988437-62c4105f-0aa0-43c3-8a6a-e3693efb5cd6.png)

#### Unable to add to basket until logged in
![Gizmo Screenshot 4](https://user-images.githubusercontent.com/95356508/218988443-13d9bad2-70fc-4bc1-9126-d080cdeb4924.png)

#### Users profile displays (including Google and Facebook) and basket appears in navbar
![Gizmo Screenshot 5](https://user-images.githubusercontent.com/95356508/218988455-93b4dcb9-0144-42fb-962f-3da19db8c2e5.png)

#### Users basket clearly outlines products in basket ready to be checked out
![Gizmo Screenshot 6](https://user-images.githubusercontent.com/95356508/218988461-6836cc52-ce1a-4038-a44c-abffcccc01be.png)

#### Applicaion is fully responsive and works for all screen sizes
![Mobile Screenshots](https://user-images.githubusercontent.com/95356508/218989735-9b606035-728b-44bc-b61f-67eed7b0c5f5.png)


## API Reference

 PORT 3000 is being used to run express.js during local deployment.

 All URLs include http://localhost:3000 at the start.

#### GET Check if username is taken

```http
  GET /users/username/${newUsername}`
```

#### GET All Products

```http
  GET /Products
```


#### GET Users Orders

```http
  GET /orders/user/${id}
```


#### GET Users Basket

```http
  GET /baskets/user/${id}
```

#### POST New user

```http
  POST /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Users username |
| `first_name` | `string` | **Required**. Users fist name |
| `last_name` | `string` | **Required**. Users last name |
| `email` | `string` | **Required**. Users email |
| `password` | `string` | **Required**. Users password |
| `profile_picture` | `string` | **Required**. Users profile picture |



#### POST An Item to Users Basket

```http
  POST /baskets
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `product_id` | `string` | **Required**. Product ID |
| `quanity` | `string` | **Required**. Quanity of product for basket |
| `users_id` | `string` | **Required**. Logged in users ID |

#### POST Updated Basket Item

```http
  POST /baskets
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Product ID |
| `quanity` | `string` | **Required**. Quanity of product for basket |

#### DELETE Basket Item

```http
  POST /baskets/${product_id}
```




