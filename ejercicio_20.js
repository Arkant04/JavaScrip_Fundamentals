
let cadena = "“It is said that your life flashes before your eyes just before you die. That is true, it’s called life.”";
function cuentaCuantasVecesSeDiceLife(string) {
  let contar_life = 0
  const frase = cadena.split(" ")
  for (var i = 0; i < string.length; i++) {
    console.log(string[i])
    if (frase[i] === "life") {
      contar_life++
    }
  }
  console.log(contar_life)
  return [contar_life]
}
const cuantas_veces_se_repite_life = cuentaCuantasVecesSeDiceLife(cadena)
console.log(cuantas_veces_se_repite_life)