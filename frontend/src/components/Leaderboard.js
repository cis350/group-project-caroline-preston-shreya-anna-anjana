import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import './App.js';

function Leaderboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/leaderboard')
            .then(response => response.json())
            .then(data => {
                // Assuming data is an array of user objects w a name field
                setUsers(data);
            })
            .catch(error => console.error('Error fetching leaderboard data:', error))
    }, []);

    return (
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">Leaderboard</h1>
            <div className="leaderboard-list">
                {users.map((user, index) => (
                    <div key={index} className="leaderboard-user">
                        <span className="user-rank">{index + 1}</span>
                        <span className="user-name">{user.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
