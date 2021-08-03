// 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach((orderedItem, index) => {
//     totalPrice += orderedItems[index];
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// 2
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach((number, index) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// 3
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // [].

// 4
// Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // 500.
// console.log(calculateTotalPrice(8, 60)); // 480.
// console.log(calculateTotalPrice(3, 400)); // 1200.

// 5
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки

// 6
// // Пиши код ниже этой строки

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };
// // Пиши код выше этой строки

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138.
// console.log(calculateTotalPrice([164, 48, 291])); // 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116.

// 7
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// 8
// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // [].

// 9
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const res = [...numbers];
//   for (let i = 0; i < res.length; i += 1) {
//     if (res[i] % 2 === 0) {
//       res[i] += value;
//     }
//   }
//   return res;
//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5].
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16].
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142].
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154].

// 10
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((element) => element.length);

// console.log(planetsLengths);

// 11
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((element) => element.title);
// console.log("titles", titles);

// 12
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((element) => element.genres);
// console.log("genres", genres);
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// 13
// // Пиши код ниже этой строки
// const getUserNames = (users) => users.map((userObj) => userObj.name);
// // Пиши код выше этой строки

// console.log(getUserNames(users));
// // ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony'].

// 14
// // Пиши код ниже этой строки
// const getUserEmails = (users) => users.map((userObj) => userObj.email);
// // Пиши код выше этой строки
// console.log(getUserEmails(users));

// 15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((value) => value % 2 === 0);
// const oddNumbers = numbers.filter((value) => value % 2 !== 0);
// console.log("evenNumbers", evenNumbers); // [24, 82, 36, 18, 52]
// console.log("oddNumbers", oddNumbers); // [17, 61, 47, 73]

// 16
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((element) => element.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log("allGenres = ", allGenres);
// console.log("uniqueGenres = ", uniqueGenres);

// 17
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((bookObj) => bookObj.rating > MIN_RATING);
// const booksByAuthor = books.filter((bookObj) => bookObj.author === AUTHOR);

// console.log("topRatedBooks", topRatedBooks);
// console.log("booksByAuthor", booksByAuthor);

// 18
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) =>
//   users.filter((userObj) => userObj.eyeColor === color);
// // Пиши код выше этой строки
// console.log(`~ getUsersWithEyeColor`, getUsersWithEyeColor(users, "blue")); // Moore Hensley, Sharlene Bush и Carey Barr

// 19
// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age > minAge && user.age < maxAge);
// // Пиши код выше этой строки

// console.log(`~ getUsersWithAge`, getUsersWithAge(users, 20, 30)); // массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr
// console.log(`~ getUsersWithAge`, getUsersWithAge(users, 30, 40)); // массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// console.log(`~ getUsersWithAge`, getUsersWithAge(users, 80, 100)); // []

// 20
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));
// // Пиши код выше этой строки

// console.log(getUsersWithFriend(users, "Briana Decker")); // Sharlene Bush и Sheree Anthony

// 21
// // Пиши код ниже этой строки
// const getFriends = (users) =>
//   users
//     .flatMap((userObj) => userObj.friends)
//     .filter((user, index, array) => array.indexOf(user) === index);
// // Пиши код выше этой строки
// console.log(`~ getFriends`, getFriends(users));

// 22
// // Пиши код ниже этой строки
// const getActiveUsers = (users) => users.filter((user) => user.isActive);
// // Пиши код выше этой строки
// console.log(`~ getActiveUsers`, getActiveUsers(users));

// 23
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
// // Пиши код выше этой строки

// console.log(`~ getInactiveUsers`, getInactiveUsers(users));

// 24
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((element) => element.title === BOOK_TITLE);
// const bookByAuthor = books.find((element) => element.author === AUTHOR);
// console.log(`~ bookWithTitle`, bookWithTitle);
// console.log(`~ bookByAuthor`, bookByAuthor);

// 25
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) =>
//   users.find((element) => element.email === email);
// // Пиши код выше этой строки
// console.log(
//   `~ getUserWithEmail`,
//   getUserWithEmail(users, "shereeanthony@kog.com")
// ); // Sheree Anthony
// console.log(
//   `~ getUserWithEmail`,
//   getUserWithEmail(users, "elmahead@omatom.com")
// ); // Elma Head
// console.log(
//   `~ getUserWithEmail`,
//   getUserWithEmail(users, "blackburndotson@furnigeer.com")
// ); // Blackburn Dotson

// 26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// console.log(`~ eachElementInFirstIsEven`, eachElementInFirstIsEven); // true
// console.log(`~ eachElementInFirstIsOdd`, eachElementInFirstIsOdd); // false
// console.log(`~ eachElementInSecondIsEven`, eachElementInSecondIsEven); // false
// console.log(`~ eachElementInSecondIsOdd`, eachElementInSecondIsOdd); // true
// console.log(`~ eachElementInThirdIsEven`, eachElementInThirdIsEven); // false
// console.log(`~ eachElementInThirdIsOdd`, eachElementInThirdIsOdd); // false

// 27
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => users.every((user) => user.isActive);

// // Пиши код выше этой строки
// console.log(`~ isEveryUserActive`, isEveryUserActive(users));

// 28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// console.log(`~ anyElementInFirstIsEven`, anyElementInFirstIsEven); // true
// console.log(`~ anyElementInFirstIsOdd`, anyElementInFirstIsOdd); // false
// console.log(`~ anyElementInSecondIsEven`, anyElementInSecondIsEven); // false
// console.log(`~ anyElementInSecondIsOdd`, anyElementInSecondIsOdd); // true
// console.log(`~ anyElementInThirdIsEven`, anyElementInThirdIsEven); // true
// console.log(`~ anyElementInThirdIsOdd`, anyElementInThirdIsOdd); // true

// 29
// // Пиши код ниже этой строки
// const isAnyUserActive = (users) => users.some((user) => user.isActive);
// // Пиши код выше этой строки
// console.log(`~ isAnyUserActive`, isAnyUserActive(users));

// 30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((summ, value) => summ + value, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(`~ totalPlayTime`, totalPlayTime);
// console.log(`~ averagePlayTime`, averagePlayTime);

// 31
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, user) => total + user.playtime / user.gamesPlayed,
//   0
// );
// console.log(`~ totalAveragePlaytimePerGame`, totalAveragePlaytimePerGame);

// 32
// // Пиши код ниже этой строки
// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => total + user.balance, 0);

// console.log(`~ calculateTotalBalance`, calculateTotalBalance(users));

// 33
// // Пиши код ниже этой строки
// const getTotalFriendCount = (users) =>
//   users.reduce((total, user) => total + user.friends.length, 0);
// // Пиши код выше этой строки
// console.log(`~ getTotalFriendCount`, getTotalFriendCount(users));

// 34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(`~ ascendingReleaseDates`, ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]

// const alphabeticalAuthors = [...authors].sort();
// console.log(`~ alphabeticalAuthors`, alphabeticalAuthors); // ['Бернард Корнуэлл', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский']

// 35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((fEl, sEl) => fEl - sEl);

// const descendingReleaseDates = [...releaseDates].sort((fEl, sEl) => sEl - fEl);
// console.log(`~ ascendingReleaseDates`, ascendingReleaseDates);
// console.log(`~ descendingReleaseDates`, descendingReleaseDates);

// 36
// // Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так,
// // чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder
// // копия отсортированная в обратном алфавитном порядке.

// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
//   "Говард Лавкрафт",
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((fEl, sEl) =>
//   fEl.localeCompare(sEl)
// );

// const authorsInReversedOrder = [...authors].sort((fEl, sEl) =>
//   sEl.localeCompare(fEl)
// );

// console.log(`~ authorsInAlphabetOrder`, authorsInAlphabetOrder);
// console.log(`~ authorsInReversedOrder`, authorsInReversedOrder);

// 37
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((fEl, sEl) =>
//   fEl.author.localeCompare(sEl.author)
// );

// const sortedByReversedAuthorName = [...books].sort((fEl, sEl) =>
//   sEl.author.localeCompare(fEl.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (fEl, sEl) => fEl.rating - sEl.rating
// );
// const sortedByDescentingRating = [...books].sort(
//   (fEl, sEl) => sEl.rating - fEl.rating
// );

// console.log(`~ sortedByAuthorName`, sortedByAuthorName);
// console.log(`~ sortedByReversedAuthorName`, sortedByReversedAuthorName);
// console.log(`~ sortedByAscendingRating`, sortedByAscendingRating);
// console.log(`~ sortedByDescentingRating`, sortedByDescentingRating);

// 38
// // Пиши код ниже этой строки
// const sortByAscendingBalance = (users) =>
//   [...users].sort((us1, us2) => us1.balance - us2.balance);
// // Пиши код выше этой строки
// console.log(`~ sortByAscendingBalance`, sortByAscendingBalance(users));
// console.log(`~ users`, users);

// 39
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((us1, us2) => us2.friends.length - us1.friends.length);
// // Пиши код выше этой строки
// console.log(
//   `~ sortByDescendingFriendCount`,
//   sortByDescendingFriendCount(users)
// );
// console.log(`~ users`, users);

// 40
// // Пиши код ниже этой строки
// const sortByName = (users) =>
//   [...users].sort((fEl, sEl) => fEl.name.localeCompare(sEl.name));
// // Пиши код выше этой строки
// console.log(`~ sortByName`, sortByName(users));

// 41
// // Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .filter((bookObj) => bookObj.rating > MIN_BOOK_RATING)
//   .sort((fEl, sEl) => fEl.author.localeCompare(sEl.author))
//   .map((element) => element.author);
// // const topRatedBooks = books.filter((bookObj) => bookObj.rating > MIN_RATING);

// console.log(`~ names`, names);

users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
// 42
// // Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей
// // отсортированный по возрастанию количества их друзей(свойство friends).
// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((fEl, sEl) => fEl.friends.length - sEl.friends.length)
//     .map((element) => element.name);
// // Пиши код выше этой строки
// console.log(
//   `~ getNamesSortedByFriendCount`,
//   getNamesSortedByFriendCount(users)
// ); // ['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']

// console.log(users);

// 43
// // Пиши код ниже этой строки
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((userObj) => userObj.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((fEl, sEl) => fEl.localeCompare(sEl));
// // Пиши код выше этой строки
// console.log(`~ getSortedFriends`, getSortedFriends(users));

// 44
// // Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance),
// // пол которых(свойство gender) совпадает со значением параметра gender.

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((bookObj) => bookObj.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);

// // Пиши код выше этой строки
// console.log(
//   `~ getTotalBalanceByGender`,
//   getTotalBalanceByGender(users, "male")
// ); // 12053
// console.log(
//   `~ getTotalBalanceByGender`,
//   getTotalBalanceByGender(users, "female")
// ); // 8863
