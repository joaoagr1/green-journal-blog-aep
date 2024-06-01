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
    const mockMaterials = [
        { title: 'Material 1', content: 'Content 1', author: 'Author 1', date: '2024-06-01', subtitle: 'Subtitle 1', id: 1},
        { title: 'Material 2', content: 'Content 2', author: 'Author 2', date: '2024-06-02', subtitle: 'Subtitle 2', id: 2},
        { title: 'Material 3', content: 'Content 3', author: 'Author 3', date: '2024-06-03', subtitle: 'Subtitle 3', id: 3}
    ]; 

    if (materialList) {
        // Populate Material List on Dashboard
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'index.html';
        } else {
            mockMaterials.forEach(material => {
                const li = document.createElement('li');

                li.className = 'list-group-item';
                li.innerHTML = `<h2>${material.title}</h2><p>${material.author} - ${material.date}</p>`;

                li.addEventListener('click', () => {
                    console.log(material.id);
                });
                              
                materialList.appendChild(li);
            });
        }
    }
});