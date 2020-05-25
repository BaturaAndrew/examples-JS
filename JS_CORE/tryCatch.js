function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  const data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError('Ошибка в URI', e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError('Синтаксическая ошибка в данных', e);
    } else {
      throw e; // пробрасываем
    }
  }
}

try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    console.log(e.message);
    console.log(e.cause); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}
// Деструктуризация тоже поддерживается
const f = (
  [a, b] = [1, 2],
  {x: c} = {
    x: a + b,
  }
) => console.log(a + b + c);
f(); // 6
