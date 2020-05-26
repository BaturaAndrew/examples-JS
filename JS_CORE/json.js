// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

// let json = JSON.stringify(value[, replacer, space])
// value - Значение для кодирования.
// replacer - Массив свойств для кодирования или функция соответствия function(key, value).
// в качестве replacer мы можем использовать функцию, а не массив.
// space - Дополнительное пространство (отступы), используемое для форматирования.
//  Аргумент space используется исключительно для вывода в удобочитаемом виде.

// let value = JSON.parse(str, [reviver]);
// str - JSON для преобразования в объект.
// reviver -Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.

const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
}

const json = JSON.stringify(student)
console.log(typeof json) // мы получили строку!
// Полученная строка json называется JSON - форматированным или сериализованным объектом.
console.log(json) //  выведет объект в формате JSON

// JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
// А именно:
// Свойства-функции (методы).
// Символьные свойства.
// Свойства, содержащие undefined.

const user = {
  sayHi() {
    // будет пропущено
    console.log('Hello')
  },
  [Symbol('id')]: 123, // также будет пропущено
  something: undefined, // как и это - пропущено
}

console.log(JSON.stringify(user)) // {} (пустой объект)

// Важное ограничение: не должно быть циклических ссылок.

const room = {
  number: 23,
}

// replacer 2-й аргумент
const meetup = {
  title: 'Conference',
  participants: [{name: 'John'}, {name: 'Alice'}],
  place: room, // meetup ссылается на room
}

room.occupiedBy = meetup // room ссылается на meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`)
    return key === 'occupiedBy' ? undefined : value
  })
)

// space 3-й аргумент
const usr = {
  name: 'John',
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
}

console.log(JSON.stringify(usr, null, 2))

// Как и toString для преобразования строк, объект может предоставлять метод toJSON для преобразования в JSON.
// JSON.stringify автоматически вызывает его, если он есть.

const rom = {
  number: 23,
  toJSON() {
    return this.number
  },
}
console.log(JSON.stringify(rom)) // 23

// JSON.parce
// reviver
const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'

const metup = JSON.parse(str, (key, value) => {
  if (key === 'date') return new Date(value)
  return value
})

console.log(metup.date.getDate()) // 30 - теперь работает!
