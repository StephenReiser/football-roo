import React, { useState, useEffect } from "react";

function Summary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('sent req')
    console.log(data.length)
    async function fetchData() {
      const response = await fetch(
        "https://FootballWeeklyScores.sillydoggy.repl.co/summary"
      );
      const json = await response.json();
      console.log(json)
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Summary</h2>
      {data.length > 0 ? (
        <div>
          {data.map((player) => {
            return <div key={player.Name}>{player.Name}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Summary;

