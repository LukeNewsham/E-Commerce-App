
# Gizmo.

A full stack, fully responsive, e-commerse application which uses the PERN stack (PostgreSQL, Express.js, React.js, Node.js). Users are able to log in and save their basket using passport.js.






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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


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




