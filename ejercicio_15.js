function parOimpar() {
    var randomNumber = Math.floor(Math.random() * 10)
    

   if (randomNumber % 2 == 0){
    return console.log(`El numero ${randomNumber} es par`);
   } else {
    return console.log(`El numero ${randomNumber} no es par`);
   }

   if (randomNumber % 2 !== 0){
     return console.log(`El numero ${randomNumber} es impar`);
   } else {
     return console.log(`El numero ${randomNumber} no es impar`);
   }
   
}

parOimpar()





 
