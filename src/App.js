import React, { useState, useEffect } from "react";

function TestApp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://FootballWeeklyScores.sillydoggy.repl.co/summary")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.Name}>
          <h2>{item.Name}</h2>
          <ul>
            {item.Scores.map((score) => (
              <li key={`${score.Year}-${score.Week}`}>
                {score.Year}-{score.Week}: {score.DKPts} DKPts
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TestApp;
