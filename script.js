function updateResults() {
    const parties = [
        { name: 'cdu', likelihood: 0.35 },
        { name: 'spd', likelihood: 0.15 },
        { name: 'greens', likelihood: 0.20 },
        { name: 'fdp', likelihood: 0.10 },
        { name: 'afd', likelihood: 0.20 }
    ];

    parties.forEach(partyObj => {
        const element = document.querySelector(`.${partyObj.name}`);
        const randomPercentage = generateRandomPercentage(partyObj.likelihood);
        element.textContent = `${partyObj.name.toUpperCase()} - ${randomPercentage}%`;
    });
}

function generateRandomPercentage(likelihood) {
    const maxPercentage = 50; // Maximum percentage to generate
    const threshold = Math.random() * maxPercentage * likelihood;
    return Math.floor(Math.random() * threshold + (1 - likelihood) * maxPercentage);
}

setInterval(updateResults, 5000);
updateResults();
