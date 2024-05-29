
const cskPlayers = [
    {
      name: "MS Dhoni",
      role: "Batter/Wicket-keeper",
      price: "12 Crore"
    },
    {
      name: "Devon Conway",
      role: "Batter",
      price: "1 crore"
    },
    {
      name: "Ruturaj Gaikwad",
      role: "Batter",
      price: "6 Crore"
    },
    {
      name: "Ajinkya Rahane",
      role: "Batter",
      price: "50 lakh"
    },
    {
      name: "Ajay Mandal",
      role: "All-Rounder",
      price: "20 lakh"
    },
    {
      name: "Nishant Sindhu",
      role: "All-Rounder",
      price: "60 lakh"
    },
    {
      name: "Moeen Ali",
      role: "All-Rounder",
      price: "8 Crore"
    },
    {
      name: "Shivam Dube",
      role: "All-Rounder",
      price: "4 crore"
    },
    {
      name: "Rajvardhan Hangargekar",
      role: "Bowler",
      price: "1.5 crore"
    },
  ];
  
  const TeamList = () => {
    return (
      <div>
        <h1>CSK Players List</h1>
        <ul>
          {cskPlayers.map((player, index) => {
            return (
              <li key={index}>
                <strong>player:</strong> {index + 1}<br />
                <strong>Name:</strong> {player.name}<br />
                <strong>Role:</strong> {player.role}<br />
                <strong>Price:</strong> {player.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default TeamList;