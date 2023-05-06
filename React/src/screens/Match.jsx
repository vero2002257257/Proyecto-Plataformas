import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Match() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getMatches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/matches', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMatches(response.data.matches);
      } catch (error) {
        console.error(error);
      }
    }
    getMatches();
  }, []);

  return (
    <div>
      <h2>Mis Matches</h2>
      {matches.map(match => (
        <div key={match.id}>
          <img src={match.photo} alt={match.name} />
          <p>{match.name}</p>
          <button>Enviar mensaje</button>
        </div>
      ))}
    </div>
  );
}

export default Match;
