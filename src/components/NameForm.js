import React, { useState, useEffect } from "react";

function App() {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    fetch("https://FootballWeeklyScores.sillydoggy.repl.co/summary")
      .then((response) => response.json())
      .then((data) => {
        setSummaryData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Test-App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {summaryData.map((item) => (
        <div key={item.Name}>
          <h3>{item.Name}</h3>
          <ul>
            {item.summary.map((data) => (
              <li key={data.YearWeek}>
                Year-Week: {data.YearWeek},
                Week: {data.Week},
                Year: {data.Year},
                DkPts: {data.DkPts},
                Team: {data.Team},
                Opp: {data.Opp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;