function sumaDeMuchosNumeros(){
    let numerosQueSeSuman = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    let suma = numerosQueSeSuman.reduce((acumulador, numerosQueSeSuman) => acumulador + numerosQueSeSuman)
    console.log(suma)
}
sumaDeMuchosNumeros()
