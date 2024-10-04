

document.getElementById('nfseForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Capturar os dados do formulário
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const municipio = document.getElementById('municipio').value;
  const uf = document.getElementById('uf').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const descricao = document.getElementById('descricao').value;
  var valor = document.getElementById('valor').value;
  const irpf = document.getElementById('irpf').value;
  const pis = document.getElementById('pis').value;
  const cofins = document.getElementById('cofins').value;
  const inss = document.getElementById('inss').value;
  const issqn = document.getElementById('issqn').value;


  // Salvar os dados no localStorage
  localStorage.setItem('nome', nome);
  localStorage.setItem('cpf', cpf);
  localStorage.setItem('endereco', endereco);
  localStorage.setItem('municipio', municipio);
  localStorage.setItem('uf', uf);
  localStorage.setItem('telefone', telefone);
  localStorage.setItem('email', email);
  localStorage.setItem('descricao', descricao);
  localStorage.setItem('valor', valor);
  localStorage.setItem('irpf', irpf);
  localStorage.setItem('pis', pis);
  localStorage.setItem('cofins', cofins);
  localStorage.setItem('inss', inss);
  localStorage.setItem('issqn', issqn);

  // Redirecionar para a segunda página
  window.location.href = 'submit.html'; // Nome do arquivo do segundo HTML
});