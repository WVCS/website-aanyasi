document.getElementById('activityInputs').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the values from the form
    const nActivity = document.getElementById('nActivity').value;
    const 1date = document.getElementById('1date').value;
    const Ireccuring = document.getElementById('Ireccuring').value;
    const wLocation = document.getElementById('wLocation').value;
    const wProcess = document.getElementById('wProcess').value;
    const imageUpload = document.getElementById('impageUpload').value;
    const states = document.getElementById('states').value;


    // Redirect to a new page with the values as query parameters
    window.location.href = `preview.html?nActivity=${encodeURIComponent(nActivity)}
    &1date=${encodeURIComponent(1date)}&Ireccuring=${encodeURIComponent(Irecurring)}
    &wLocation=${encodeURIComponent(wLocation)}
    &wProcess=${encodeURIComponent(wProcess)}
    &imageUpload=${encodeURIComponent(imageUpload)}
    &states=${encodeURIComponent(states)}`;
});
