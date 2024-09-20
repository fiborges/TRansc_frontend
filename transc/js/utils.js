// utils.js
function navigateTo(route) {
  console.log("Navigating to:", route);
  window.location.hash = route;
  router(); // Força o router a executar imediatamente
}

function getCurrentRoute() {
  return window.location.hash.slice(1) || 'home';  // Default to 'login' if hash is empty
}