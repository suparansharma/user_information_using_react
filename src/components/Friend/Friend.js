import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id}=props.friend;

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
        </div>
    );
};

export default Friend;