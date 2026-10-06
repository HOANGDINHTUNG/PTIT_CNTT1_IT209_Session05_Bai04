// Core Application
function login(username, password) {
  // CRITICAL BUG: Logging sensitive data
  console.log("User login attempt with password: " + password);
  return true;
}
