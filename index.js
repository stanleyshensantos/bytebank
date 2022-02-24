import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Stanley" , 11122233309);
const cliente2 = new Cliente("Alice" , 8882223309);

const contaCorrenteStanley = new ContaCorrente(1001 , cliente1);


contaCorrenteStanley.depositar(500);

const conta2 = new ContaCorrente(102 , cliente2);
new ContaCorrente(102 , cliente2);
new ContaCorrente(102 , cliente2);
new ContaCorrente(102 , cliente2);

let valor = 200;
contaCorrenteStanley.transferir(valor, conta2);


console.log(ContaCorrente.numeroDeContas);

