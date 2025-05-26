const calcSync = require('./calculatorsync');
const calcAsync = require('./calculatorasync');

const readline = require('readline');
let tipo = '';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(`Vamos comecar por async ou sync? (async/sync): `, (resposta) => {
  if (resposta.toLowerCase() === 'async') {
    tipo = 'async';
    console.log('Usando calculadora assíncrona...');
  } else if (resposta.toLowerCase() === 'sync') {
    tipo = 'sync';
    console.log('Usando calculadora síncrona...');
  } else {
    console.log('Opção inválida. Usando calculadora síncrona por padrão.');
  }
  iniciarCalculadora();
});
function iniciarCalculadora() {
  rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite a operação (adicionar, subtrair, multiplicar, dividir): ', (operacao) => {
      if (tipo === 'sync') {
        calcSync.operation(parseInt(num1), parseInt(num2), operacao);
      } else {
        calcAsync.operation(parseInt(num1), parseInt(num2), operacao);
      }
      rl.close();
    });
  });
});
}
