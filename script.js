
// Capturando o formulário e o contêiner de saída
const form = document.getElementById('form');
const outputContainer = document.getElementById('output');
const outputName = document.getElementById('outputName');
const outputEmail = document.getElementById('outputEmail');
const outputPhone = document.getElementById('outputPhone');

// Adicionando o evento de submit ao formulário
form.addEventListener ('submit', function(event)) {
  // Prevenir o comportamento padrão de recarregar a página
  event.preventDefault();

  // Capturando os valores dos inputs
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;
  const municipio = document.getElementById('municipio').value;
  const uf = document.getElementById('uf').value;
  const email = document.getElementById('email').value;
  const descricao = document.getElementById('descricao').value;
  var valor = document.getElementById('valor').value;
  const irpf = document.getElementById('irpf').value;
  const pis = document.getElementById('pis').value;
  const cofins = document.getElementById('cofins').value;
  const inss = document.getElementById('inss').value;
  const issqn = document.getElementById('issqn').value;

  // Exibindo os valores capturados na nova "página"
  outputName.textContent = name;
  outputEmail.textContent = email;
  outputPhone.textContent = phone;

  // Mostrando a nova página com os dados
  outputContainer.style.display = 'block';

  // Opcional: esconder o formulário original
  form.style.display = 'none'; 
}
