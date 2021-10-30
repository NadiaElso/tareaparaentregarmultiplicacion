let tabla: string = document.getElementById("tabla");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
let contador:number;
contador=1;
  let resultado: number;
  resultado = 0;
  tabla=String.tabla.value;
  
  function tabladel(numerodetabla: number) {
    for (let contador = 1; contador <= 9; contador++) {
      resultado = contador * numerodetabla;
      console.log(resultado);
    }
  }
if (
  tabla.value === a ||
  tabla.value === b ||
  tabla.value === c ||
  tabla.value === d
) {
  tabladel(9);
  console.log(tabladel);
} else {
  console.log("Ingrese a,b,c o d");
}
 }
