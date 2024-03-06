let areaIngresar;
let areaResultado;

diccionarioEncriptador = {
    "a": "enter",
    "e": "imes",
    "i": "ai",
    "o": "ober",
    "u": "ufat"
}

diccionarioDesencriptador = {
    "enter": "a",
    "imes": "e",
    "ai": "i",
    "ober": "o",
    "ufat": "u"
}

function encriptarTexto(){
    areaIngresar = document.getElementById("Ingreso");
    let textoIngresado = areaIngresar.value;
    let textoEncriptado = "";

    for(let i = 0; i < textoIngresado.length; i++){
        let caracter = textoIngresado[i];
        if(diccionarioEncriptador.hasOwnProperty(caracter)){
            textoEncriptado += diccionarioEncriptador[caracter];
        }else{
            textoEncriptado += caracter;
        }
    }

    document.getElementById("Resultado").value = textoEncriptado.toLowerCase();
    areaIngresar.value = "";
    verificarTexto(); // Llamada a la función verificarTexto() después de encriptar
}

function desencriptarTexto(){
    areaResultado = document.getElementById("Ingreso");
    let textoResultado = areaResultado.value;
    let textoDesencriptado = "";

    let i = 0;
    while (i < textoResultado.length) {
        let encontrado = false;
        for (let longitud = 5; longitud >= 1; longitud--) {
            let substr = textoResultado.substr(i, longitud);
            if (diccionarioDesencriptador.hasOwnProperty(substr)) {
                textoDesencriptado += diccionarioDesencriptador[substr];
                i += longitud;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            textoDesencriptado += textoResultado[i];
            i++;
        }
    }

    document.getElementById("Resultado").value = textoDesencriptado.toLowerCase();
    areaResultado.value = "";
    verificarTexto(); // Llamada a la función verificarTexto() después de desencriptar
}

function copiarTexto(){
    let areaResultado = document.getElementById("Resultado");

    areaResultado.select();

    try{
        document.execCommand("copy");
        console.log("Texto copiado");
    }catch (err){
        console.error("Error al copiar el texto: ", err)
    }

    areaResultado.value = "";
    verificarTexto();
}

function verificarTexto() {
    areaResultado = document.getElementById("Resultado");

    if (areaResultado.value.trim() === "") {
        areaResultado.style.backgroundImage = "url(/img/Muñeco.png)";
    } else {
        areaResultado.style.backgroundImage = "none";
    }
}

document.getElementById("Resultado").addEventListener("input", verificarTexto);

verificarTexto();