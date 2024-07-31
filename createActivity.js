document.getElementById('activityInputs').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Redirect to a new page with the values as query parameters
    window.location.href = `display.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`;
});
