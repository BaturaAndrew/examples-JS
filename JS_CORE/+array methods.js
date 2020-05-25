let array = [5, 5, 5];
let length = 0;
let element = 0;

// BASE METHODS
length = array.push(1); // add to the end
console.log(`PUSH method:  new length: ${length} Array: ${array}\n`);
length = array.unshift(2); // add to he head
console.log(`UNSHIFT method: new length: ${length} Array: ${array}\n`);
element = array.pop(); // delete the last elem
console.log(`POP method: new elem: ${element} Array: ${array}\n`);
element = array.shift(); // delete the first elem
console.log(`SHIFT method: new elem: ${element} Array: ${array}\n`);

// FILL isArray

// METHOD SPLICE CHANGE ARRAY
array = [];
array.push(1, 2, 3, 4, 5, 6);
console.log(`Array: ${array}`);
let startPosition = 2;
let endPosition = 4;
const count = 2;
const addedElem = 99;
let deletedElements = array.splice(startPosition, count);
console.log(
  `SPLICE method: deleted elements: ${deletedElements} Array: ${array}\n`
);

array = [1, 2, 3, 4, 5, 6];
console.log(`Array: ${array}`);
deletedElements = array.splice(startPosition); // DELETE ALL ELEMENTS AFTER startPosition
console.log(
  `SPLICE method: deleted elements: ${deletedElements} Array: ${array}\n`
);

array = [1, 2, 3, 4, 5, 6];
console.log(`Array: ${array}`);
deletedElements = array.splice(-2, 1); // DELETE FROM THE END
console.log(
  `SPLICE method: deleted elements: ${deletedElements} Array: ${array}\n`
);

// METHOD SLICE DON'T CHANGE ARRAY
array = [1, 2, 3, 4, 5, 6];
console.log(`Array: ${array}`);
startPosition = 2;
endPosition = 4;
let newArray = array.slice(startPosition, endPosition);
console.log(`SLICE method: New array: ${newArray} Array: ${array}\n`);
newArray = array.slice(); // COPY ARRAY
console.log(`SLICE method:  New array: ${newArray} Array: ${array}\n`);

// METHOD CONCAT DON'T CHANGE ARRAY
newArray = array.concat(9, 9, 9);
console.log(`CONCAT method:  New array: ${newArray} Array: ${array}\n`);

// INDEXOF
let index = 0;
index = array.indexOf(5);
console.log(`INDEXOF method: index: ${index} Array: ${array}\n`);

// FIND
element = array.find(el => el == 5);
console.log(`FIND method: elem: ${element} Array: ${array}\n`);

// FILTER
newArray = array.filter(el => !(el % 2));
console.log(`FILTER method: New Array: ${newArray} Array: ${array}\n`);

// SORT CHANGE ARRAY
array = [5, 3, 62, 1, 65, 0, 21];
const sortedArray = array.sort((a, b) => a - b);
console.log(`SORT method: Sorted Array: ${sortedArray} Array: ${array}\n`);

// REVERSE SPLIT JOIN
const reversedArray = array.reverse();
console.log(
  `REVERSE method: Reversed Array: ${reversedArray} Array: ${array}\n`
);

// SPLIT
const str = 'aple;banana;rice;milk;tea;pineapple';
array = str.split(';');
console.log(`SPLIT method: Array: ${array}\n`);
array.sort((a, b) => a > b);
console.log(`SPLIT method: Array: ${array}\n`);

// JOIN
let strFromArray = '';
strFromArray = array.join('+');
console.log(`JOIN method: STR: ${strFromArray}\n`);

// Шпаргалка по методам массива:

// Для добавления / удаления элементов:
// push(...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end(не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.
// Если какой - то из items является массивом, тогда берутся его элементы.

// Для поиска среди элементов:
// indexOf / lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или - 1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find / filter(func) – фильтрует элементы через функцию и отдаёт первое / все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.

// Для перебора элементов:
// forEach(func) – вызывает func для каждого элемента.Ничего не возвращает.

// Для преобразования массива:
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split / join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

// Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.
// Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

// arr.some(fn) / arr.every(fn) проверяет массив.
// Функция fn вызывается для каждого элемента массива аналогично map.
// Если какие - либо / все результаты вызовов являются true, то метод возвращает true, иначе false.
// arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.
// arr.copyWithin(target, start, end) – копирует свои элементы, начиная со start и заканчивая end,
// в собственную позицию target(перезаписывает существующие).
