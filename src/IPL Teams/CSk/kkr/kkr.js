const playersData = [
  {
    name: "Shreyas Iyer",
    role: "(c) Top order Batter",
    age: "29y 13d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Offbreak, Legbreak Googly",
  },
  {
    name: "Srikar Bharat",
    role: "† Wicketkeeper Batter",
    age: "30y 77d",
    battingHand: "Right hand Bat",
  },
  {
    name: "Manish Pandey",
    role: "Top order Batter",
    age: "34y 100d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Medium",
  },
  {
    name: "Angkrish Raghuvanshi",
    role: "Top order Batter",
    age: "18y 197d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Slow Left arm Orthodox",
  },
  {
    name: "Rahmanullah Gurbaz",
    role: "† Wicketkeeper Batter",
    age: "22y 21d",
    battingHand: "Right hand Bat",
  },
  {
    name: "Ramandeep Singh",
    role: "Middle order Batter",
    age: "26y 250d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Medium",
  },
  {
    name: "Nitish Rana",
    role: "Middle order Batter",
    age: "29y 357d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Right arm Medium, Right arm Offbreak, Legbreak",
  },
  {
    name: "Sherfane Rutherford",
    role: "Middle order Batter",
    age: "25y 126d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Right arm Fast medium",
  },
  {
    name: "Phil Salt",
    role: "† Wicketkeeper Batter",
    age: "27y 113d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Offbreak",
  },
  {
    name: "Rinku Singh",
    role: "Middle order Batter",
    age: "26y 68d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Right arm Offbreak",
  },
  {
    name: "Jason Roy",
    role: "Withdrawn Opening Batter",
    age: "26y 68d",
    battingHand: "Right hand Bat",
    bowlingStyle: null,
  },
  {
    name: "Venkatesh Iyer",
    role: "Allrounder",
    age: "28y 359d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Right arm Medium",
  },
  {
    name: "Sunil Narine",
    role: "Bowling Allrounder",
    age: "35y 207d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Right arm Offbreak",
  },
  {
    name: "Anukul Roy",
    role: "Allrounder",
    age: "35y 234d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Slow Left arm Orthodox",
  },
  {
    name: "Andre Russell",
    role: "Allrounder",
    age: "25y 19d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Right arm Fast",
  },
  {
    name: "Vaibhav Arora",
    role: "Bowler",
    age: "35y 234d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Fast medium",
  },
  {
    name: "Dushmantha Chameera",
    role: "Bowler",
    age: "26y 5d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Fast medium",
  },
  {
    name: "AM Ghazanfar",
    role: "Bowler",
    age: "31y 342d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Fast",
  },
  {
    name: "Harshit Rana",
    role: "Bowler",
    age: "16y 157d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Offbreak",
  },
  {
    name: "Chetan Sakariya",
    role: "Bowler",
    age: "21y 362d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Right arm Fast",
  },
  {
    name: "Sakib Hussain",
    role: "Bowler",
    age: "25y 294d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Left arm Medium fast",
  },
  {
    name: "Mitchell Starc",
    role: "Bowler",
    age: "33y 323d",
    battingHand: "Left hand Bat",
    bowlingStyle: "Left arm Fast",
  },
  {
    name: "Suyash Sharma",
    role: "Bowler",
    age: "33y 323d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Left arm Fast",
  },
  {
    name: "Varun Chakravarthy",
    role: "Bowler",
    age: "20y 218d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Legbreak Googly",
  },
  {
    name: "Gus Atkinson",
    role: "Withdrawn Bowler",
    age: "32y 112d",
    battingHand: "Right hand Bat",
    bowlingStyle: "Legbreak Googly",
  },
];

const KkrTeam = () => {
  return (
    <div>
      <h1>KKR Team</h1>
      <img
        src="https://static.toiimg.com/thumb/msid-106133658,width-1280,height-720,resizemode-4/106133658.jpg"
        height={400}
        width={300}
      ></img>
      <ol>
        {playersData.map((player, index) => {
          return (
            <li key={index}>
              <strong>Name:</strong> {player.name}
              <br />
              <strong>Role:</strong> {player.role}
              <br />
              <strong>Age:</strong> {player.age}
              <br />
              <strong>BattingHand:</strong> {player.battingHand}
              <br />
              <strong>BowlingStyle:</strong> {player.bowlingStyle}
              <br />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default KkrTeam;
