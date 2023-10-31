function IMC(peso, altura){
    let resultadoIMC = peso / altura * altura
    let calculo_del_imc = {
      peso: peso,
      altura: altura,
      imc: resultadoIMC
    }
    return calculo_del_imc
  }
  
  IMC(133, 1.90)
   console.table(IMC)