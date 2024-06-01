document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const materialList = document.getElementById('materialList');

    // Mock Data - Replace with actual data fetched from backend
    const mockMaterials = [
        { title: 'Material 1', content: 'Content 1', author: 'Author 1', date: '2024-06-01' },
        { title: 'Material 2', content: 'Content 2', author: 'Author 2', date: '2024-06-02' },
        { title: 'Material 3', content: 'Content 3', author: 'Author 3', date: '2024-06-03' }
    ];

    // Check if loginForm exists
    if (loginForm) {
        // Login Form Submission
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Mock Authentication - Replace with actual authentication logic
            if (username === 'user' && password === 'password') {
                // Simulate login success
                localStorage.setItem('isLoggedIn', true);
                window.location.href = 'dashboard.html'; // Make sure the path matches your structure
            } else {
                alert('Login failed. Please check your username and password.');
            }
        });
    }

    // Check if logoutBtn exists
    if (logoutBtn) {
        // Logout Button Click
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }

    // Check if materialList exists
    if (materialList) {
        // Populate Material List on Dashboard
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'index.html';
        } else {
            mockMaterials.forEach(material => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = `${material.title} - ${material.author} (${material.date})`;
                materialList.appendChild(li);
            });
        }
    }
});
