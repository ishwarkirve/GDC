document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const dateOfBirth = document.getElementById('date').value;
    const tac = document.getElementById('tac');

    if (!name || !email || !password || !dateOfBirth || !tac.checked) {
        alert("All fields are mandatory."); // Display alert if any field is empty
        return; // Stop further execution
    }

    // Create an object to store the data
    const userData = {
        name,
        email,
        password,
        dateOfBirth,
        tac
    };

    // Store data in local storage
    let users = JSON.parse(localStorage.getItem('users')) || []; // Retrieve existing users or initialize an empty array
    users.push(userData); // Add new user data
    localStorage.setItem('users', JSON.stringify(users)); // Save back to local storage
    // Display the stored data
    displayData();
    this.reset(); // Reset the form fields
});

// Function to display stored data
function displayData() {
    const dataDisplay = document.getElementById('dataDisplay');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    dataDisplay.innerHTML = ''; // Clear existing data display
    users.forEach((user, index) => {
        dataDisplay.innerHTML += `
            <div>
                <strong>User ${index + 1}:</strong><br>
                Name: ${user.name}<br>
                Email: ${user.email}<br>
                Date Of Birth: ${user.dateOfBirth}<br>
                Accept terms and conditions:${tac.checked ? "yes" : "no"}<br>
                <hr>
            </div>
        `;
    });
}

// Call displayData on initial load to show existing data
displayData();
// To clear a specific item, e.g., 'users'
localStorage.removeItem('users');
