// Referênica ao campo input para filtrar a tabela
var campoFiltro = document.querySelector('#filtrar-tabela');

// Adiciona evento de entrada de dados (executado a cada letra digitada).
campoFiltro.addEventListener("input", function() {
  // Obtem todos os pacientes
  var pacientes = document.querySelectorAll('.paciente');

  // Verifica se há algo digitado no filtro. Se tiver...
  if (this.value.length > 0) {

    // itera por todos os pacientes
    pacientes.forEach(function(paciente) {

      // pega a td de nome do paciente atual
      var tdNome = paciente.querySelector('.info-nome');
      // pega o nome do paciente atual atraves da td
      var nome = tdNome.textContent.toLowerCase();

      // expressão regular para verificar se ha uma ocorrência
      // de valores iguais de duas strings diferentes
      // campoFiltro.value -> valor que será utilizado para comparar
      // com uma segunda string
      // "i" -> refere ao tipo de busca, sendo que este valor refere tanto
      // para letra minúscula quanto minuscula, sem diferencia-las
      var expressao = RegExp(campoFiltro.value, "i");

      // Se não tiver ocorrênica da string do campo de filtro com o nome...
      if (!expressao.test(nome)) {
        // Esconde o paciente
        paciente.classList.add('invisivel');
      } else {
        // Mostra o paciente
        paciente.classList.remove('invisivel');
      }

    });

  // Se não tiver...
  } else {

    // Defini todos os pacientes como visíveis
    pacientes.forEach(function(paciente) {
      // Mostra todos os pacientes
      paciente.classList.remove('invisivel');
    });

  }

});
