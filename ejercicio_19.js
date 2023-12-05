const cadena = "ghghghghghghghghghghghghhhhhghghghhhhgggghhhggggg";

function cuentaCosas(string) {
  console.log(string)
  let contar_g = 0
  let contar_h = 0
  for (var i = 0; i < string.length; i++) {
    console.log(string[i])
    if (string[i] === "g") {
        contar_g++
    } else  {
        contar_h++
    }
  }
  console.log(contar_g, contar_h)
  return [contar_g, contar_h]
}
const cuantas_cosas_hay = cuentaCosas(cadena)
console.log(cuantas_cosas_hay)
