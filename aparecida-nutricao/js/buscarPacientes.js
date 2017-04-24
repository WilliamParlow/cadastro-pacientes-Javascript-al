// http://api-pacientes.herokuapp.com/pacientes

// Técnica AJAX - Requisição Javascript de modo assincrono
// Assincrono pois não interrome o fluxo do javascript
// Busca os dados continua a execução do javascript
// sem travar o javascript durante a requisição

// Referência do botão de buscar pacientes
botaoAdicionar = document.querySelector("#buscarPaciente");

// adiciona o evento de click
botaoAdicionar.addEventListener("click", function() {

  // cria uma variável do tipo XMLHttpRequest
  // O XMLHttpRequest é um objeto do javascript responsável
  // por fazer requisições HTTP
  var xhr = new XMLHttpRequest();

  // Abre uma conexão com o endereço que queremos trabalhar,
  // nesse caso, o http://api-pacientes.herokuapp.com/pacientes
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  // Adiciona um evento que executa ao receber todos os dados do endereço
  xhr.addEventListener("load", function() {

    // Verifica se a requisição ocorreu tudo certo - código 200
    if (xhr.status == 200) {
      // Obtem os dados do endereço do tipo String
      var resposta = xhr.responseText;
      console.log(resposta);
      // Faz um parse da String recebida para um tipo
      // JSON (Javascript Object Notation). Descomente a linhas abaixo
      // para comparar.
      // console.log(resposta);
      // console.log(typeof resposta);
      var pacientes = JSON.parse(resposta);
      // console.log(pacientes);
      // console.log(typeof pacientes);

      // itera pelo array de objetos e adiciona cada um na tabela
      pacientes.forEach(function(paciente) {
        colocarPaciente(paciente);
      });

    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }



  });

  // Pega a requisição que acabamos de criar (definido acima) como
  // xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes")
  // e a envia
  xhr.send();

});
