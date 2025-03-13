axios('pessoas.json')
  .then(resposta => carregarTabela(resposta.data))


function carregarTabela(json) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = ''; // Limpa antes de inserir novos dados

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${pessoa.nome}</td>
      <td>${pessoa.idade}</td>
      <td>${pessoa.email}</td>
      <td>${pessoa.empresa}</td>
      <td>${pessoa.cpf}</td>
    `;

    resultado.appendChild(tr);
  }
}
