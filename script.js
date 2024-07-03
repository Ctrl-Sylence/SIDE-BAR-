document.addEventListener('DOMContentLoaded', function() {
    var icons = document.querySelectorAll('.icon'); // Seleciona todos os elementos com a classe 'icon'
    var lastClickedIcon = null; // Variável para armazenar o último ícone clicado

    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            if (lastClickedIcon) {
                lastClickedIcon.classList.remove('clicked'); // Remove a classe 'clicked' do último ícone clicado
            }
            icon.classList.add('clicked'); // Adiciona a classe 'clicked' ao ícone atual
            lastClickedIcon = icon; // Atualiza o último ícone clicado
        });
    });
});
 