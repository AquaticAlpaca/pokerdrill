const hands = [
    { hand: 'A♠ K♠', position: 'UTG', stack: 100, remaining: 'HJ, CO, BU, SB, BB' },
    { hand: 'Q♦ J♦', position: 'HJ', stack: 80, remaining: 'CO, BU, SB, BB' },
    // Add more hands as needed
];

function getRandomHand() {
    return hands[Math.floor(Math.random() * hands.length)];
}

function displayHand() {
    const { hand, position, stack, remaining } = getRandomHand();
    document.getElementById('hand').innerText = hand;
    document.getElementById('position').innerText = position;
    document.getElementById('stack').innerText = stack;
    document.getElementById('remaining').innerText = remaining;
}

document.getElementById('raise').addEventListener('click', () => {
    alert('You chose to Raise!');
    // Logic to check if the decision was correct
});

document.getElementById('fold').addEventListener('click', () => {
    alert('You chose to Fold!');
    // Logic to check if the decision was correct
});

// Initialize the app
displayHand();
