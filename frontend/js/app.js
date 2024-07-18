document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:8080/submitForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`,
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('result').innerHTML = `<p>Nombre: ${name}</p><p>Email: ${email}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
