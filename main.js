// Fazer um pedido ao documento HTML que tenha as seguintes caracteristicas
let messages = document.querySelectorAll('.message')
let wordContainer = document.querySelector('#texto')

// Percorer todos os "messages" e torná-los em "elementos-message" individuais
messages.forEach(message => {
    // Remover do HTML o conteudo
    message.remove();

    // Igualar cada palavra a uma variavel
    let text = message.textContent;

    // Criar container para cada "message"
    let container = document.createElement('h1');

    // Atribuir uma Classe ao container criado    
    container.setAttribute('class', 'message');


    // Percorrer cada "palavra" e dividir em letras individuais"
    for (let letter = 0; letter < text.length; letter++) {

        // Criar elemnto Span
        let letterContainer = document.createElement('span')

        // Ver qual letra que vai ser impressa
        let letterToBePrinted = document.createTextNode(text[letter])

        // Associar cada letra ao seu "span"
        letterContainer.appendChild(letterToBePrinted)


        // associar cada span a cada h1 "message"
        container.appendChild(letterContainer)

        // associar cada message à pagina (neste caso a div #texto) -> Aparecer na pagina
        wordContainer.appendChild(container)
    }
});


let body = document.querySelector('body')
let messagesSpan = document.querySelectorAll('.message')
let windowW = window.innerWidth;
let height = window.innerHeight;
let clearButton = document.querySelector('.clear') //botão para remover estilo na versão mobile


// Adicionar interação (evento) mousemove pela página - alterar cor de fundo consoante posição do rato
window.addEventListener('mousemove', function (event) {
    let mousePosX = event.pageX
    let mousePosY = event.pageY

    if (mousePosX < windowW / 2) {
        if (mousePosY < height / 2) {
            body.style.backgroundColor = '#1D1E2C';
        } else {
            body.style.backgroundColor = '#BF9ACA'
        }
    } else {
        if (mousePosY < height / 2) {
            body.style.backgroundColor = '#52796F'
        } else {
            body.style.backgroundColor = 'black'
        }
    }
})


//Determinar eventos
messagesSpan.forEach(element => {
    element.addEventListener('mouseover', function () {
        ChangeLetter(element)
    })
    
    element.addEventListener('click', function () {
        ChangeLetter(element)
    })

    element.addEventListener('mouseleave', function () {
        ChangeLetterRemove(element)
    })

    clearButton.addEventListener('click', function() {
        ChangeLetterRemove(element)
    })
});


//Alterar cada Span para um determinado estilo
function ChangeLetter(element) {
    span = element.querySelectorAll('span')

    span.forEach(function (letter, key) {
        if (key % 3 == 0) {
            letter.classList.add('option-1')
        } else if (key % 3 == 1) {
            letter.classList.add('option-2')
        } else {
            letter.classList.add('option-3')
        }

    });
}

//Remover estilos  
function ChangeLetterRemove(element) {
    span = element.querySelectorAll('span')
    span.forEach(element => {
        element.classList.remove('option-1', 'option-2', 'option-3')
    }); 
}
