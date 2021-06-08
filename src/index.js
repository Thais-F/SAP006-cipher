import cipher from './cipher.js';

console.log(cipher);




    //let string_todecifer = document.getElementById('msg_todecifer').value;




    const btn = document.getElementById('to_cifer');
    function cifer(e){
        e.preventDefault();
        let input = document.getElementById('des').value;
        console.log(input);
        let string_tocifer = document.getElementById('msg_tocifer').value;
        console.log(string_tocifer);
        let textoCifrado = cipher.encode(input, string_tocifer);
        console.log(textoCifrado);
        let caixaCifrada = document.getElementById('msg_cifered');
        caixaCifrada.innerHTML = textoCifrado;
    }

    btn.addEventListener("click", (e) => cifer(e));
