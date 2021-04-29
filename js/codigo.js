

var numero = prompt("Escriba un número entero positivo");
    if (numero >= 0) {

        if(numero == 0){
            document.write('<center>Esta calculadora discrimina el 0 porque solo comienza desde la tabla del 1 :V<center>')
        }

        function multiplicacion() {
            for (let i = 1; i <= numero; i++) {

                document.write(`<div class='col-4 titulo'><h3>Tabla del: ${i}</h3>`);
                    for (let j = 1; j <= 10; j++) {
                        let operacion = i*j;
                        let mod = operacion % 2;
                        if (mod == 0) {
                            document.write(`<p class='par'>${i} X ${j} = ${operacion}  - Par</p>`);
                        } else {
                            document.write(`<p class='impar'>${i} X ${j} = ${operacion}  - Impar</p>`);
                        }
                    }
                document.write("</div>")
            }
        }
        multiplicacion();

    } else {
        alert(`" ${numero} ", no es un número positivo.`);
    }