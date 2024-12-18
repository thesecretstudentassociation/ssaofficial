// Define valid keys and roles
const validKeys = {
    "wvc2bd": "Chief Consultant Ingale",
    "ge7i4r": "Executive Yellow",
    "znsa56": "Agent Blue",
    "bi358e": "Detective Gray",
    "548khe": "Executive Cyan"
};

// Add event listener to handle form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get the input key from the form
    const key = document.getElementById("key-input").value;
    const role = validKeys[key];

    // Check if the key is valid
    if (role) {
        // Store the user's role in session storage
        sessionStorage.setItem("role", role);

        // Redirect to the home page
        window.location.href = "home.html";
    } else {
        // Show error message if the key is invalid
        document.getElementById("login-error").textContent = "Invalid key. Please try again.";
    }
});

