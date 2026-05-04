document.addEventListener("DOMContentLoaded", function(){
document.getElementById("curso").addEventListener("change", atualizarMaterias);
});

function atualizarMaterias(){

let curso = document.getElementById("curso").value;
let selectMateria = document.getElementById("materia");

selectMateria.innerHTML = '<option value="">Selecione a matéria</option>';

let lista = [];

if(curso === "Edificações") lista = materiasEdificacoes;
if(curso === "Multimídias") lista = materiasMultimidias;
if(curso === "Desenvolvimento de Sistemas") lista = materiasDesenvolvimentoSistemas;
if(curso === "Informática para Internet") lista = materiasInformaticaInternet;
if(curso === "Jogos Digitais") lista = materiasJogosDigitais;

if(!lista) return;

lista.forEach(function(m){
let option = document.createElement("option");
option.value = m;
option.textContent = m;
selectMateria.appendChild(option);
});

}


function gerar()
{

let curso = document.getElementById("curso").value;
let materia = document.getElementById("materia").value;
let titulo = document.getElementById("titulo").value;
let descricao = document.getElementById("descricao").value;
let degrau = document.getElementById("degrau").value;

let estilo1 = document.getElementById("estilo1").value;
let estilo2 = document.getElementById("estilo2").value;
let estilo3 = document.getElementById("estilo3").value;

let topico1 = document.getElementById("topico1").value;
let topico2 = document.getElementById("topico2").value;
let topico3 = document.getElementById("topico3").value;
let topico4 = document.getElementById("topico4").value;
let topico5 = document.getElementById("topico5").value;


// VALIDAÇÃO
if(materia == "" || titulo == "" || estilo1 == "")
{
alert("Preencha matéria, título e pelo menos um estilo.");
return;
}


// ESTILOS
let estilos = [];
if(estilo1) estilos.push(estilo1);
if(estilo2) estilos.push(estilo2);
if(estilo3) estilos.push(estilo3);

let estiloTexto = estilos.join(", ");


// TÓPICOS
let topicos = [];
if(topico1) topicos.push(topico1);
if(topico2) topicos.push(topico2);
if(topico3) topicos.push(topico3);
if(topico4) topicos.push(topico4);
if(topico5) topicos.push(topico5);

let listaTopicosHTML = topicos.map(t => `<li>${t}</li>`).join("");


// DESCRIÇÃO
let descricaoFinal = descricao != "" 
? descricao 
: `A aula abordou o tema <b>${titulo}</b> na disciplina <b>${materia}</b>, do curso técnico em <b>${curso}</b>, utilizando metodologias como <b>${estiloTexto}</b>.`;


// HTML VISUAL
let html = `

<div class="bloco">
<h2>${titulo}</h2>
<p><b>Degrau:</b> ${degrau}</p>
</div>

<div class="bloco">
<h3>Breve descrição do que foi aplicado no dia</h3>
<p>${descricaoFinal}</p>
</div>

<div class="bloco">
<p><b>- Capacidades</b></p>
<p>Desenvolver raciocínio técnico e aplicação prática dos conceitos.</p>

<p><b>- Conhecimentos</b></p>
<ul>${listaTopicosHTML}</ul>

<p><b>- Estratégia</b></p>
<p>Aula conduzida com ${estiloTexto}, integrando teoria e prática.</p>

<p><b>- Recursos e Ambientes</b></p>
<p>Laboratório, projetor, softwares e ambiente técnico adequado.</p>

<p><b>- Atividades</b></p>
<p>Execução de exercícios práticos e análise de situações reais.</p>

<p><b>- Avaliação</b></p>
<p>Não houve avaliação formal nesta aula.</p>
</div>

`;

document.getElementById("resultado").innerHTML = html;

}


// 🔥 COPIAR COM NEGRITO REAL
function copiar() {
let el = document.getElementById("resultado");

let html = el.innerHTML;
let text = el.innerText;

navigator.clipboard.write([
new ClipboardItem({
"text/html": new Blob([html], { type: "text/html" }),
"text/plain": new Blob([text], { type: "text/plain" })
})
]);

alert("Copiado com formatação!");
}
