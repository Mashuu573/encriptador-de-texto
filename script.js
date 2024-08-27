const textArea = document.querySelector(".texto_entrada");
const mensaje = document.querySelector(".texto_salida");
const imagen = document.getElementById("imagen_a_ocultar");
const texto = document.getElementById("texto_a_ocultar");
const btnCopiar = document.getElementById("btn-copiar");
const regex = /^[a-zA-Z\s]*$/;
const texto_invalido = ("No se permiten caracteres especiales ni números.");
function btn_Encriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    if (imagen) {
        imagen.remove();
    }
    if (texto) {
        texto.remove();
    }
    btnCopiar.classList.add("margin-especifico");
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo);
    
    stringEncriptada = stringEncriptada.toLowerCase();
    
    if (!regex.test(stringEncriptada)) {
        return texto_invalido
    }

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo);
    stringDesencriptada = stringDesencriptada.toLowerCase();

    if (!regex.test(stringEncriptada)) {
        return texto_invalido
    }

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btn_Desencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    if (imagen) {
        imagen.remove();
    }
    if (texto) {
        texto.remove();
    }

    btnCopiar.classList.add("margin-especifico");
}

function copiarAlPortapapeles() {
    const textoACopiar = mensaje.value;
    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
