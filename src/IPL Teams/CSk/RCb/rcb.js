

const RcbTeam = () =>{

    const playersData = [
        {
          name: "Faf du Plessis",
          role: "(c) Middle order Batter",
          age: "39y 159d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Legbreak"
        },
        {
          name: "Anuj Rawat",
          role: "† Wicketkeeper Batter",
          age: "24y 63d",
          battingHand: "Left hand Bat"
        },
        {
          name: "Saurav Chauhan",
          role: "Top order Batter",
          age: "23y 206d",
          battingHand: "Left hand Bat",
          bowlingStyle: "Right arm Offbreak"
        },
        {
          name: "Dinesh Karthik",
          role: "† Wicketkeeper Batter",
          age: "38y 201d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Offbreak"
        },
        {
          name: "Virat Kohli",
          role: "Top order Batter",
          age: "35y 44d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Medium"
        },
        {
          name: "Rajat Patidar",
          role: "Top order Batter",
          age: "30y 201d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Offbreak"
        },
        {
          name: "Akash Deep",
          role: "Bowling Allrounder",
          age: "27y 4d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Fast medium"
        },
        {
          name: "Manoj Bhandage",
          role: "Allrounder",
          age: "25y 75d",
          battingHand: "Left hand Bat",
          bowlingStyle: "Right arm Medium fast"
        },
        {
          name: "Tom Curran",
          role: "Allrounder",
          age: "28y 282d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Fast medium"
        },
        {
          name: "Cameron Green",
          role: "Batting Allrounder",
          age: "24y 199d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Fast medium"
        },
        {
          name: "Will Jacks",
          role: "Batting Allrounder",
          age: "25y 28d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Offbreak"
        },
        {
          name: "Mahipal Lomror",
          role: "Allrounder",
          age: "25y 28d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Legbreak"
        },
        {
          name: "Glenn Maxwell",
          role: "Batting Allrounder",
          age: "33y 66d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Offbreak"
        },
        {
          name: "Suyash Prabhudessai",
          role: "Batting Allrounder",
          age: "26y 13d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Medium"
        },
        {
          name: "Mayank Dagar",
          role: "Bowler",
          age: "27y 38d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Slow Left arm Orthodox"
        },
        {
          name: "Lockie Ferguson",
          role: "Bowler",
          age: "32y 189d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Fast"
        },
        {
          name: "Alzarri Joseph",
          role: "Bowler",
          age: "27y 29d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Fast"
        },
        {
          name: "Mohammed Siraj",
          role: "Bowler",
          age: "29y 281d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Fast"
        },
        {
          name: "Rajan Kumar",
          role: "Bowler",
          age: "29y 281d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Fast"
        },
        {
          name: "Himanshu Sharma",
          role: "Bowler",
          age: "27y 164d",
          battingHand: "Left hand Bat",
          bowlingStyle: "Left arm Medium fast"
        },
        {
          name: "Karn Sharma",
          role: "Bowler",
          age: "25y 196d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Legbreak"
        },
        {
          name: "Swapnil Singh",
          role: "Bowler",
          age: "36y 57d",
          battingHand: "Left hand Bat",
          bowlingStyle: "Legbreak Googly"
        },
        {
          name: "Reece Topley",
          role: "Bowler",
          age: "32y 331d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Slow Left arm Orthodox"
        },
        {
          name: "Vijaykumar Vyshak",
          role: "Bowler",
          age: "29y 301d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Left arm Fast medium"
        },
        {
          name: "Yash Dayal",
          role: "Bowler",
          age: "26y 322d",
          battingHand: "Right hand Bat",
          bowlingStyle: "Right arm Medium"
        }
      ];
      
    return(
        <div>
        <h1>RCb Team</h1>
        <img src="https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg" height={400} width={300}></img>


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
}

export default RcbTeam;