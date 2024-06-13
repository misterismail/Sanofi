document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const user = document.getElementById('user').value;
        const senha = document.getElementById('senha').value;
        
        // Validar os dados do usuário e senha (adicionar lógica de validação conforme necessário)
        if (user === 'admin' && senha === 'admin') {
            // Redirecionar para a página home.html
            window.location.href = 'home.html';
        } else {
            alert('Usuário ou senha inválidos!');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function () {
            // Obter o URL personalizado do card clicado
            const url = card.getAttribute('data-url');
            
            // Redirecionar para o URL correspondente
            window.location.href = url;
        });
    });
});
