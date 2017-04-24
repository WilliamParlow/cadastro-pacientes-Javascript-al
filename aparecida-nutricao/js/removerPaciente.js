// Referencia para todos os pacientes
var pacientes = document.querySelectorAll(".paciente")
// Referencia para o corpo da tabela onde há os pacientes
var tabela = document.querySelector("#tabela-pacientes");

// Adiciona evento de duplo clique
tabela.addEventListener("dblclick", function(event) {
  // Condição que trata se o clique foi em uma TD
  if (event.target.tagName === "TD") {
    // Adiciona classe css para efeito de esmaecer (desaparecer) gradualmente
    event.target.parentNode.classList.add("fadeOut");
    // Espera o efeito esmaecer do css por 500 milisegundos
    setTimeout(function() {
      // remove o paciente selecionada com duplo clique
      event.target.parentNode.remove();
    }, 500);

  }

});

// pacientes.forEach(function(paciente) {
//   paciente.addEventListener('dblclick', function() {
//     this.remove();
//   });
// });
