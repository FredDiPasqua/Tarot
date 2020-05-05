var textoPlegaria = "Por favor responde esta pregunta."
var plegaria = textoPlegaria + "                      ";

var arrayString = [...plegaria];

var inputpeticion = document.getElementById("peticion");
var outpeticion = document.getElementById("peticionsale");

inputpeticion.addEventListener("keyup", escribir);

var contador = 0;
var trigger = inputpeticion.value;
var trigger2 = trigger.substr(0, 1);


function escribir (event) {
    if (trigger2 == ".") {
        inputpeticion.style.color = "transparent";
        outpeticion.value = outpeticion.value + arrayString[contador];
        contador++;
        if (event.keyCode == 8) {
            var outp = outpeticion.value;
            var outpnum = outp.length - 2;
            var outp2 = outp.substr(0, outpnum);
            outpeticion.value = outp2;
            contador = contador -2;
        }
    }
    if (trigger2 != ".") {
        inputpeticion.style.color = "black";
    }
    trigger = inputpeticion.value;
    trigger2 = trigger.substr(0, 1);
}

var showMe = () => {document.getElementById("result").textContent = trigger.substr(1, trigger.length)};
document.getElementById("preguntarbtn").addEventListener("click", showMe);


