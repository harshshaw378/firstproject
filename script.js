document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    if (name && date) {
        const li = document.createElement('li');
        li.textContent = `${name} booked for ${date}`;
        document.getElementById('bookingList').appendChild(li);

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
    } else {
        alert("Please fill in all fields.");
    }
});
