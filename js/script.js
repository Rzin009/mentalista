let sim = 0;
let perguntas = 0;

const questionario = [
    "Você ligou para a vítima?",
    "Você não estava no local da ocorrência?",
    "Você mora perto da vítima?",
    "Você já trabalhou com a vítima?",
    "Você tem alguma ocupação no local do ocorrido?",
    "Você era amigo da vítima?",
    "Você é pai da vítima?",
    "Você se dava bem com a vítima?",
    "Você já teve algum desentendimento ou briga com a vítima?",
    "Você tem problemas de autocontrole?"
];

const inicio = document.getElementById("inicio");
const interrogatorio = document.getElementById("interrogatorio");
const resultado = document.getElementById("resultado");

const textoPergunta = document.getElementById("textoPergunta");
const numeroPergunta = document.getElementById("numeroPergunta");
const contadorSim = document.getElementById("contadorSim");
const barraProgresso = document.getElementById("barraProgresso");

const tituloResultado = document.getElementById("tituloResultado");
const mensagemResultado = document.getElementById("mensagemResultado");
const quantidadeSim = document.getElementById("quantidadeSim");
const imagemVeredito = document.getElementById("imagemVeredito");
const statusResultado = document.getElementById("statusResultado");

document.getElementById("btnIniciar").onclick = function() {
    inicio.classList.add("escondido");
    interrogatorio.classList.remove("escondido");

    mostrarPergunta();
};

function mostrarPergunta() {
    textoPergunta.innerText = questionario[perguntas];

    numeroPergunta.innerText = "PERGUNTA " + (perguntas + 1) + " / 10";
    contadorSim.innerText = "RESPOSTAS SIM: " + sim;

    barraProgresso.style.width = (perguntas * 10) + "%";
}

document.getElementById("btnSim").onclick = function() {
    sim++;
    avancar();
};

document.getElementById("btnNao").onclick = function() {
    avancar();
};

function avancar() {
    perguntas++;

    if (perguntas < 10) {
        mostrarPergunta();
    } else {
        finalizar();
    }
}

function finalizar() {
    let veredito;
    let mensagem;
    let imagem;
    let status;

    if (sim < 5) {
        veredito = "INOCENTE";
        mensagem = "As evidências apresentadas não indicam envolvimento significativo na ocorrência.";
        imagem = "img/liberando.png";
        status = "CASO ENCERRADO";
    } else if (sim == 5) {
        veredito = "SUSPEITA";
        mensagem = "Foram encontrados indícios que justificam investigação adicional.";
        imagem = "img/perguntando.png";
        status = "INVESTIGAÇÃO EM ANDAMENTO";
    } else if (sim <= 8) {
        veredito = "CÚMPLICE";
        mensagem = "A quantidade de evidências sugere possível participação indireta no crime.";
        imagem = "img/algemando.png";
        status = "SUSPEITO DETIDO";
    } else {
        veredito = "CULPADA";
        mensagem = "O nível de envolvimento indicado pelas respostas é extremamente alto.";
        imagem = "img/algemando.png";
        status = "CASO CONCLUÍDO";
    }

    interrogatorio.classList.add("escondido");
    resultado.classList.remove("escondido");

    tituloResultado.innerText = veredito;
    mensagemResultado.innerText = mensagem;
    quantidadeSim.innerText = sim;
    imagemVeredito.src = imagem;
    statusResultado.innerText = status;
}

document.getElementById("btnReiniciar").onclick = function() {
    sim = 0;
    perguntas = 0;

    barraProgresso.style.width = "0%";

    resultado.classList.add("escondido");
    inicio.classList.remove("escondido");
};
