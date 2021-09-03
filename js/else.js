// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function (el) {
//   return el % 2;
// });

// console.log(result);

// Задача 8
// Написати програму яка отримає від користувача число (кількість хвилин)
//  і виведе на екран строку в форматі години і хвилини

// -------------------------------------------------------------------------------
// let userMinutes = prompt(
//   'Введите количество минут, которые нужно преобразить в формат "часы:минуты"'
// );

// hours = Math.floor(userMinutes / 60);
// minutes = userMinutes - hours * 60;

// s = hours < 10 ? `0${hours}` : `${hours}`;
// s += minutes < 10 ? `:0${minutes}` : `:${minutes}`;

// alert(`${userMinutes} минут в формате "часы:минуты" это - ${s}`);
// --------------------------------------------------------------------------------
// let elem = document.body.getElementsByTagName("p")[0].innerHTML;
// let i = 1;
// while (elem.length === 0 || elem !== "натисни на сусідній i") {
//   elem = document.body.getElementsByTagName("p")[i].innerHTML;
//   i += 1;
// }

// if (elem.length > 0) {
//   elem.onclick = function () {
//     ///code here to update total based on element id
//   };
// }

// console.log(elem, i - 1);
// console.log(document.body.getElementsByTagName("p")[0].innerHTML);
// console.log(document.body.getElementsByTagName("p")[1].innerHTML);
// console.log(document.body.getElementsByTagName("p")[2].innerHTML);

// --------------------------------------------------------------------------------
// console.log(
//   [...document.body.getElementsByTagName("p")]
//     .map((element) =>
//       element.innerHTML === "натисни на сусідній i" ? element : -1
//     )
//     .filter((value) => value !== -1)
// );

// const p = [...document.body.getElementsByTagName("p")]
//   .map((element) =>
//     element.innerHTML === "натисни на сусідній i" ? element : -1
//   )
//   .filter((value) => value !== -1);

// console.log(p[0]);
// if (p.length > 0) {
//   let el = [...document.body.getElementsByTagName("i")]
//     .map((element) =>
//       element.innerHTML === "На цей елемент треба натиснути" ? element : -1
//     )
//     .filter((value) => value !== -1)[0];

//   el.onclick = function () {
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
//   };

//   el.click();
// }

// --------------------------------------------------------------------------------
// cy.get("body").then((body) => {
//   if (body.find("p:contains(skype)").length > 0)
//     cy.get("p:contains(skype)").closest(".msg-menu-btn").click();
// });

// document.querySelectorAll("p").forEach((element) => {
//   if (element.innerText.includes("натисни на сусідній i")) {
//     console.log(element);
//     document.querySelectorAll("i").forEach((element) => {
//       if (element.innerText.includes("На цей елемент треба натиснути")) {
//         element.onclick = function () {
//           console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
//         };

//         element.click();
//       }
//     });
//   }
// });

// class Guest {
//   // Власні властивості класу розміщуємо в конструкторі
//   constructor(name, roomNumber) {
//     this._name = name;
//     this._roomNumber = roomNumber;
//   }

//   // Використовуємо геттери і сеттери для опису інтерфейсу доступу до властивостей
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const mango = new Guest("Mango", 26);

// // звернення до get і set не вимагає виклику - тобто без ()
// console.log(mango.name); // Mango

// mango.name = "Mango the Fluffy";
// console.log(mango.name); // Mango the Fluffy

// Задачи, что обещал
/*-----------------Задача №1------------------*/
//Теория
//Объекты могут быть использованы для построения различных структур данных.
//Часто встречающаяся структура – список (не путайте с массивом).
//Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
// const list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };
//Списки удобны тем, что они могут делиться частью своей структуры.
//Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее
//объявленную переменную. Это два независимых списка, при этом у них есть общая структура list,
//которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства
//как отдельный список из трёх элементов.
//Задание
//Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3]
// function arrayToList(params) {
//   let objectList = null;
//   params = params.reverse();
//   for (let i = 0; i < params.length; i += 1) {
//     const element = params[i];
//     objectList = { value: element, rest: objectList };
//   }
//   return objectList;
// }

// console.log(arrayToList([1, 2, 3, 8, 125, 22, 0]));

/*-----------------Задача №2------------------*/
//Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
//Но иногда полезно было бы сравнить объекты по содержимому.
//Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два
//одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их
//сравнивать рекурсивным вызовом deepEqual.Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому,
//используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение.
//Не забудьте об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.
//Решите задачу без использования метода JSON.stringify()
// function deepEqual(obj1, obj2) {
//   let res = obj1 === obj2;
//   if (res) {
//     return res;
//   }

//   if (
//     (typeof obj1 === typeof obj2) &
//     (typeof obj1 === "object") &
//     (obj1 !== null) &
//     (obj2 !== null)
//   ) {
//     for (const key in obj1) {
//       if (obj2.hasOwnProperty(key)) {
//         const element1 = obj1[key];
//         const element2 = obj2[key];
//         res = deepEqual(element1, element2);
//         return res;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
// }

// let obj = { here: { is: "an" }, object: 2 };
// console.log(obj, obj);
// console.log(deepEqual(obj, obj));
// // → true
// console.log("------------------------------------------------");
// console.log(obj, { here: 1, object: 2 });
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log("------------------------------------------------");
// console.log(obj, { here: { is: "an" }, object: 2 });
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// // → true

// function createArr(n) {
//   const res = [];
//   for (let i = 1; i <= n; i += 1) {
//     res.push(i);
//   }

//   return res;
// }

// console.log(createArr(8));

// ----------------------------------------------------------------------------------------------------
// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
// а вместо чисел, кратных пяти — слово «Buzz».Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
// function createArr1(n) {
//   for (let i = 1; i <= n; i += 1) {
//     s = "";
//     if (i % 3 === 0) {
//       s += "Fizz";
//     }
//     if (i % 5 === 0) {
//       s += "Buzz";
//     }

//     console.log(s ? s : i);
//   }
// }

// function createArr(n) {
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// let cnt = 1000;
// console.time();
// createArr1(cnt);
// console.timeEnd();

// console.time();
// createArr(cnt);
// console.timeEnd();

// function limitStr(str, n, symb) {
//   let res = str;
//   if (n && str.length > n) {
//     res = str.slice(0, n) + (symb ? symb : "...");
//   }
//   return res;
// }

// console.log(limitStr("dfgdfgdfgdfg"));
// console.log(limitStr("dfgdfgdfgdfg", 5));
// console.log(limitStr("dfgdfgdfgdfg", 5, "!"));
