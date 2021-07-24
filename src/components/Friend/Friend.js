import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id}=props.friend;
 
    const history = useHistory();
    const handleClick = (friendId)=>{
    const url = `/friend/${friendId}`;
        history.push(url)
    }
 
    const friendStyle = {
        border : '1px solid purple',
        margin : '20px',
        padding:'20px',
        borderRadius:'20px',
    }
    return (
        <div style={friendStyle}>
            <h1>Name ={name}</h1>
            <h2>Email = {email}</h2>
            <p>ID: <Link to={`/friend/${id}`}>Show Details of {id}</Link> </p>
            <button onClick={()=>handleClick(id)}>Details</button>
        </div>
    );
};

export default Friend;