const cipher = {
    encode: function(offset, string){
    
    let array = string.split("");
    let str = "";

    array.forEach(function (e){

    let indice2 = ((e.charCodeAt() - 65 + offset) % 26) + 65;
    let cifradaLetra = String.fromCharCode(indice2);
    str = str.concat(cifradaLetra); 
    }); return str;
    },
  
    decode: function(offset, string){

    }};

  
export default cipher;