const toggleModeButton = document.getElementById("page-mode");

let isDarkMode = true;

function toggleMode() {
  if (isDarkMode) {
    // Ativa light mode
    alert("light mode");
    isDarkMode = false;
  } else {
    // Ativa dark mode
    alert("dark mode");
    isDarkMode = true;
  }
}
