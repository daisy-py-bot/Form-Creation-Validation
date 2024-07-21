document.addEventListener('DOMContentLoaded', () => {
    async function fetchUserData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const dataContainer = document.getElementById('api-data');
  
      try {
        const response = await fetch(apiUrl);
        const users = await response.json();
  
        // Clear the existing content of dataContainer
        dataContainer.innerHTML = '';
  
        // Create a <ul> element to display the users
        const userList = document.createElement('ul');
  
        // Loop through the users array and create <li> elements for each user
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
  
        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);
      } catch (error) {
        // Clear the existing content of dataContainer
        dataContainer.innerHTML = '';
        // Display an error message
        dataContainer.textContent = 'Failed to load user data.';
      }
    }
  
    // Invoke fetchUserData on DOMContentLoaded
    fetchUserData();
  });
  