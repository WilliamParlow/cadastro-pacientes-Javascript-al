// Retorna o IMC
function getImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}
// Returna a altura formatada para pode trabalhar com javascript
function getAlturaFormatada(altura) {
  return altura.replace(",", ".");
}
// retorna o sinal de casa decimal do imc para o padrão brasileiro
function setImcFormatado(imc) {
  return imc.toString().replace(".", ",");
}
