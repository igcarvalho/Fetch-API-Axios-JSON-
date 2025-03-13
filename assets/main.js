fetch ('pessoas.json')
.then(response => response.json())
.then(json => carregarTabela(json));






