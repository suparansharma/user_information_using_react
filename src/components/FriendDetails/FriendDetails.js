import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const[friend,setFriend] = useState({});
    useEffect(()=>{

        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setFriend(data));

    },[])
    return (
        <div>
           <p> This is all about Id No{friendId} </p>
           <h1>Name :{friend.name} </h1>
           <p>Email:{friend.email}</p>
           <p>Phone:{friend.phone}</p>
           <p>Website:{friend.website}</p>


        </div>
    );
};

export default FriendDetails;