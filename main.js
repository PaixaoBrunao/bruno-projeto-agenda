const form = document.getElementById('form-contatos');
let linhas = '';
const contatos = [];
const numeros = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td><button class="excluir" onclick="excluirContato('${inputNomeContato.value}')">Excluir</button></td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;  // Atualizar o conteúdo da tabela
}

function excluirContato(nome) {
    // Encontrar o índice do contato a ser removido
    const index = contatos.indexOf(nome);

    if (index > -1) {
        // Remover o contato e o número correspondente dos arrays
        contatos.splice(index, 1);
        numeros.splice(index, 1);

        // Reiniciar as linhas e reconstruir a tabela
        linhas = '';
        for (let i = 0; i < contatos.length; i++) {
            let linha = '<tr>';
            linha += `<td>${contatos[i]}</td>`;
            linha += `<td>${numeros[i]}</td>`;
            linha += `<td><button onclick="excluirContato('${contatos[i]}')">Excluir</button></td>`;
            linha += '</tr>';
            linhas += linha;
        }

        atualizaTabela();  // Atualizar a tabela para mostrar os contatos restantes
    }
}
