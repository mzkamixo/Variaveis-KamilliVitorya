let anoAtual = 2024;
const nomeCompleto = "Kamilli Vitorya Borgmann de Oliveira";
let idade = 16;
const cursoFaculdade = "Letras habilitação em inglês";
let cidadeAtual = "SJP";

console.log(` Olá, eu sou a ${nomeCompleto}, tenho ${idade} anos, estou no ensino médio, recém me mudei para ${cidadeAtual}, e ano que vem pretendo cursar ${cursoFaculdade} na minha cidade natal.`);

anoAtual= 2025;
cidadeAtual = "Joiville";
idade = 17;

//agência de viagens 

const nomeComprador = "Robson";
const cpf = 12334567500;
const idadeComprador = 34
const listaDeDestinos = new  Array(
  "Joinville",
  " Florianṕolis",
  " João Pessoa",
  " Osasco",
  " Lages"
);

console.log (`Olá senhor ${nomeComprador}, seu cpf é ${cpf} e idade ${idadeComprador}, certo? Sua viagem está reservada, com os seguintes destinos planejados: ${listaDeDestinos}`);

console.log (listaDeDestinos[2]);
console.log("");
  
console.log(`Boa noite robson, nós temos um novo destino adicionado à sua viagem`);

listaDeDestinos.push("Rio de Janeiro");

console.log(listaDeDestinos);