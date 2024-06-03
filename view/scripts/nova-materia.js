
const autor = document.getElementById('autor');
const data = document.getElementById('dataCriacao');

autor.value = JSON.parse(localStorage.getItem('userData')).nome;
data.value = new Date().toISOString().split('T')[0];

function salvarMateria() {
    const titulo = document.getElementById('titulo').value;
    const legenda = document.getElementById('legenda').value;
    const conteudo = document.getElementById('conteudo').value;

    const data = {
        titulo,
        legenda,
        conteudo,
        autor: JSON.parse(localStorage.getItem('userData')),
        dataCriacao: new Date().toISOString().split('T')[0]
    };

    fetch('http://localhost:3000/materia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 201) {
                alert('Matéria criada com sucesso!');
                window.location.href = '/view/pages/main.html';
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