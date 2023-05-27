const textArea = document.getElementById('textarea');
const messageResult = document.getElementById('message');


function btnCrypt () {
    const textoEncriptado = encriptar(textArea.value);
    messageResult.value = textoEncriptado;
    messageResult.innerHTML = textoEncriptado
    textArea.value = "";

function clearDiv () {
    var svg = document.getElementById('guy-svg').style.display = 'none'
    var title = document.getElementById('title').style.display = 'none'
    var subtitle = document.getElementById('subtitle').style.display = 'none'
    }
    clearDiv()
}



function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}


function btnDescrypt() {
    const textoDesencriptado = desencriptar(message.value)
    messageResult.value = textoDesencriptado
    messageResult.innerHTML = textoDesencriptado
    textArea.value = "";
}


function copyClipboard () {
    var copyText = document.getElementById('message')
    navigator.clipboard.writeText(message.innerHTML)
    alert("Texto Copiado: " + message.value)
}
