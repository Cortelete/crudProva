const prompt = require('prompt-sync')();
const {
  listarResidencias,
  adicionarResidencia,
  atualizarResidencia,
  removerResidencia,
} = require('./residencias');

function menu() {
  console.log("1. Listar residências");
  console.log("2. Adicionar residência");
  console.log("3. Atualizar residência");
  console.log("4. Remover residência");
  console.log("5. Sair");
}

let opcao;
do {
  menu();
  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      listarResidencias();
      break;
    case "2":
      const bairro = prompt("Bairro: ");
      const rua = prompt("Rua: ");
      const numero = parseInt(prompt("Número: "), 10);
      const moradores = prompt("Moradores (separados por vírgula): ").split(",");
      adicionarResidencia(bairro, rua, numero, moradores);
      break;
    case "3":
      const idAtualizar = parseInt(prompt("ID da residência a atualizar: "), 10);
      const novoBairro = prompt("Novo Bairro: ");
      const novaRua = prompt("Nova Rua: ");
      const novoNumero = parseInt(prompt("Novo Número: "), 10);
      const novosMoradores = prompt("Novos Moradores (separados por vírgula): ").split(",");
      atualizarResidencia(idAtualizar, novoBairro, novaRua, novoNumero, novosMoradores);
      break;
    case "4":
      const idRemover = parseInt(prompt("ID da residência a remover: "), 10);
      removerResidencia(idRemover);
      break;
    case "5":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
      break;
  }
} while (opcao !== "5");