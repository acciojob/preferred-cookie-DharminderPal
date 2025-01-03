//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Function to get a cookie value
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Apply preferences from cookies
function applyPreferences() {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.body.style.fontSize = `${fontSize}px`;
    document.getElementById("fontsize").value = fontSize;
  }
  if (fontColor) {
    document.body.style.color = fontColor;
    document.getElementById("fontcolor").value = fontColor;
  }
}

// Save preferences on form submission
document.getElementById("customization-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  setCookie("fontsize", fontSize, 365);
  setCookie("fontcolor", fontColor, 365);

  applyPreferences();
});

// Apply preferences when the page loads
window.onload = applyPreferences;
