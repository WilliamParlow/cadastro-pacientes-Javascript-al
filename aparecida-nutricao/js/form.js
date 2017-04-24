// Referencia para o botão de adicionar pacientes
var botaoAdicionar = document.querySelector("#adicionarPaciente");

// Adicionando evento de clique no botão
// Passado event por parametro para controlar o evento padrão do botão
// de reload da página, previnindo o mesmo (event.preventDefault())
botaoAdicionar.addEventListener("click", function(event) {

  // Referencia para o formulário de adição de paciente
  var form = document.querySelector('#forma-adiciona');
  // Variável que recebe como retorno da função, um objeto paciente com todos
  // os seus dados
  var paciente = obtemPacienteDoFormulario(form);
  // Previne o comportamento padrão do botão de envio dos dados e
  // reload da página
  event.preventDefault();
  // Função que coloca o paciente na tabela, realizando todas as
  // validações necessárias
  colocarPaciente(paciente);

});

// função que retorna um objeto do paciente, com todos os seus dados
// definidos no formulário
function obtemPacienteDoFormulario(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value.replace(",", "."),
    gordura: form.gordura.value,
    imc: getImc(form.peso.value, getAlturaFormatada(form.altura.value))
  }

  return paciente;

}
