let numAleatorio = 0;
const formulario = document.getElementById("form");
const cont = document.getElementById("cont");
let bandera = false;
formulario.addEventListener("submit", adivinar);

function aleatorio() {
  if (bandera === false) {
    numAleatorio = Math.floor(Math.random() * (20 - 1) + 1);
    console.log(numAleatorio);
    bandera = true;
    cont.innerHTML = "";
    return numAleatorio;
  } else {
    alert("Adivina el numero");
  }
}
console.log(aleatorio());
function numIngresado(numero) {
  cont.innerHTML += `
    <div class=" border border-danger rounded-2 col-4 col-md-2 col-lg-1">
    ${numero} 
  </div>`;
}

function adivinar(e) {
  e.preventDefault();
  console.log("desde adivinar");
  let input = document.getElementById("num");

  if (parseInt(input.value) >= 1 && parseInt(input.value) <= 50) {
    if (parseInt(input.value) === numAleatorio) {
      bandera = false;
      cont.innerHTML = `
            <div class=" text-center">
            <h1 class="text-danger">Ganaste :v <br> el numero era: ${numAleatorio}</h1>
            
                <p class="m-0 pb-1 lead">pulsa "Comenzar el juego" para volver a jugar</p>
            </div>`;
    } else if (parseInt(input.value) < numAleatorio) {
      alert(`El numero es mayor a: ${input.value}`);
      numIngresado(input.value);
    } else {
      alert(`El numero es menor a: ${input.value}`);
      numIngresado(input.value);
    }
  } else {
    alert("Ingresa un numero entre 1 y 20");
  }
  form.reset();
}
