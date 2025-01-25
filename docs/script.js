let correctCount = localStorage.getItem('correctCount') || 0;
let incorrectCount = localStorage.getItem('incorrectCount') || 0;

const hands = [
    { hand: 'A♠ K♠', position: 'UTG', stack: 100, remaining: 'HJ, CO, BU, SB, BB' },
    { hand: 'Q♦ J♦', position: 'HJ', stack: 80, remaining: 'CO, BU, SB, BB' },
    // Add more hands as needed
];

const handStrategies = {
    'UTG': { 'A♠ K♠': 'raise', 'Q♦ J♦': 'fold' },
    'HJ': { 'A♠ K♠': 'raise', 'Q♦ J♦': 'raise' },
    // Add more strategies for other positions and hands
};

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

function updateProgress(isCorrect) {
    if (isCorrect) {
        correctCount++;
        localStorage.setItem('correctCount', correctCount);
    } else {
        incorrectCount++;
        localStorage.setItem('incorrectCount', incorrectCount);
    }

    document.getElementById('correctCount').innerText = localStorage.getItem('correctCount') || 0;
    document.getElementById('incorrectCount').innerText = localStorage.getItem('incorrectCount') || 0;
}

document.getElementById('raise').addEventListener('click', () => {
    const currentHand = document.getElementById('hand').innerText;
    const currentPosition = document.getElementById('position').innerText;
    const correctDecision = handStrategies[currentPosition][currentHand];

    if (correctDecision === 'raise') {
        alert('Correct! Raising is the right decision.');
    } else {
        alert('Incorrect! You should have folded.');
    }

    updateProgress(isCorrect);
});

document.getElementById('fold').addEventListener('click', () => {
    const currentHand = document.getElementById('hand').innerText;
    const currentPosition = document.getElementById('position').innerText;
    const correctDecision = handStrategies[currentPosition][currentHand];

    if (correctDecision === 'fold') {
        alert('Correct! Folding is the right decision.');
    } else {
        alert('Incorrect! You should have raised.');
    }

    updateProgress(isCorrect);
});

// Initialize the app
displayHand();
