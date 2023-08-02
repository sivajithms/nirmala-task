function handleSubmit(callback) {
    event.preventDefault();
    // Get the values entered in the username and password fields
    const username = document.getElementById("userName").value;
    const password = document.getElementById("pswd").value;

    // Check if the provided credentials match the expected values
    if (username === "admin" && password === "12345") {
        // Redirect to todo.html
        callback()
        return true;
    } else {
        // Show the error message div
        const errorDiv = document.getElementById("errorDiv").innerText = 'Invalid credentials. Please try again.'
        return false;
    }

};

function validate() {
    window.location.href = "todo.html";
}