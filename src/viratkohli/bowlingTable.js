import React from 'react';

const BowlingSummaryTable = () => {
  const bowlingData = [
    {
      format: 'Test',
      Matches: 113,
      Innings: 11,
      Balls: 175,
      Runs: 84,
      Wickets: 0,
      BBI: '0/0',
      BBM: '0/0',
      Economy: 2.88,
      Average: 0.0,
      StrikeRate: 0.0,
      FiveWickets: 0,
      TenWickets: 0,
    },
    {
      format: 'ODI',
      Matches: 292,
      Innings: 50,
      Balls: 662,
      Runs: 680,
      Wickets: 5,
      BBI: '1/13',
      BBM: '1/13',
      Economy: 6.16,
      Average: 136.0,
      StrikeRate: 132.4,
      FiveWickets: 0,
      TenWickets: 0,
    },
    // Add data for T20I, IPL, or other formats as needed
  ];

  return (
    <div>
      <h2>Bowling Career Summary</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Format</th>
            <th>M</th>
            <th>Inns</th>
            <th>Balls</th>
            <th>Runs</th>
            <th>Wkts</th>
            <th>BBI</th>
            <th>BBM</th>
            <th>Econ</th>
            <th>Avg</th>
            <th>SR</th>
            <th>5W</th>
            <th>10W</th>
          </tr>
        </thead>
        <tbody>
          {bowlingData.map((player) => (
            <tr key={player.format}>
              <td>{player.format}</td>
              <td>{player.Matches}</td>
              <td>{player.Innings}</td>
              <td>{player.Balls}</td>
              <td>{player.Runs}</td>
              <td>{player.Wickets}</td>
              <td>{player.BBI}</td>
              <td>{player.BBM}</td>
              <td>{player.Economy}</td>
              <td>{player.Average}</td>
              <td>{player.StrikeRate}</td>
              <td>{player.FiveWickets}</td>
              <td>{player.TenWickets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BowlingSummaryTable;
