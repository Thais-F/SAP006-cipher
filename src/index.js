import cipher from './cipher.js';

console.log(cipher);

const btn = document.getElementById('to_cifer');
function cifer(e) {
    e.preventDefault();
    let input = document.getElementById('des').value;
    //console.log(input);
    let string_tocifer = document.getElementById('msg_tocifer').value;
    //console.log(string_tocifer);
    let textoCifrado = cipher.encode(input, string_tocifer);
    console.log(textoCifrado);
    let caixaCifrada = document.getElementById('msg_cifered');
    caixaCifrada.innerHTML = textoCifrado;
}

btn.addEventListener("click", (e) => cifer(e));

const btn2 = document.getElementById('to_decifer');
function decifer(e) {
    e.preventDefault();
    let input = document.getElementById('des').value;
    //console.log(input);
    let string_todecifer = document.getElementById('msg_todecifer').value;
    //console.log(string_todecifer);
    let textoDecifrado = cipher.decode(input, string_todecifer);
    console.log(textoDecifrado);
    let CaixaDecifrada = document.getElementById('msg_decifered');
    CaixaDecifrada.innerHTML = textoDecifrado;
}

btn2.addEventListener("click", (e) => decifer(e));

/////////Botão de limpar dados do formulário:

const btn_atualizar = document.getElementById('limpar');

function limpar(e) {
   
    document.getElementsByClassName("main").reset(e);
    
}
btn_atualizar.addEventListener("click", (e) => limpar(e));