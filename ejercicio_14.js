/*function hallarMinimo(){
    let numeros1 = [21, 67, 89, 92, 99, 0.9, 13]
    let minimo = numeros1.find((numeros1) => numeros1 < 100)
    console.log(minimo)
}
hallarMinimo()

function hallarMaximo(){
    let numeros2 = [21, 67, 89, 92, 99, 0.9, 13]
    let maximo = numeros2.find((numeros2) => numeros2 > 0.9)
    console.log(maximo)
}
hallarMaximo()

function hallaMedia(){
    let numeros3 = [21, 67, 89, 92, 99, 0.9, 13]
    let media = numeros3.reduce((acumulador, numeros3) => acumulador / numeros3)
    console.log(media)
}

hallaMedia()*/

function hallarMediasMaximosMinimos(){
    let numeros1 = [21, 67, 89, 92, 99, 0.9, 13]
    let hallarMediasMaximosMinimos = {
       
     minimo :  minimo = numeros1.find((numeros1) => numeros1 < 100),
     maximo : numeros1.find((numeros1) => numeros1 > 0.9),
     media : numeros1.reduce((acumulador, numeros1) => acumulador / numeros1)
    }
    /*let numeros1 = [21, 67, 89, 92, 99, 0.9, 13]
    let minimo = numeros1.find((numeros1) => numeros1 < 100)
    let maximo = numeros1.find((numeros1) => numeros1 > 0.9)
    let media = numeros1.reduce((acumulador, numeros1) => acumulador / numeros1)*/
    return hallarMediasMaximosMinimos
    
}
let maximosMinimoMedias = hallarMediasMaximosMinimos()
console.table(maximosMinimoMedias)

/*function IMC(peso, altura){
    let resultadoIMC = peso / altura * altura
    let calculo_del_imc = {
      peso: peso,
      altura: altura,
      imc: resultadoIMC
    }
    return calculo_del_imc;
  }
  
   let IMC_de_una_persona = IMC(133, 1.90)
   console.table(IMC_de_una_persona)*/