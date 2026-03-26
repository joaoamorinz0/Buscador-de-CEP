// Pegar variaveis //
const input = document.getElementById("cepText")
const form = document.getElementById("formBtn")

//Função que roda ao apertar o botão//


async function buscarCep(event) {

    event.preventDefault();
    if (input.value.length < 8) {
    document.getElementById("erro").innerText = "O CEP precisa ter 8 dígitos."
    return;
}
else {
    document.getElementById("erro").innerText = '';
}
    const url = `https://viacep.com.br/ws/${input.value}/json/`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    if (dados.erro) {
    document.getElementById("erro").innerText = "Esse CEP não existe!"
    document.getElementById("cep").innerText = '';
    document.getElementById("logradouro").innerText = '';
    document.getElementById("bairro").innerText = '';
    document.getElementById("localidade").innerText = '';
    document.getElementById("uf").innerText = '';
    }
    else {
    document.getElementById("cep").innerText = dados.cep;
    document.getElementById("logradouro").innerText = dados.logradouro;
    document.getElementById("bairro").innerText =dados.bairro;
    document.getElementById("localidade").innerText = dados.localidade;
    document.getElementById("uf").innerText = dados.uf;
    }
}

form.addEventListener("submit", buscarCep);



