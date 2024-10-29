const driveIdeas = [
    "Which position you’ll love?",
    "I want to clap without hands.",
    "Get ready for my 6-inch monster.",
    "Taste my lips on your neck.",
    "I'm going to make you melt in my arms.",
    "How about some steamy role-play?",
    "Let's try a new experience together.",
    "Body massage with scented oils."
];
const dumplingIdeas = [
    "Eating together",
    "Making hair of each other",
    "Cooking together",
    "Watching the sunset",
    "Stargazing",
    "Building a fort with blankets and pillows",
    "Writing love letters to each other",
    "Having a picnic in the park"
];

let driveIndex = 0;
let dumplingIndex = 0;

function showSections() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('sections').style.display = 'block';
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(`${section}-section`).style.display = 'block';

    if (section === 'drive') showIdea('drive');
    if (section === 'dumplings') showIdea('dumplings');
}

function showIdea(section) {
    if (section === 'drive') {
        document.getElementById('idea-display').innerText = driveIdeas[driveIndex];
    } else if (section === 'dumplings') {
        document.getElementById('dumpling-display').innerText = dumplingIdeas[dumplingIndex];
    }
}

function nextIdea(section) {
    if (section === 'drive') {
        driveIndex = (driveIndex + 1) % driveIdeas.length;
        showIdea('drive');
    } else if (section === 'dumplings') {
        dumplingIndex = (dumplingIndex + 1) % dumplingIdeas.length;
        showIdea('dumplings');
    }
}

function addGoal() {
    const goalText = document.getElementById('goal-text').value;
    if (goalText) {
        const goalDiv = document.createElement('div');
        goalDiv.innerHTML = `<span>${goalText}</span>`;
        document.getElementById('goal-list').appendChild(goalDiv);
        document.getElementById('goal-text').value = '';
    }
}

function addFeedback(section) {
    const feedbackText = section === 'drive' 
        ? document.getElementById('drive-feedback').value 
        : document.getElementById('dumpling-feedback').value;

    if (feedbackText) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.innerHTML = `<span>${feedbackText}</span>`;
        document.getElementById(`feedback-list-${section}`).appendChild(feedbackDiv);
        
        if (section === 'drive') document.getElementById('drive-feedback').value = '';
        if (section === 'dumplings') document.getElementById('dumpling-feedback').value = '';
    }
}
