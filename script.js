console.log("TEST");
var lang = true; // true=eng, false=pt
function changeButtonText(buttonId, newText) {
    var button = document.getElementById(buttonId);
    if (button) {
        button.textContent = newText;
    }
}


window.addEventListener('load', function() {
    var pippo = document.getElementById('test2');
    pippo.addEventListener("click", () => {
        lang = !lang; // Alterna o valor de lang
        console.log(lang);

        const portuguesElements = document.querySelectorAll('.portugues');
        const inglesElements = document.querySelectorAll('.ingles');
  
        
        if (lang) {

            // Mostrar elementos em inglês e esconder em português
            portuguesElements.forEach(element => {
                element.style.display = 'block';
            });
            inglesElements.forEach(element => {
                element.style.display = 'none';
            });
        //HEADER
            changeButtonText('languageLink-inicio', 'Inicio');
            changeButtonText('languageLink-tabela', 'Tabela Horaria');
            changeButtonText('languageLink-sobre', 'Sobre');
            changeButtonText('languageLink-projetos', 'Portifólio');
        //HEADER...

        //TABLE HEAD
            changeButtonText('semana', 'Semanas');
            changeButtonText('tdprojetos', 'PROJETOS');
        //TABLE HEAD...

        //DATAS DAS SEMANAS
            changeButtonText('languageLink-14-a-18-jun', 'Semana - 14 de maio a 18 de maio');
            changeButtonText('languageLink-21-a-25-may', 'Semana - 21 de maio a 25 de maio');
            changeButtonText('languageLink-28-a-1-may', 'Semana - 27 de maio a 01 de junho');
            changeButtonText('languageLink-04-a-08-jun', 'Semana - 04 de junho a 08 de junho');
            changeButtonText('languageLink-11-a-15-jun', 'Semana - 11 de junho a 15 de junho');
            changeButtonText('languageLink-18-a-22-jun', 'Semana - 18 de junho a 22 de junho');
            changeButtonText('languageLink-25-a-29-jun', 'Semana - 25 de junho a 29 de junho');
        //DATAS DAS SEMANAS...

            changeButtonText('languageLink-project1', 'PROJETOS 1');
            changeButtonText('languageLink-project2', 'PROJETOS 2');
            changeButtonText('languageLink-project3', 'PROJETOS 3');


                    } 
        

        else {
            // Mostrar elementos em português e esconder em inglês
            portuguesElements.forEach(element => {
                element.style.display = 'none';
            });
            inglesElements.forEach(element => {
                element.style.display = 'block';
            });
        //HEADER
            changeButtonText('languageLink-inicio', 'start');
            changeButtonText('languageLink-tabela', 'Time Table');
            changeButtonText('languageLink-sobre', 'About');
            changeButtonText('languageLink-projetos', 'portfolio');
        //HEADER...

        //TABLE HEAD
            changeButtonText('semana', 'Week    ');
            changeButtonText('tdprojetos', 'PROJECTS');
        //TABLE HEAD...

        //DATAS DAS SEMANAS
            changeButtonText('languageLink-14-a-18-jun', 'Week - may 14th to may 18th');
            changeButtonText('languageLink-21-a-25-may', 'Week - may 21th to may 25th');
            changeButtonText('languageLink-28-a-1-may', 'Week - may 27th to june 01th');
            changeButtonText('languageLink-04-a-08-jun', 'Week - june 04th to june 08th');
            changeButtonText('languageLink-11-a-15-jun', 'Week - june 11th to june 15th');
            changeButtonText('languageLink-18-a-22-jun', 'Week - june 18th to june 22th');
            changeButtonText('languageLink-25-a-29-jun', 'Week - june 25th to june 29th');
        //DATAS DAS SEMANAS...

            changeButtonText('languageLink-project1', 'PROJECTS 1');
            changeButtonText('languageLink-project2', 'PROJECTS 2');
            changeButtonText('languageLink-project3', 'PROJECTS 3');


        }



























    });
});

