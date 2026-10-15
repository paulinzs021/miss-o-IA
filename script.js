const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando voce esta com fome, o que vocefaz?
        alternativas: [
            {
                texto:  "Como alguma coisa",
                afirmacao: "afirmacao"
            },
            {
                texto: "Espero até a próxima refeição",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "O que você faz depois da escola",
        alternativas: [
            {
                texto:"Faço as tarefas",
                afirmacao:"afirmacao"
            },
            {
                texto: "Jogo videogame ou mexo no celular",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Quando você acorda de manhã, o que faz primeiro?"
            {
                texto:"Escovo os dentes",
                afirmacao:"afirmacao"
            },
            {
                texto:"Olho o celular",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "O que você faz quando está chovendo?",
        alternativas: [
            {
                texto:"Fico em casa.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Saio com um guarda-chuva.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Quando você está com sono, o que faz?",
        alternativas: [
            {
                texto: "Vou dormir.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Continuo mexendo no celular.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
Não, acredito que o desempenho escolar e as notas são os principais indicadores da inteligência de um estudante
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();