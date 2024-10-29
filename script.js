// Show Sections After Clicking Photo
function showSections() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("sections").style.display = "block";
}

// Show Career Section
function showCareer() {
    hideAllSections();
    document.getElementById("career-section").style.display = "block";
}

// Show Drive Section
function showDrive() {
    hideAllSections();
    document.getElementById("drive-section").style.display = "block";
}

// Show Dumplings Section
function showDumplings() {
    hideAllSections();
    document.getElementById("dumplings-section").style.display = "block";
}

// Hide All Sections
function hideAllSections() {
    document.getElementById("career-section").style.display = "none";
    document.getElementById("drive-section").style.display = "none";
    document.getElementById("dumplings-section").style.display = "none";
}

// Add Goal to Career Section
function addGoal() {
    const goalText = document.getElementById("goal-text").value;
    if (goalText) {
        const goalItem = document.createElement("div");
        goalItem.textContent = goalText;
        document.getElementById("weekly-goals").appendChild(goalItem);
        document.getElementById("goal-text").value = "";
    }
}

// Add Idea to Drive Section
function addDriveIdea() {
    const ideaText = document.getElementById("drive-text").value;
    if (ideaText) {
        const ideaItem = document.createElement("div");
        ideaItem.textContent = ideaText;
        document.getElementById("drive-list").appendChild(ideaItem);
        document.getElementById("drive-text").value = "";
    }
}

// Add Thought to Drive Section
function addThought() {
    const thoughtText = document.getElementById("thought-text").value;
    if (thoughtText) {
        const thoughtItem = document.createElement("div");
        thoughtItem.textContent = thoughtText;
        document.getElementById("thought-list").appendChild(thoughtItem);
        document.getElementById("thought-text").value = "";
    }
}

// Add Activity to Dumplings Section
function addDumpling() {
    const dumplingText = document.getElementById("dumpling-text").value;
    if (dumplingText) {
        const dumplingItem = document.createElement("div");
        dumplingItem.textContent = dumplingText;
        document.getElementById("dumpling-list").appendChild(dumplingItem);
        document.getElementById("dumpling-text").value = "";
    }
}
