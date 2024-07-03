const botaoEL = document.querySelector(".botao");



//Este trecho adiciona um ouvinte de evento ao elemento botaoEL para o evento mouseover, 
//que é acionado quando o ponteiro do mouse é movido sobre o botão. 
//Quando o evento ocorre, a função de callback é executada.
botaoEL.addEventListener("mouseover",(event)=>{


// Estas linhas calculam as coordenadas X e Y do mouse dentro do elemento botaoEL. 
//event.pageX e event.pageY representam as coordenadas X e Y do mouse na página inteira, 
//enquanto botaoEL.offsetLeft e botaoEL.offsetTop representam a posição do canto superior esquerdo do elemento botaoEL em relação ao canto superior esquerdo da página.
    const x = event.pageX - botaoEL.offsetLeft;
    const y = event.pageY - botaoEL.offsetTop;


//Estas linhas definem duas propriedades CSS customizadas (--xPos e --yPos) no elemento botaoEL, 
//que serão usadas para controlar a posição de um efeito visual no CSS. 
//As coordenadas X e Y calculadas anteriormente são atribuídas a essas propriedades, respectivamente.
    botaoEL.style.setProperty("--xPos" , x + "px");
    botaoEL.style.setProperty("--yPos" , y + "px");
});