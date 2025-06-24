import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Greet() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/greet/')
      .then(res => setMessage(res.data.message));
  }, []);

  return (
    <div>
      <a href="/">Go to Hello</a>
      <h1>{message}</h1>
    </div>
  );
}

export default Greet;
