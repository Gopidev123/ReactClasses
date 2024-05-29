import React from 'react';
const BattingSummaryTable = () => {
  const battingData = [
    {
      format: 'Test',
      Matches: 113,
      Innings: 191,
      NotOuts: 11,
      Runs: 8848,
      HighScore: 254,
      Average: 49.16,
      BallsFaced: 15924,
      StrikeRate: 55.56,
      Centuries: 29,
      DoubleCenturies: 7,
      Fifties: 30,
      Fours: 991,
      Sixes: 26,
    },
    {
      format: 'ODI',
      Matches: 292,
      Innings: 280,
      NotOuts: 44,
      Runs: 13848,
      HighScore: 183,
      Average: 58.68,
      BallsFaced: 14797,
      StrikeRate: 93.59,
      Centuries: 50,
      DoubleCenturies: 0,
      Fifties: 72,
      Fours: 1294,
      Sixes: 152,
    },
    {
      format: 'T20I',
      Matches: 117,
      Innings: 109,
      NotOuts: 31,
      Runs: 4037,
      HighScore: 122,
      Average: 51.76,
      BallsFaced: 2922,
      StrikeRate: 138.16,
      Centuries: 1,
      DoubleCenturies: 0,
      Fifties: 37,
      Fours: 361,
      Sixes: 117,
    },
    {
      format: 'IPL',
      Matches: 245,
      Innings: 237,
      NotOuts: 36,
      Runs: 7642,
      HighScore: 113,
      Average: 38.02,
      BallsFaced: 5838,
      StrikeRate: 130.9,
      Centuries: 8,
      DoubleCenturies: 0,
      Fifties: 52,
      Fours: 679,
      Sixes: 250,
    },
  ];

  return (
    <div>
      <h2>Batting Career Summary</h2>
      <table  border={1}>
        <thead>
          <tr>
            <th>Format</th>
            <th>M</th>
            <th>Inn</th>
            <th>NO</th>
            <th>Runs</th>
            <th>HS</th>
            <th>Avg</th>
            <th>BF</th>
            <th>SR</th>
            <th>100s</th>
            <th>200s</th>
            <th>50s</th>
            <th>4s</th>
            <th>6s</th>
          </tr>
        </thead>
        <tbody>
          {battingData.map((player) => (
            <tr key={player.format}>
              <td>{player.format}</td>
              <td>{player.Matches}</td>
              <td>{player.Innings}</td>
              <td>{player.NotOuts}</td>
              <td>{player.Runs}</td>
              <td>{player.HighScore}</td>
              <td>{player.Average}</td>
              <td>{player.BallsFaced}</td>
              <td>{player.StrikeRate}</td>
              <td>{player.Centuries}</td>
              <td>{player.DoubleCenturies}</td>
              <td>{player.Fifties}</td>
              <td>{player.Fours}</td>
              <td>{player.Sixes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BattingSummaryTable;
