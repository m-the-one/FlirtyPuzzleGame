function showSections() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('sections').style.display = 'block';
}

function showCareer() {
    document.getElementById('career-section').style.display = 'block';
    document.getElementById('drive-section').style.display = 'none';
    document.getElementById('dumplings-section').style.display = 'none';
}

function showDrive() {
    document.getElementById('drive-section').style.display = 'block';
    document.getElementById('career-section').style.display = 'none';
    document.getElementById('dumplings-section').style.display = 'none';
}

function showDumplings() {
    document.getElementById('dumplings-section').style.display = 'block';
    document.getElementById('career-section').style.display = 'none';
    document.getElementById('drive-section').style.display = 'none';
}

function addGoal() {
    const goalText = document.getElementById('goal-text').value;
    if (goalText) {
        const goalDiv = document.createElement('div');
        goalDiv.innerHTML = `<span>${goalText}</span> 
            <button onclick="markComplete(this)">✓</button> 
            <button onclick="markIncomplete(this)">✗</button>`;
        document.getElementById('weekly-goals').appendChild(goalDiv);
        document.getElementById('goal-text').value = '';
    }
}

function markComplete(button) {
    button.parentElement.innerHTML = `<span style="text-decoration: line-through;">${button.previousSibling.textContent}</span> - Great job!`;
}

function markIncomplete(button) {
    const reason = prompt("Why didn't you complete this goal?");
    if (reason) {
        button.parentElement.innerHTML = `<span style="color: red;">${button.previousSibling.textContent}</span> - Reason: ${reason}`;
    }
}

function addDriveIdea() {
    const driveText = document.getElementById('drive-text').value;
    if (driveText) {
        const driveDiv = document.createElement('div');
        driveDiv.innerHTML = `<span>${driveText}</span>`;
        document.getElementById('drive-list').appendChild(driveDiv);
        document.getElementById('drive-text').value = '';
    }
}

function addDumpling() {
    const dumplingText = document.getElementById('dumpling-text').value;
    if (dumplingText) {
        const dumplingDiv = document.createElement('div');
        dumplingDiv.innerHTML = `<span>${dumplingText}</span>`;
        document.getElementById('dumpling-list').appendChild(dumplingDiv);
        document.getElementById('dumpling-text').value = '';
    }
}

function addThought() {
    const thoughtText = document.getElementById('thought-text').value;
    if (thoughtText) {
        const thoughtDiv = document.createElement('div');
        thoughtDiv.innerHTML = `<span>${thoughtText}</span>`;
        document.getElementById('thought-list').appendChild(thoughtDiv);
        document.getElementById('thought-text').value = '';
    }
}
