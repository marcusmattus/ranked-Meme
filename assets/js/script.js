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
