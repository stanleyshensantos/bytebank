import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000,123456789);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Stanley",5000,1234567897);
gerente.cadastrarSenha("123");
const cliente = new Cliente("Lais",78945561,"456");
const gerenteestaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorestaLogado = SistemaAutenticacao.login(diretor,"123456");

const clienteestaLogado = SistemaAutenticacao.login(cliente,"456");

console.log(clienteestaLogado, gerenteestaLogado, diretorestaLogado);
