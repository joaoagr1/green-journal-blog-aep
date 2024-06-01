function login() {

    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    })
    .then(response => {
        if (response.status === 200) {
            window.location.href = './main.html';
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



document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const materialList = document.getElementById('materialList');

    // Mock Data - Replace with actual data fetched from backend
    
    
        fetch('http://localhost:3000/materia') 
            .then(response => response.json())
            .then(data => {
                data.forEach(material => {
                    console.log(material);
                    const li = document.createElement('li');
                    li.className = 'list-group-item';
                    li.innerHTML = `<h2>${material.titulo}</h2><p>${material.legenda} - ${material.autor.nome}</p>`;
                    materialList.appendChild(li);

                    li.addEventListener('click', () => {
                        console.log(`Você clicou em ${JSON.stringify(material)}`);
                        localStorage.setItem('materia', JSON.stringify(material)); 
                         window.location.href = '/view/pages/detail.html';
                    });
                    

                });
            })
            .catch(error => {
                console.error('Erro ao obter a lista de materiais:', error);
                
            });
    
});