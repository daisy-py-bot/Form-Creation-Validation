document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      let isValid = true;
      const messages = [];
  
      // Select input fields and retrieve trimmed values
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
  
      // Validate username
      //const usernameError = document.getElementById('usernameError');
      if (username.length < 3) {
        //username.textContent = 'Username must be at least 3 characters long.';
        messages.push('Username must be at least 3 characters long.');
        isValid = false;
      } 
  
      // Validate email
      //const emailError = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        //emailError.textContent = 'Please enter a valid email address.';
        messages.push('Please enter a valid email address.');
        isValid = false;
      } 
  
      // Validate password
      //const passwordError = document.getElementById('passwordError');
      if (password.length < 6) {
        //passwordError.textContent = 'Password must be at least 6 characters long.';
        messages.push('Password must be at least 6 characters long.');
        isValid = false;
      } 
  
      // Display feedback message
      feedbackDiv.style.display = 'block';
      if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
      } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
      }

      
    });
    form.submit();
  });
  