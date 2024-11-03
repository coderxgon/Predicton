function blockAccess() {
  // Redirect to a different page after 0.3 seconds
  setTimeout(() => {
      window.location.href = 'maintenance.html'; // Change to your desired URL
  }, 300); // 300 milliseconds = 0.3 seconds
}

// Call the blockAccess function when the page loads
window.onload = blockAccess;
