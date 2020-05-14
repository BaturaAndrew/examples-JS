// var start = Date.now();
// var c;

// console.log("start = " + new Date());

// setTimeout(function () {
//   console.log("timeout = " + new Date());
// }, 1000);

// while (start + 2000 > Date.now()) {
//   var c = 3 + 3 + 3;
// }

// console.log("end = " + new Date());


// for (let i = 1; i <= 2; i++) {
//   let ms = (new Date()).getMilliseconds();
//   setTimeout(function () {
//     console.log('i =', i, ms)
//   }, 37);
// }

for (var i = 1; i <= 2; i++) {
  function f() {
    var local = i;
    var m = new Date();
    setTimeout(function () {
      console.log('i =', local, m.getMilliseconds())
    }, 100);

  }
  f();
}

for (var i = 1; i <= 2; i++) {
  (function () {
    var local = i;
    setTimeout(function () {
      var m = new Date();
      console.log('i =', local, m.getMilliseconds())
    }, 100);
  })();
}

// при вызове ф-ции из callback qeuee ф-ция вызывается 1-м способом
// 4 способа вызова ф-ии:
// 1) просто как ф - ции f(); (контекст теряется)
// 2) вызов как метод объекта
// 3) вызов при помощи call & apply(контекст вызова подменяется явно)
// 4) вызоф ф-ции как консткуктора через new (в this  записывается объект)
var a = {
  firstName: 'Mike',
  sayName: function () {
    setTimeout(function () {
      console.log(this.firstName);
    }, 1000);
  }
}

a.sayName();

// контекст выполнения передается явно через bind
var a = {
  firstName: 'Mike',
  sayName: function () {
    setTimeout(function () {
      console.log(this.firstName);
    }.bind(this), 1000);
  }
}
a.sayName();

// контекст выполнения передается по-умолчанию в стрелочной ф-ции
var a = {
  firstName: 'Mike',
  sayName: function () {
    setTimeout(() => {
      console.log(this.firstName);
    }, 1000);
  }
}
a.sayName();