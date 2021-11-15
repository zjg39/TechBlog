// Logout function
const logout = async function() {
    const response = await fetch('/api/user/logout', {  // route for api
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  // if the logout response is ok, the user is returned to the home page
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('You are not logged out!');
    }
  };
  
  document.querySelector('#logout-link').addEventListener('click', logout);