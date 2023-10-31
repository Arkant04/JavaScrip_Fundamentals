
let randomNumber = Math.floor(Math.random() * 10)
function parOimpar() {
    let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 48]
let impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]

   if (pares == randomNumber){
    console.log("El numero es par")
   } else {
    console.log("El numero no es par")
   }

   if (impares == randomNumber){
    console.log("El numero es impar")
   } else {
    console.log("El numero no es impar")
   }
   
}

parOimpar()



 
