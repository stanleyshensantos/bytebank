import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Stanley";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 8882223309;

const contaCorrenteStanley = new ContaCorrente();
contaCorrenteStanley.agencia = 1001;


console.log(contaCorrenteStanley._saldo);
contaCorrenteStanley.depositar(100);
contaCorrenteStanley.depositar(100);
contaCorrenteStanley.depositar(100);
console.log(contaCorrenteStanley._saldo);


const valorSacado = contaCorrenteStanley.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteStanley);

