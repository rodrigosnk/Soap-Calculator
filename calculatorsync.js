const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';


function operation(intA, intB, op) {
  soap.createClient(url, (err, client) => {
    if (err) {
      console.error('Erro ao criar cliente SOAP:', err);
      return;
    }
    let operacao = "";

    switch (op.toLowerCase()) {
      case 'adicionar':
        operacao = 'Add';
        break;
      case 'subtrair':
        operacao = 'Subtract';
        break;
      case 'multiplicar':
        operacao = 'Multiply';
        break;
      case 'dividir':
        operacao = 'Divide';
        break;
      default:
        console.error('Operação inválida. Use adicionar, subtrair, multiplicar ou dividir.');
        return;
    }

    client[operacao]({intA, intB}, (err, result) => {
      if (err) {
        console.error('Erro na chamada SOAP:', err);
        return;
      }
      console.log(`Resultado da operação ${op} entre os valores ${intA} e ${intB}:`, result[`${operacao}Result`]);
    });
  });

}

exports.operation = operation;