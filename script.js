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
: `A aula abordou o tema <b>${titulo}</b> na disciplina <b>${materia}</b>, do curso técnico em <b>${curso}</b>, utilizando metodologias como <b>${estiloTexto}</b>, com foco na aplicação prática dos conceitos e no desenvolvimento das competências técnicas.`;


// HTML FINAL
let html = `

<div class="bloco titulo">
<h2>${titulo}</h2>
<p class="degrau"><b>Degrau (Taxonomia de Bloom):</b> ${degrau}</p>
</div>

<div class="bloco">
<h3>Breve descrição do que foi aplicado no dia</h3>
<p>${descricaoFinal}</p>
</div>

<div class="bloco">
<h3>Capacidades</h3>
<p>Compreender, analisar e aplicar os conceitos relacionados ao tema, desenvolvendo raciocínio técnico, autonomia profissional e capacidade de resolução de problemas.</p>
</div>

<div class="bloco">
<h3>Conhecimentos</h3>
<ul>
${listaTopicosHTML}
</ul>
</div>

<div class="bloco">
<h3>Estratégia</h3>
<p>A aula foi conduzida utilizando <b>${estiloTexto}</b>, com abordagem progressiva entre teoria e prática, incentivando participação ativa e pensamento crítico.</p>
</div>

<div class="bloco">
<h3>Recursos e Ambientes</h3>
<p>Ambiente equipado com projetor, computadores, softwares técnicos e recursos didáticos adequados à disciplina <b>${materia}</b>.</p>
</div>

<div class="bloco">
<h3>Atividades</h3>
<p>Aplicação prática dos conteúdos por meio de exercícios, análise de casos e execução de tarefas relacionadas ao contexto profissional.</p>
</div>

<div class="bloco">
<h3>Avaliação</h3>
<p>Não houve avaliação formal nesta aula.</p>
</div>

`;

document.getElementById("resultado").innerHTML = html;

}



function copiar()
{
let texto = document.getElementById("resultado").innerText;
navigator.clipboard.writeText(texto);
}
