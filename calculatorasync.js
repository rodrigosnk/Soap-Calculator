const soap = require('soap');
const url= 'http://www.dneonline.com/calculator.asmx?WSDL';

async function operation(intA, intB, op){
  try{
    
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
    
    const client = await soap.createClientAsync(url);

    const [result] = await client[operacao + 'Async']({ intA, intB });
    console.log(`Resultado da operação ${op} entre os valores ${intA} e ${intB}:`, result[`${operacao}Result`]);
  } catch (error) {
    console.error('Erro na chamada SOAP:', error);
  }
}

exports.operation = operation;