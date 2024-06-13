document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login successful
            window.location.href = 'form.html'; // Redirect to form page
        })
        .catch((error) => {
            document.getElementById('login-error').textContent = error.message;
        });
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login successful
            window.location.href = 'form.html'; // Redireciona para a página de formulário
        })
        .catch((error) => {
            document.getElementById('login-error').textContent = error.message;
        });
});
