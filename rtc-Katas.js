// 1.1 
let myFavoriteHero = "Hulk";

// 1.2
let x = 50;

// 1.3
let h = 5;
let y = 10;

// 1.4
let z = h + y;

// 1.1
character.age = 25;

// 1.2
let firstName = "Jon";
let lastName = "Snow";
let age = 24;

console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);

// 1.3
console.log(toy1.price + toy2.price);

// 1.4
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

// 1.1
console.log(10 * 5);

// 1.2
console.log(10 / 2);

// 1.3
console.log(15 % 9);

// 1.4
let p = 10;
let j = 5;

let o = p + j;

// 1.5
let c = 10;
let m = 5;

let i = c * m;

// 1.1
console.log(avengers[0]);

// 1.2
avengers[0] = "IRONMAN"

// 1.3
console.log(avengers.length);

// 1.4
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// 1.5
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// 1.6
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// 1.1
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 1.2
for (let i = 0; i < 9; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 1.3
for (let i = 0; i < 10; i++) {
    console.log("Intentando dormir 🐑");
    
    if (i === 9) {
        console.log("Dormido!");
    }
}

function sum(numberOne , numberTwo) {
    return Math.max(numberOne, numberTwo)
}

console.log(sum(4, 2));

function findLongestWord(param) {
  let longestWord = param[0];

  for (let i = 1; i < param.length; i++) {
    const element = param[i];

    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }

  return longestWord;
}

findLongestWord(avengers)

function sumAll(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    sum += element;
  }

  return sum;
}

sumAll(numbers);

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    sum += element;
  }

  return sum / param.length;
}

average(numbers);

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    const element = param[i];

    if (typeof element === "string") {
      sum += element.length;
    } else {
      sum += element;
    }
  }

  return sum / param.length
}

averageWord(mixedElements);

function removeDuplicates(param) {
  
    for (let i = 0; i < param.length; i++) {
        const primerPuntero = param[i]
        
        for (let j = i + 1; j < param.length; j++) {
            const segundoPuntero = param[j];
            
            if (primerPuntero === segundoPuntero) {
                param.splice(j, 1);
                j--;
            }
        }
    }

    console.log(param);

}

removeDuplicates(duplicates)

function finderName(array, element) {
if (array.includes(element)) {
    return `${true}, posicion: ${array.indexOf(element)}`
    } else {
        return false;
    }
}

console.log(finderName(nameFinder, "Steve"))

function repeatCounter(array) {
const count = {}
for (let i = 0; i < array.length; i++) {
    
    if(count[array[i]] >= 1) {
        count[array[i]]++;
    } else {
        count[array[i]] = 1;
    }
    
}

console.log(count);
}

repeatCounter(counterWords)

for (const product of products) {
    if (product.includes("Camiseta")) {
        console.log(product);
    }
}

for (const place of placesToTravel) {
    console.log(place);
}

for (const key in alien) {
    console.log(alien[key]);
}

for (let i = 0; i < placesToTravel.length; i++) {
    
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
        i--;
    }
    
}

console.log(placesToTravel);

for (let i = 0; i < toys.length; i++) {
    
    if (toys[i].name.includes("gato")) {
        toys.splice(i, 1),
        i--;
    }
    
}

for (const toy of toys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

  const mayores = [];
  const menores = [];

  for (const user of users) {
    if(user.years < 18) {
        menores.push(user);
    }
    if(user.years >= 18) {
        mayores.push(user);
    }
  }

  console.log("Usuarios menores de edad:", menores);
  console.log("Usuarios mayores de edad:", mayores);

  for (let i = 0; i < foodSchedule.length; i++) {
    
    if (foodSchedule[i].isVegan === false) {
        foodSchedule[i].name = fruits.splice(0, 1)[0];
        foodSchedule[i].isVegan = true;
    }
    
}

console.log(foodSchedule);

const shortMovies = [];
const mediumMovies = [];
const longMovies = [];

for (let i = 0; i < movies.length; i++) {
    
    if (movies[i].durationInMinutes < 100) {
        shortMovies.push(movies[i]);
    } else if (movies[i].durationInMinutes > 200) {
        longMovies.push(movies[i]);
    } else {
        mediumMovies.push(movies[i]);
    }
    
}

console.log(shortMovies);
console.log(mediumMovies);
console.log(longMovies);

  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    
    sum += products[i].sellCount;
    
  }

  console.log(sum);

    let sum = 0;

  for (const product of products) {
    sum += product.sellCount;
  }

  console.log(sum / products.length);

for (const product of products) {
    if (product.sellCount > 20) {
        goodProducts.push(product)
    } else {
        badProducts.push(product)
    }
}

console.log(goodProducts);
console.log(badProducts);