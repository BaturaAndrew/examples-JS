// Метод Object.create() создаёт новый объект с указанными объектом прототипа и свойствами.

// if (!Object.create) {
//   Object.create = function (o) {
//     function F() {}
//     F.prototype = o
//     return new F()
//   }
// }

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
if (typeof Object.create !== 'function') {
  // Этапы производства ECMA-262, издание 5, 15.2.3.5
  // Ссылка: http://es5.github.io/#x15.2.3.5
  Object.create = function (O) {
    // Чтобы сэкономить память, используйте общий конструктор
    function Temp() {}

    // делает безопасную ссылку на Object.prototype.hasOwnProperty
    // const hasOwn = Object.prototype.hasOwnProperty

    // 1. Если Type(O) не является Object or Null выдается исключениеTypeError.
    if (typeof O !== 'object') {
      throw TypeError('Object prototype may only be an Object or null')
    }

    // 2. Пусть obj будет результатом создания нового объекта, как если бы
    //    выражение new Object(), где Object является стандартным встроенным
    //    конструктором  с таким именем
    // 3. Установите для внутреннего свойства [[Prototype]] объекта obj значение O.
    Temp.prototype = O
    const obj = new Temp()
    Temp.prototype = null // Давайте не будем держать случайные ссылки на О...

    // 4.  Если аргумент Properties присутствует и не определен, добавляем
    //    собственные свойства к obj, как будто вызывая стандартную встроенную
    //    функцию Object.defineProperties с аргументами obj и
    //    Properties.
    if (arguments.length > 1) {
      // Object.defineProperties делает ToObject своим первым аргументом.
      const Properties = Object(arguments[1])
      for (const prop in Properties) {
        // if (hasOwn.call(Properties, prop)) {
        obj[prop] = Properties[prop]
        // }
      }
    }

    // 5. Возращает obj
    return obj
  }
}

const a = {a: 5}
const b = Object.create(a, {
  b: {writable: true, configurable: true, value: 6},
})
console.log(b)

// Shape — суперкласс
function Shape() {
  this.x = 0
  this.y = 0
}

// метод суперкласса
Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.info('Фигура переместилась.')
}

// Rectangle — подкласс
function Rectangle() {
  Shape.call(this) // вызываем конструктор суперкласса
}

// подкласс расширяет суперкласс
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

const rect = new Rectangle()

console.log(
  `Является ли rect экземпляром Rectangle? ${rect instanceof Rectangle}`
) // true
console.log(`Является ли rect экземпляром Shape? ${rect instanceof Shape}`) // true
rect.move(1, 1) // выведет 'Фигура переместилась.'
