function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
   return message.split(' ').length * pricePerWord;
   // Change code above this line
}

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join(delimeter);
  // Change code above this line
  return string;
}

function slugify(title) {
  // Change code below this line

   slug = title.toLowerCase().split(' ').join('-');
  return slug;

  // Change code above this line
}

11
// console.log("JavaScript is in my blood", calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log("JavaScript is in my blood", calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log("Web-development is creative work",calculateEngravingPrice("Web-development is creative work", 40));
// console.log("Web-development is creative work",calculateEngravingPrice("Web-development is creative work", 20));

// 12
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// 13
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//    let newArray = firstArray.concat(secondArray);
   
//    if (newArray.length > maxLength) {
//       newArray = newArray.slice(0, maxLength);
//    }

//    return newArray;

//     // Change code above this line
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // возвращает ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // возвращает ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // возвращает ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));// возвращает ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // возвращает []

// 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (const item of order) {
//    total += item;
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116

// 21
// function findLongestWord(string) {
//   // Change code below this line

//    let maxWord = '';
//    for (const item of string.split(' ')) {
//       if (maxWord === '') {
//          maxWord = item;
//          continue;
//       }

//       if (maxWord.length < item.length) {
//          maxWord = item;
//       }
//    }
//    return maxWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // возвращает jumped
// console.log(findLongestWord("Google do a roll")); // возвращает Google
// console.log(findLongestWord("May the force be with you")); // возвращает force

// 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1){
//      numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); // возвращает [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // возвращает [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // возвращает [29, 30, 31, 32, 33, 34]

// 23
// function filterArray(numbers, value) {
//    // Change code below this line
//    const res = [];
//    for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) { 
//         res.push(numbers[i]);
//       }
//    }
//    return res;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]


// 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//    const res = [];
//    for (const item of array1) {
//       if (array2.includes(item)) {
//          res.push(item);
//       }
//    }
//    return res;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает []

// 28
// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// 29
// function getEvenNumbers(start, end) {
//    // Change code below this line
//    const res = [];
//    for (let i = start; i <= end; i += 1) {
//       if (i % 2 === 0) {
//          res.push(i);
//       }
//    }
//    return res;

//     // Change code above this line
//  }
   
// console.log(getEvenNumbers(2, 5)); // возвращает [2, 4]
// console.log(getEvenNumbers(3, 11)); // возвращает [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // возвращает [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // возвращает [8]
// console.log(getEvenNumbers(7, 7)); // возвращает []

// 32
// function includes(array, value) {
//   // Change code below this line
//    for (const item of array) {
//       if (item === value) {
//          return true;
//       }
//    }

//    return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); // возвращает true
// console.log(includes([1, 2, 3, 4, 5], 17)); // возвращает false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // возвращает true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // возвращает false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // возвращает true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // возвращает false