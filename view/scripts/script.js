function login() {

    var email = document.getElementById('email').value;
    var senha = document.getElementById('passwordnp').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    })
    .then(response => {
        if (response.status === 200) {
            window.location.href = '/outra-pagina';
            console.log('Login bem-sucedido!');
        } else if (response.status === 404) {
            alert('Credenciais incorretas');
        } else if (response.status === 500) {
            alert('Internal server error');
        } else {
            alert('Algo deu errado. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro na solicitação:', error);
        alert('Erro na solicitação. Por favor, tente novamente mais tarde.');
    });
}
