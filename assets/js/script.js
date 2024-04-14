// Sample rankings data
let rankingsData = [
    { player: "Token A", address: "First Address Example", volume: "Volume", score: 100 },
    { player: "Token B", address: "Second Address Example", volume: "Volume", score: 90 },
    { player: "Token C", address: "Third Address Example", volume: "Volume", score: 80 },
    { player: "Token D", address: "Fourth Address Example", volume: "Volume", score: 70 },
    { player: "Token E", address: "Fifth Address Example", volume: "Volume", score: 60 },
    { player: "Token F", address: "Sixth Address Example", volume: "Volume", score: 50 },
    // Add more data as needed
];

// Function to populate the table with rankings data
function populateRankingsTable() {
    const tableBody = document.getElementById('rankingsTableBody');
    tableBody.innerHTML = '';

    // Sort rankingsData by score in descending order
    rankingsData.sort((a, b) => b.score - a.score);

    rankingsData.forEach((data, index) => {
        const rank = index + 1;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rank}</td>
            <td>${data.player}</td>
            <td>${data.address}</td>
            <td>${data.volume}</td>
            <td>${data.score}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new player with score
function addPlayer(player, score) {
    rankingsData.push({ player, score });
    populateRankingsTable();
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', populateRankingsTable);

//Connecting the wallet
document.addEventListener('DOMContentLoaded', function () {
    const connectWalletBtn = document.getElementById('connectWalletBtn');

    connectWalletBtn.addEventListener('click', async function () {
        try {
            // Check if Web3 is available
            if (typeof window.ethereum !== 'undefined') {
                // Request access to the user's account
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Wallet connected successfully
                console.log('Wallet connected successfully!', accounts);
            } else {
                // Web3 not available
                throw new Error('Web3 is not available');
            }
        } catch (error) {
            // Handle error (user denied access or Web3 not available)
            console.error('Error connecting wallet:', error);
            // Display alert with error message
            alert('Error connecting wallet: ' + error.message);
        }
    });
});


// Make an HTTP GET request to the API endpoint
//    fetch('https://your-backend-api.com/memes/top10')
//    .then(response => {
//      if (!response.ok) {
//        throw new Error('Network response was not ok');
//      }
//      return response.json(); // Parse JSON response
//    })
//    .then(data => {
//      // Process the meme data
//      displayTop10Memes(data);
//    })
//    .catch(error => {
//      console.error('Error fetching meme data:', error);
//    });

//  // Function to display the top 10 memes in a table
//  function displayTop10Memes(memes) {
//    const tableBody = document.getElementById('rankingsTableBody');
//    tableBody.innerHTML = ''; // Clear existing table rows
   
//    memes.forEach((meme, index) => {
//      if (index < 10) { // Display only top 10 memes
//        const row = tableBody.insertRow();
//        row.innerHTML = `<td>${meme.name}</td><td>${meme.volume}</td>`;
//      }
//    });
//  }