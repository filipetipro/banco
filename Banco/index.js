import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Conta } from "./Conta/Conta.js";
import { ContaSalario} from "./Conta/ContaSalario.js";
import { Gerente} from "./Funcionario/Gerente";
import { Diretor} from "./Funcionario/Diretor";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// const cliente1 = new Cliente("Ricardo",11122233344);
// const cliente2 = new Cliente("Alice",22233344455);

// const contaCorrenteRicardo = new ContaCorrente(0,cliente1,1001);
// const contaPoupanca = new ContaPoupanca(50,cliente1,1001); 
// const contaSalario =new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);


const diretor =new Diretor ("Rodrigo", 10000,12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Ricardo",5000,12378945601);
gerente.cadastrarSenha("123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");

console.log(estaLogado);





