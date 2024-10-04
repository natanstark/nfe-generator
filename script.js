
// Capturando o formulário e o contêiner de saída
const form = document.getElementById('form');

// Adicionando o evento de submit ao formulário
document.getElementById('submit').addEventListener('click', function (){
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

  fetch('submit.html')

  // Opcional: esconder o formulário original
  form.style.display = 'none'; 
})
