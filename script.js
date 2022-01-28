
//var form = document.querySelector("")
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopy = document.querySelector("#btn-copy");
var datosValidos = false;
var fraseEncrip = "";
fraseDesencrip = "";

function encriptar(){ 
    fraseEncrip = "";
    var frase = document.querySelector("#input-texto").value;

    validarDatos(frase);
    if( datosValidos ){


        for (var i = 0; i < frase.length; i++) {

            if(frase[i] != "e" && frase[i] != "i" && frase[i] != "a" && frase[i] != "o" && frase[i] != "u"){
                fraseEncrip += frase[i];
            }

            if (frase[i] === "e"){
                fraseEncrip += "enter";
            }
            if (frase[i] === "i"){
                fraseEncrip += "imes";
            }
            if (frase[i] === "a"){
                fraseEncrip += "ai";
            }
            if (frase[i] === "o"){
                fraseEncrip += "ober";
            }
            if (frase[i] === "u"){
                fraseEncrip += "ufat";
            }

        }
    }else{
        resetear();
    }

    mostrarMensaje(fraseEncrip);

}

function desencriptar(){ 
    fraseDesencrip = "";
    var frase = document.querySelector("#input-texto").value;

    validarDatos(frase);
    if( datosValidos ){
        for (var i = 0; i < frase.length; i++) {

            if(frase[i] != "e" && frase[i] != "i" && frase[i] != "a" && frase[i] != "o" && frase[i] != "u"){
                fraseDesencrip += frase[i];
            }

            if (frase[i] === "e"){
                fraseDesencrip += "e";
                i += 3;

            }
            if (frase[i] === "i"){
                fraseDesencrip += "i";
                i += 3;

            }
            if (frase[i] === "a"){
                fraseDesencrip += "a";
                i += 1;

            }
            if (frase[i] === "o"){
                fraseDesencrip += "o";
                i += 3;

            }
            if (frase[i] === "u"){
                fraseDesencrip += "u";
                i += 3;
            }

        }
    }else{
        resetear();
    }

    mostrarMensaje(fraseDesencrip);
}

function validarDatos(frase){
    for (var i = 0; i < frase.length; i++) {
        if( frase[i].match(/^[a-z]*$/)){
            datosValidos = true;
        }else{
            datosValidos = false;
        }        
    }
}

function resetear(){
    alert ("Los datos no son validos");
    document.querySelector("#input-texto").value = "";
    document.querySelector("#input-texto").focus();
}

function mostrarMensaje(mensaje){
    document.querySelector("#msg").value = mensaje;

}

function copiarResultado(){
    var resultado = document.querySelector("#msg").value;

    navigator.clipboard.writeText(resultado);
    alert("Mensaje Copiado");
}

document.querySelector("#input-texto").focus();


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopy.onclick = copiarResultado;

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/