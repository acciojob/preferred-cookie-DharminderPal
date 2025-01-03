//your JS code here. If required.
// Function to save preferences in cookies
function savePreferences() {
    // Get the values from the form
    const fontSize = document.getElementById('fontSize').value;
    const fontColor = document.getElementById('fontColor').value;

    // Set cookies to store the preferences (with an expiry of 1 year)
    document.cookie = `fontSize=${fontSize}; expires=${getExpirationDate()}; path=/`;
    document.cookie = `fontColor=${fontColor}; expires=${getExpirationDate()}; path=/`;

    // Apply preferences immediately after saving
    applyPreferences();
}

// Function to get the expiration date for the cookie (1 year from now)
function getExpirationDate() {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1); // Set expiration to 1 year
    return date.toUTCString();
}

// Function to apply preferences from cookies
function applyPreferences() {
    // Get cookies
    const cookies = document.cookie.split(';');

    let fontSize = 16;  // Default font size
    let fontColor = '#000000';  // Default font color

    cookies.forEach(cookie => {
        // Trim whitespace and split each cookie into name and value
        const [name, value] = cookie.trim().split('=');

        if (name === 'fontSize') {
            fontSize = value;
        } else if (name === 'fontColor') {
            fontColor = value;
        }
    });

    // Apply the preferences to the page
    document.body.style.fontSize = fontSize + 'px';
    document.body.style.color = fontColor;
}

// Call applyPreferences on page load to apply the saved preferences
window.onload = function() {
    applyPreferences();
};
