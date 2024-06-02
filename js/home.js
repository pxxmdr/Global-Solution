document.addEventListener('DOMContentLoaded', function() {
    const ButtonSaibaMais = document.getElementById('ButtonSaibaMais');

    ButtonSaibaMais.addEventListener('click', function() {
        window.location.href = './blog.html'; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableIcons = document.querySelectorAll('.clickable-icon');

    clickicon.forEach(icon => {
        icon.addEventListener('click', function() {
            if (icon.classList.contains('instagram')) {
                window.location.href = 'https://www.instagram.com/';
            } else if (icon.classList.contains('twitter')) {
                window.location.href = 'https://x.com/i/flow/login';
            } else if (icon.classList.contains('facebook')) {
                window.location.href = 'https://pt-br.facebook.com/';
            }
        });
    });
});