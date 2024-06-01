document.addEventListener('DOMContentLoaded', function () {
    const storedMaterial = localStorage.getItem('materia');
    const material = JSON.parse(storedMaterial); // Convertendo de volta para objeto JavaScript
    console.log(material); // Agora você pode usar o objeto normalmente
});
