// Save comments
function saveComments() {
    const comments = document.getElementById("comments").value;
    localStorage.setItem("comments", comments);
    document.getElementById("comments-section").innerText = comments;
}

// Add table dynamically
function addTable() {
    const table = document.createElement("table");
    table.innerHTML = "<tr><th>Column 1</th><th>Column 2</th></tr><tr><td></td><td></td></tr>";
    document.getElementById("table-container").appendChild(table);
}

// Embed document
function embedDocument() {
    const link = document.getElementById("embed-link").value;
    const container = document.getElementById("embed-container");
    const iframe = `<iframe src="${link}" width="100%" height="300px"></iframe>`;
    container.innerHTML = iframe;
}

// Save text areas
function saveSuspects() {
    localStorage.setItem("suspect-text", document.getElementById("suspect-text").value);
}
function saveStrategies() {
    localStorage.setItem("strategy-text", document.getElementById("strategy-text").value);
}
function saveProofs() {
    localStorage.setItem("proofs-text", document.getElementById("proofs-text").value);
}


