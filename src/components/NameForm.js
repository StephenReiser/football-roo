import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://FootballWeeklyScores.sillydoggy.repl.co/count-letters', {
      method: 'POST',
      body: JSON.stringify({ name: name }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
