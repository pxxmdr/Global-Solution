document.addEventListener('DOMContentLoaded', (event) => {

    const toggleText = (buttonId, textId) => {
        const textElement = document.getElementById(textId);
        const toggleButton = document.getElementById(buttonId);

        toggleButton.addEventListener('click', () => {
            if (textElement.classList.contains('hidden-text')) {
                textElement.classList.remove('hidden-text');
                toggleButton.textContent = 'Ocultar';
            } else {
                textElement.classList.add('hidden-text');
                toggleButton.textContent = 'Ler Mais';
        }
    });
    };

    toggleText('toggle-button', 'climate-text');
    toggleText('toggle-button-oil', 'oil-text');
    toggleText('toggle-button-lixo', 'lixo-text');
    toggleText('toggle-button-oceanos', 'oceanos-text');
});