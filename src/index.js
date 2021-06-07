import cipher from './cipher.js';

console.log(cipher);

   /* let button = document.getElementById('botao');
    button.addEventListener('click', event => {
        event.preventDefault();
        let input = document.getElementById('des').value;
        console.log(input);
    })*/
    /*let input = document.getElementById('des');
    input.addEventListener("keypress",event => {
        input = (event.target.value);
    });
    */

    /*let string_tocifer = document.getElementById('msg_tocifer');
    string_tocifer.addEventListener("keypress",event => {
        string_tocifer = (event.target.value);
    });*/


    //let string_todecifer = document.getElementById('msg_todecifer').value;




    const btn = document.getElementById('to_cifer');
    function cifer(e){
        e.preventDefault();
        let input = document.getElementById('des').value;
        console.log(input);
        let string_tocifer = document.getElementById('msg_tocifer').value;
        console.log(string_tocifer);
        let textoCifrado = cipher.encode(3, "FRASE UM");
        console.log(textoCifrado);
        let caixaCifrada = document.getElementById('msg_cifered');
        caixaCifrada.innerHTML = textoCifrado;
    }

    btn.addEventListener("click", (e) => cifer(e));


//let textoCifrado = cipher.encode(3, "FRASE UM");
//console.log(textoCifrado);

//let caixaCifrada = document.getElementById('msg_cifered');
//caixaCifrada.innerHTML = textoCifrado;
