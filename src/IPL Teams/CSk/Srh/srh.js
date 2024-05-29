const playersData = [
    {
      name: "Abdul Samad",
      role: "Batter",
      age: "22y 52d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Legbreak",
      portrait: "Abdul Samad portrait"
    },
    {
      name: "Mayank Agarwal",
      role: "Batter",
      age: "32y 306d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Mayank Agarwal portrait"
    },
    {
      name: "Anmolpreet Singh",
      role: "Batter",
      age: "25y 266d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Anmolpreet Singh player portrait"
    },
    {
      name: "Travis Head",
      role: "Top order Batter",
      age: "29y 355d",
      battingHand: "Left hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Travis Head portrait"
    },
    {
      name: "Heinrich Klaasen",
      role: "Wicketkeeper Batter",
      age: "32y 142d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Heinrich Klaasen portrait"
    },
    {
      name: "Aiden Markram",
      role: "Opening Batter",
      age: "29y 76d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Aiden Markram portrait"
    },
    {
      name: "Rahul Tripathi",
      role: "Top order Batter",
      age: "32y 292d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Medium",
      portrait: "Rahul Tripathi player portrait"
    },
    {
      name: "Upendra Yadav",
      role: "Wicketkeeper Batter",
      age: "27y 72d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Upendra Yadav player portrait"
    },
    {
      name: "Abhishek Sharma",
      role: "Allrounder",
      age: "23y 106d",
      battingHand: "Left hand Bat",
      bowlingStyle: "Slow Left arm Orthodox",
      portrait: "Abhishek Sharma player portrait"
    },
    {
      name: "Marco Jansen",
      role: "Bowling Allrounder",
      age: "23y 232d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Left arm Medium fast",
      portrait: "Marco Jansen player portrait"
    },
    {
      name: "Nitish Kumar Reddy",
      role: "Batting Allrounder",
      age: "20y 207d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Medium fast",
      portrait: "Nitish Kumar Reddy portrait"
    },
    {
      name: "Glenn Phillips",
      role: "Allrounder",
      age: "27y 13d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Glenn Phillips portrait"
    },
    {
      name: "Sanvir Singh",
      role: "Allrounder",
      age: "27y 68d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Medium",
      portrait: "Sanvir Singh player portrait"
    },
    {
      name: "Shahbaz Ahmed",
      role: "Allrounder",
      age: "29y 8d",
      battingHand: "Left hand Bat",
      bowlingStyle: "Slow Left arm Orthodox",
      portrait: "Shahbaz Ahmed player portrait"
    },
    {
      name: "Washington Sundar",
      role: "Bowling Allrounder",
      age: "24y 75d",
      battingHand: "Left hand Bat",
      bowlingStyle: "Right arm Offbreak",
      portrait: "Washington Sundar player portrait"
    },
    {
      name: "Wanindu Hasaranga",
      role: "Allrounder",
      age: "26y 143d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Legbreak",
      portrait: "Wanindu Hasaranga portrait"
    },
    {
      name: "Pat Cummins",
      role: "Bowler",
      age: "30y 225d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Fast",
      portrait: "Pat Cummins portrait"
    },
    {
      name: "Akash Singh",
      role: "Bowler",
      age: "21y 237d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Left arm Medium fast",
      portrait: "Akash Singh portrait"
    },
    {
      name: "Fazalhaq Farooqi",
      role: "Bowler",
      age: "23y 88d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Left arm Fast medium",
      portrait: "Fazal Haq player portrait"
    },
    {
      name: "Bhuvneshwar Kumar",
      role: "Bowler",
      age: "33y 317d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Medium",
      portrait: "Bhuvneshwar Kumar portrait"
    },
    {
      name: "Mayank Markande",
      role: "Bowler",
      age: "26y 38d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Legbreak",
      portrait: "Mayank Markande player portrait"
    },
    {
      name: "T Natarajan",
      role: "Bowler",
      age: "32y 259d",
      battingHand: "Left hand Bat",
      bowlingStyle: "Left arm Medium",
      portrait: "T Natarajan portrait"
    },
    {
      name: "Jhathavedh Subramanyan",
      role: "Bowler",
      age: "24y 94d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Legbreak",
      portrait: "Jhathavedh Subramanyan player portrait"
    },
    {
      name: "Umran Malik",
      role: "Bowler",
      age: "24y 27d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Right arm Fast",
      portrait: "Umran Malik player portrait"
    },
    {
      name: "Jaydev Unadkat",
      role: "Bowler",
      age: "32y 62d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Left arm Medium",
      portrait: "Jaydev Unadkat portrait"
    },
    {
      name: "Vijayakanth Viyaskanth",
      role: "Bowler",
      age: "22y 14d",
      battingHand: "Right hand Bat",
      bowlingStyle: "Legbreak",
      portrait: "V Viyaskanth portrait"
    }
  ];
 
  const Srhteam = () => {
    return (
      <div>
        <h1>Sunrisers Hyderabad</h1>
        <img src="https://img.jagranjosh.com/images/2024/March/1132024/srh-ipl-2024-schedule.webp" alt="SRH Logo"  height={400} width={400}/>
        
        <ol>
          {playersData.map((player, index) => (
            <li key={index}>
              <strong>Name:</strong> {player.name}<br />
              <strong>Role:</strong> {player.role}<br />
              <strong>Age:</strong> {player.age}<br />
              <strong>BattingHand:</strong> {player.battingHand}<br />
              <strong>BowlingStyle:</strong> {player.bowlingStyle}<br />
            </li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default Srhteam;
  