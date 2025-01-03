//your JS code here. If required.
// Function to save preferences in cookies
function savePreferences() {
    // Get the values from the form
    const fontsize = document.getElementById('fontsize').value;
    const fontcolor = document.getElementById('fontcolor').value;

    // Set cookies to store the preferences (with an expiry of 1 year)
    document.cookie = `fontsize=${fontsize}; expires=${getExpirationDate()}; path=/`;
    document.cookie = `fontcolor=${fontcolor}; expires=${getExpirationDate()}; path=/`;

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

    let fontsize = 16;  // Default font size
    let fontcolor = '#000000';  // Default font color

    cookies.forEach(cookie => {
        // Trim whitespace and split each cookie into name and value
        const [name, value] = cookie.trim().split('=');

        if (name === 'fontsize') {
            fontsize = value;
        } else if (name === 'fontcolor') {
            fontcolor = value;
        }
    });

    // Apply the preferences to the page
    document.body.style.fontsize = fontsize + 'px';
    document.body.style.color = fontcolor;
}

// Call applyPreferences on page load to apply the saved preferences
window.onload = function() {
    applyPreferences();
};
