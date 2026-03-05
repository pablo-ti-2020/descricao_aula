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


// MONTAR ESTILOS

let estilos = [];

if(estilo1 != "") estilos.push(estilo1);
if(estilo2 != "") estilos.push(estilo2);
if(estilo3 != "") estilos.push(estilo3);

let estiloTexto = estilos.join(", ");


// MONTAR TÓPICOS

let topicos = [];

if(topico1 != "") topicos.push("• " + topico1);
if(topico2 != "") topicos.push("• " + topico2);
if(topico3 != "") topicos.push("• " + topico3);
if(topico4 != "") topicos.push("• " + topico4);
if(topico5 != "") topicos.push("• " + topico5);

let topicosFormatados = topicos.join("\n");


// TEXTO INSTITUCIONAL COMPLETO

let textoFinal =

"TÍTULO\n\n" + titulo +

"\n\nDEGRAU (TAXONOMIA DE BLOOM)\n\n" + degrau +

"\n\nDESCRIÇÃO INICIAL\n\n" +
(descricao != "" 
? descricao 
: "A aula abordará o tema " + titulo + " na matéria " + materia + " do curso técnico em " + curso + ", utilizando a metodologia de " + estiloTexto + ", com foco no desenvolvimento das competências técnicas e comportamentais exigidas pelo contexto industrial e pelo mercado de trabalho contemporâneo. O conteúdo será contextualizado com situações reais da prática profissional, promovendo a integração entre teoria e aplicação técnica."
) +

"\n\nTÓPICOS ABORDADOS\n\n" + topicosFormatados +

"\n\nESTRATÉGIA\n\n" +
"A aula será conduzida utilizando os formatos de " + estiloTexto + ", permitindo que os técnicos acompanhem o desenvolvimento do conteúdo de forma estruturada, com explicação detalhada, demonstração prática e aplicação orientada conforme os parâmetros técnicos da matéria " + materia + ". A metodologia adotada visa estimular o raciocínio técnico, a autonomia profissional e a capacidade de resolução de problemas dentro do contexto produtivo." +

"\n\nRECURSOS E AMBIENTE\n\n" +
"Será utilizado ambiente adequado à execução da aula, contemplando infraestrutura compatível com a natureza da disciplina, tais como computadores, projetor multimídia, softwares específicos, ferramentas técnicas e demais recursos necessários para garantir a correta apresentação e execução das atividades relacionadas ao tema " + titulo + ". O espaço será organizado de modo a favorecer a participação ativa e a interação entre os técnicos." +

"\n\nATIVIDADE\n\n" +
"Os técnicos participarão da aula aplicando os conhecimentos apresentados por meio das metodologias " + estiloTexto + ", executando atividades relacionadas aos tópicos desenvolvidos, analisando situações práticas e realizando procedimentos técnicos compatíveis com as exigências do curso " + curso + ". A atividade buscará consolidar a aprendizagem por meio da prática orientada e da contextualização profissional." +

"\n\nAVALIAÇÃO\n\n" +
"Não haverá avaliação nesta aula." +

"\n\nRESULTADO ESPERADO\n\n" +
"Ao final da aula, o técnico deverá ter compreendido o conteúdo " + titulo + " e sua aplicação na matéria " + materia + ", sendo capaz de reconhecer, analisar e aplicar os conceitos desenvolvidos dentro do contexto técnico do curso " + curso + ", demonstrando domínio progressivo das competências previstas no planejamento pedagógico.";


document.getElementById("resultado").innerText = textoFinal;

}



function copiar()
{
let texto = document.getElementById("resultado").innerText;
navigator.clipboard.writeText(texto);
}
