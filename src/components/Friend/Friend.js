import React from 'react';

const Friend = (props) => {
    const {name,email}=props.friend;

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
        </div>
    );
};

export default Friend;