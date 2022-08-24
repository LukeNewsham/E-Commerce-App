import React, {useState, useEffect} from 'react';


const User = ({userFirstName, userLastName, userUsername}) => { 
    return (
        <div> 
            
            <h2> Username: {userUsername} </h2>
            <p> First Name: {userFirstName} </p>
            <p> Last Name: {userLastName} </p>
        </div>
    )
}

export default User