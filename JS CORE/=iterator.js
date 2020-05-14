// https://learn.javascript.ru/iterable


// Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.
// Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.

// Array.from принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)



let range = {
  from: 1,
  to: 5
};

// Cделать range итерируемым 

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// теперь работает!
for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}


// ИЛИ
let range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range2) {
  console.log(num); // 1, затем 2, 3, 4, 5
}