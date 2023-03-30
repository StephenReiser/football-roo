import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./css/table.css"

function Summary() {
  const [data, setData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://FootballWeeklyScores.sillydoggy.repl.co/summary"
      );
      const json = await response.json();
      const filteredData = json.filter((player) => player.DKPts.length > 5);
      setData(filteredData);
      
    }
    fetchData();
  }, []);

  const sortData = (column) => {
    // If the same column is clicked again, reverse the sort order
    if (column === sortColumn) {
      setSortOrder(sortOrder * -1);
    } else {
      setSortColumn(column);
      setSortOrder(1);
    }

    setData((prevData) => {
      const newData = [...prevData];
      newData.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        if (aValue < bValue) {
          return -1 * sortOrder;
        }
        if (aValue > bValue) {
          return 1 * sortOrder;
        }
        return 0;
      });
      return newData;
    });
  };

  return (
    <div className="table-container">
      <h2>Range of Outcomes 2020-2022</h2>
      {data.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => sortData("Name")}>Name</th>
              <th>Games</th>
              <th>Position</th>
              <th onClick={() => sortData("DKPts_10%")}>DKPts_10%</th>
              <th onClick={() => sortData("DKPts_25%")}>DKPts_25%</th>
              <th onClick={() => sortData("DKPts_50%")}>DKPts_50%</th>
              <th onClick={() => sortData("DKPts_75%")}>DKPts_75%</th>
              <th onClick={() => sortData("DKPts_90%")}>DKPts_90%</th>
            </tr>
          </thead>
          <tbody>
            {data.map((player) => {
              return (
                <tr key={player.Name}>
                  <td>{player.Name}</td>
                  <td>{player.DKPts.length}</td>
                  <td>{player.Pos[0]}</td>
                  <td>{player["DKPts_10%"].toFixed(1)}</td>
                  <td>{player["DKPts_25%"].toFixed(1)}</td>
                  <td>{player["DKPts_50%"].toFixed(1)}</td>
                  <td>{player["DKPts_75%"].toFixed(1)}</td>
                  <td>{player["DKPts_90%"].toFixed(1)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Summary;
