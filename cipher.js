const cipher = {
    encode: function (offset, string) {
            let array = string.split("");
            let str = "";
            let offset_n = parseInt(offset);

            array.forEach(function (e) {
                let cifradaLetra = ""
                let indice = ""

                if (e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
                    indice = ((e.charCodeAt() - 65 + offset_n) % 26) + 65;
                }

                else if (e.charCodeAt() >= 97 && e.charCodeAt() <= 122) {
                    indice = ((e.charCodeAt() - 97 + offset_n) % 26) + 97;
                }

                else {
                    indice = e.charCodeAt();
                }
                cifradaLetra = String.fromCharCode(indice);
                str = str.concat(cifradaLetra);
            });
            return str;
        //return str;
    },

    decode: function (offset, string) {
            let array2 = string.split("");
            let str = "";
            let offset_n = parseInt(offset);

            array2.forEach(function (e) {
                let cifradaLetra2 = ""
                let indiceFinal = ""
                let indice = ""
                if (e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
                    indice = ((e.charCodeAt() - 65 - offset_n));

                    if (indice < 0) {
                        indiceFinal = ((26 - (indice * -1) % 26) % 26) + 65;
                    }

                    else {
                        indiceFinal = indice + 65;

                    }

                }
                else if (e.charCodeAt() >= 97 && e.charCodeAt() <= 122) {
                    indice = ((e.charCodeAt() - 97 - offset_n));

                    if (indice < 0) {
                        indiceFinal = ((26 - (indice * -1) % 26) % 26) + 97;
                    }

                    else {
                        indiceFinal = (indice % 26) + 97;

                    }

                }

                else {
                    indiceFinal = e.charCodeAt();
                }
                cifradaLetra2 = cifradaLetra2 + String.fromCharCode(indiceFinal);
                str = str.concat(cifradaLetra2);

            }); return str;  //fechamento do forEach   
    },  // fechamento do decode
};


export default cipher;