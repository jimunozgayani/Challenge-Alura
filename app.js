const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const matriz_code2 = [
    ["ufat", "u"],
    ["ober", "o"],
    ["ai", "a"],
    ["imes", "i"],
    ["enter", "e"],
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function btnDesencriptar() {
    const texto2 = desencriptar(campo_texto.value);
    campo_mensaje.value = texto2;
}

function encriptar(fraseencriptada){
    fraseencriptada = fraseencriptada.toLowerCase()
    for (let i = 0; i < matriz_code.length; i++){
             if (fraseencriptada.includes(matriz_code[i][0])) {
                    fraseencriptada = fraseencriptada.replaceAll(
                    matriz_code[i][0],
                    matriz_code[i][1]
                );
            };
    };
    return fraseencriptada; 
}

function desencriptar(frasedesencriptada){
    frasedesencriptada = frasedesencriptada.toLowerCase()
    for (let i = 0; i < matriz_code2.length; i++){
             if (frasedesencriptada.includes(matriz_code2[i][0])) {
                    frasedesencriptada = frasedesencriptada.replaceAll(
                    matriz_code2[i][0],
                    matriz_code2[i][1]
                );
            };
    };
    return frasedesencriptada;
}
  

function limpiarCajaDos(){
    campo_mensaje.value = "";
}


function copiarAlPortapapeles() {
        campo_mensaje.select()
        campo_mensaje.setSelectionRange(0,9999999);

        navigator.clipboard.writeText(campo_mensaje.value);
        limpiarCajaDos();
}





