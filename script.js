document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/register', {
        method: 'POST',
        body: new URLSearchParams(formData),
    })
        .then(response => response.text())
        .then(text => alert(text));
});

document.getElementById('statusForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('statusId').value;
    fetch(`/status/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('statusResult').textContent = `ID: ${data.id}, Name: ${data.name}`;
        })
        .catch(() => {
            document.getElementById('statusResult').textContent = 'Participant not found';
        });
});
