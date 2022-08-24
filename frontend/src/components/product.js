import React, {useState, useEffect} from 'react';


const Product = ({name, description, price}) => { 
    return (
        <div>             
            <h2> {name} </h2>
            <p> Price: {price} </p>
            <p> Description: {description} </p>
        </div>
    )
}

export default Product