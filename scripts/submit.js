const nome = localStorage.getItem('nome');
        const cpf = localStorage.getItem('cpf');
        const endereco = localStorage.getItem('endereco');
        const uf = localStorage.getItem('uf');
        const telefone = localStorage.getItem('telefone');
        const municipio = localStorage.getItem('municipio');
        const email = localStorage.getItem('email');
        const descricao = localStorage.getItem('descricao');
        const valor = parseFloat(localStorage.getItem('valor'));
        const irpf = parseFloat(localStorage.getItem('irpf'));
        const pis = parseFloat(localStorage.getItem('pis'));
        const cofins = parseFloat(localStorage.getItem('cofins'));
        const inss = parseFloat(localStorage.getItem('inss'));
        const issqn = parseFloat(localStorage.getItem('issqn'));

         // Exibindo os valores
        document.getElementById('submit_nome').textContent = nome;
        document.getElementById('submit_cpf').textContent = cpf;
        document.getElementById('submit_endereco').textContent = endereco;
        document.getElementById('submit_uf').textContent = uf;
        document.getElementById('submit_telefone').textContent = telefone;
        document.getElementById('submit_municipio').textContent = municipio;
        document.getElementById('submit_email').textContent = email;
        document.getElementById('submit_descricao').textContent = descricao;
        document.getElementById('submit_irpf').textContent = irpf + '%';
        document.getElementById('submit_pis').textContent = pis + '%';
        document.getElementById('submit_cofins').textContent = cofins + '%';
        document.getElementById('submit_inss').textContent = inss + '%';
        document.getElementById('submit_issqn').textContent = issqn + '%';

        // Calculando o valor total com os impostos
        const totalImpostos = valor * (irpf + pis + cofins + inss + issqn) / 100;
        const valorTotal = valor + totalImpostos;

        // Exibindo o valor total
        document.getElementById('submit_valor').textContent = 'R$ ' + valorTotal.toFixed(2);
