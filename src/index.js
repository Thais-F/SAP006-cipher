import cipher from './cipher.js';


//////Botão Cifrar:

const btn = document.getElementById('to_cifer');
function cifer(e) {
    e.preventDefault();
    let input = document.getElementById('des').value;
    if (input == 0 || input == null || input == "") {
        alert("O offset não pode estar vazio ou zerado!");
        throw Error("O offset não pode estar vazio ou zerado!");
    }
    else{
    let string_tocifer = document.getElementById('msg_tocifer').value;

    if (string_tocifer == "") {
        alert("Por favor, digite sua mensagem!");
        throw Error("Mensagem vazia!");
    }

    else{
    let textoCifrado = cipher.encode(input, string_tocifer);
    let caixaCifrada = document.getElementById('msg_cifered');
    caixaCifrada.innerHTML = textoCifrado;
}}}

/////Botão Decifrar:

btn.addEventListener("click", (e) => cifer(e));

const btn2 = document.getElementById('to_decifer');
function decifer(e) {
    e.preventDefault();
    let input = document.getElementById('des').value;

    if (input == 0 || input == null || input == "") {
        alert("O offset não pode estar vazio ou zerado!");
        throw Error("O offset não pode estar vazio ou zerado!");
    }

    else{
    let string_todecifer = document.getElementById('msg_todecifer').value;

    if (string_todecifer == "") {
        alert("Por favor, digite sua mensagem!");
        throw Error("Mensagem vazia!");
    }

    else{
    let textoDecifrado = cipher.decode(input, string_todecifer);
    let CaixaDecifrada = document.getElementById('msg_decifered');
    CaixaDecifrada.innerHTML = textoDecifrado;
}}}

btn2.addEventListener("click", (e) => decifer(e));