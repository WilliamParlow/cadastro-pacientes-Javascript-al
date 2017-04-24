function validarImc(trPaciente, tdPesoClass, tdAlturaClass, tdImcClass, tdNomeClass, tdGorduraClass) {

  trPaciente = document.querySelectorAll(trPaciente);

  var pesoEhValido,
  alturaEhValido,
  nomeEhValido,
  gorduraEhValido;

  for (var x = 0; x < trPaciente.length; x++) {

    var paciente = trPaciente[x];

    var tdpeso = paciente.querySelector(tdPesoClass);
    var tdaltura = paciente.querySelector(tdAlturaClass);
    var tdImc = paciente.querySelector(tdImcClass);
    var tdNome = paciente.querySelector(tdNomeClass);
    var tdGordura = paciente.querySelector(tdGorduraClass);

    var peso = tdpeso.textContent;
    var altura = getAlturaFormatada(tdaltura.textContent);
    var nome = tdNome.textContent;
    var gordura = tdGordura.textContent;

    pesoEhValido = validaPeso(peso, tdpeso);
    alturaEhValido = validaAltura(altura, tdaltura);
    nomeEhValido = validaNome(nome, tdNome);
    gorduraEhValido = validaGordura(gordura, tdGordura);

    if (pesoEhValido && alturaEhValido && nomeEhValido && gorduraEhValido) {
      var imc = getImc(peso, altura);
      tdImc.textContent = setImcFormatado(imc);
    } else {
      tdImc.textContent = "Dados inválido";
      paciente.classList.add('paciente-invalido');
    }

  }

}

function validaPeso(peso, tdPeso) {
  if (peso <= 0 || peso >= 1000 || isNaN(peso)) {
    tdPeso.textContent = "Peso inválido";
    return false;
  } else {
    return true;
  }
}

function validaAltura(altura, tdAltura) {
  if (altura <= 0 || altura  >= 3.00 || isNaN(altura)) {
    tdAltura.textContent = "Altura inválida";
    return false;
  } else {
    return true;
  }
}

function validaNome(nome, tdNome) {
  if (nome === "" || nome === null) {
    tdNome.textContent = "nome inválido"
    return false;
  } else {
    return true;
  }
}

function validaGordura(gordura, tdGordura) {
  if (gordura < 0 || gordura > 100 || gordura === "") {
    tdGordura.textContent = "Porcentagem de gordura inválido";
    return false;
  } else {
    return true;
  }
}
