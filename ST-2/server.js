const express = require('express');
const app = express();
const port = 3000;

// Sample data
const playersData = [
  { id: 1, player: 'John', selected: true },
  { id: 2, player: 'Jane', selected: false },
  { id: 3, player: 'Alice', selected: true },
  { id: 4, player: 'Bob', selected: false },
];

// Serve the HTML file
app.use(express.static(__dirname)); // Serves files from the current directory

// Endpoint to get player data
app.get('/getdata', (req, res) => {
  res.json(playersData);
});

// Endpoint to get filtered data where 'selected' is true
app.get('/selecteddata', (req, res) => {
  const selectedPlayers = playersData.filter(player => player.selected);
  res.json(selectedPlayers);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
