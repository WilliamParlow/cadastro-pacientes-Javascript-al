// Função que adiciona um paciente na tabela, junto com todas as validações
function colocarPaciente(paciente) {

  // Variáveis que recebem true ou false, validando os dados recebidos
  // do paciente do formulário
  var pesoEhValido = validaPesoObj(paciente.peso),
      alturaEhValido = validaAlturaObj(paciente.altura),
      nomeEhValido = validaNomeObj(paciente.nome);
      gorduraEhValido = validaGorduraObj(paciente.gordura);

  // Testa se algum dos dados estão incorretos, caso estejam...
  if (!pesoEhValido || !alturaEhValido || !nomeEhValido || !gorduraEhValido) {
    // return para a função e não adiciona o paciente
    return;
  }

  // Cria os elementos necesários para a linha
  var pacienteTr = document.createElement('tr'); // tr
  var tdPeso = document.createElement('td'); // td
  var tdNome = document.createElement('td'); // td
  var tdGordura = document.createElement('td'); // td
  var tdAltura = document.createElement('td'); // td
  var tdImc = document.createElement('td'); // td

  // Define o conteúdo de texto das celulas
  definitTextContent(paciente, tdNome, tdPeso, tdAltura, tdGordura, tdImc);
  definirClasse(pacienteTr, tdNome, tdPeso, tdAltura, tdGordura, tdImc);

  adicionarFilhosTr(pacienteTr, tdNome, tdPeso, tdAltura, tdGordura, tdImc);
  adicionarTrNaTabela(pacienteTr);

  validarImc('.paciente', '.info-peso', '.info-altura', '.info-imc', '.info-nome', '.info-gordura');

  var form = document.querySelector('#forma-adiciona');
  form.reset();

}


function definitTextContent(paciente, tdNome, tdPeso, tdAltura, tdGordura, tdImc) {
  tdNome.textContent    = paciente.nome;
  tdPeso.textContent    = paciente.peso;
  tdAltura.textContent  = paciente.altura;
  tdGordura.textContent = paciente.gordura;
  tdImc.textContent = getImc(paciente.peso, paciente.altura);
}



function adicionarTrNaTabela(pacienteTr) {
  var tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
}



function adicionarFilhosTr(pacienteTr, tdNome, tdPeso, tdAltura, tdGordura, tdImc) {

  pacienteTr.appendChild(tdNome);
  pacienteTr.appendChild(tdPeso);
  pacienteTr.appendChild(tdAltura);
  pacienteTr.appendChild(tdGordura);
  pacienteTr.appendChild(tdImc);

}



function definirClasse(pacienteTr, tdNome, tdPeso, tdAltura, tdGordura, tdImc) {

  pacienteTr.classList.add('paciente');
  tdNome.classList.add('info-nome');
  tdPeso.classList.add('info-peso');
  tdAltura.classList.add('info-altura');
  tdGordura.classList.add('info-gordura');
  tdImc.classList.add('info-imc');

}

function validaPesoObj(peso) {
  if (peso <= 0 || peso >= 1000 || isNaN(peso)) {
    document.querySelector("#erro-peso").textContent = "Peso Inválido";
    return false;
  } else {
    document.querySelector("#erro-peso").textContent = "";
    return true;
  }
}

function validaAlturaObj(altura) {
  if (altura <= 0 || altura  >= 3.00 || isNaN(altura)) {
    document.querySelector("#erro-altura").textContent = "Altura inválida";
    return false;
  } else {
    document.querySelector("#erro-altura").textContent = "";
    return true;
  }
}

function validaNomeObj(nome) {
  if (nome === "" || nome === null) {
    document.querySelector("#erro-nome").textContent = "Nome inválido";
    return false;
  } else {
    document.querySelector("#erro-nome").textContent = "";
    return true;
  }
}

function validaGorduraObj(gordura) {
  if (gordura < 0 || gordura > 100 || gordura === "") {
    document.querySelector("#erro-gordura").textContent = "porcentagem de gordura inválida"
    return false;
  } else {
    document.querySelector("#erro-gordura").textContent = ""
    return true;
  }
}
