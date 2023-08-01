function handleSubmit() {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the values entered in the username and password fields
        const username = document.getElementById("userName").value;
        const password = document.getElementById("pswd").value;

        // Check if the provided credentials match the expected values
        if (username === "admin" && password === "12345") {
            // Redirect to todo.html
            window.location.href = "todo.html";
        } else {
            // Show the error message div
            const errorDiv = document.getElementById("errorDiv");
            errorDiv.classList.remove("d-none");
        }
    });
}