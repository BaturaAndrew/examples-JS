// Значение this – это объект «перед точкой», который использовался для вызова метода.
// Таким образом, значение this передаётся правильно, только если функция вызывается напрямую 
//с использованием синтаксиса точки obj.method() или квадратных скобок obj['method']()

// Стрелочные функции особенные: у них нет своего «собственного» this. Если мы используем this внутри стрелочной функции,
//то его значение берётся из внешней «нормальной» функции как бы мы не вызывали эту стрелочную ф-цию


function simpleExample() {
    function outer() {
        console.log('from outer', this.field);
    }
    let obj = {
        field: 5,
        print: function () {
            console.log('print fn:', this.field);
        }
    };

    console.log('\nouter()');
    outer();

    obj.outer = outer;
    console.log('\nobj.outer()');
    obj.outer();

    let separateFn = obj.print;
    console.log('\nseparateFn');
    separateFn();
}

function arrowFunc() {
    let arrowObj = {
        field: 123,
        print: function () {
            return () => {
                console.log('arrow print fn:', this.field);
            }
        }
    };

    let obj = {
        field: 99
    }
    obj.print = arrowObj.print();
    let separatePrint = arrowObj.print();

    arrowObj.print()();  // 123
    obj.print();   // 123
    separatePrint();  // 123
    arrowObj.print().call(obj);  // 123
}

function thisWithConstructor() {
    function A() {
        this.a = 42;
    }

    function B() {
        this.a = 42;

        return 'for what?';
    }

    function C() {
        this.a = 42;

        return {
            a: 'meaning of life',
        };
    }

    console.log(' - simple constructor:', new A());
    console.log(' - constructor which returns primitive:', new B());
    console.log(' - constructor which returns another object:', new C());

    // console.log('\n Just B()', B());
}

// Example with inner calls
function innerCalls() {
    function foo() {
        function bar() {
            return this.x;
        }

        return bar();
        // return bar.call(this);
    }

    const obj1 = { x: 10, test: foo };
    console.log(obj1.test()); // undefined // т.к. в test записалась ф-ция, которая не привязана к объекту
}
//various method calls
function withDifferentTypes() {
    let obj = {
        field: 5,
        print: function () {
            console.log('print fn:', this.field);
        }
    };

    console.log('\nobj.print()');
    obj.print();

    console.log('\n(obj.print)();');
    (obj.print)();

    console.log('\n(obj.print = obj.print)()');
    (obj.print = obj.print)();

    console.log('\n(obj.print || obj.print)()');
    (obj.print || obj.print)();

    console.log('\n[obj.print][0]()');
    [obj.print][0]();
}

function secondSimpleExample() {

    let user = {
        name: "Джон",
        age: 30,
        field: 111,
        sayHi() {
            // console.log(user.name); // приведёт к ошибке
            // но если использовать this, то код будет работать
            console.log(this.name)
        }
    };

    let admin = user;
    user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
    admin.sayHi(); // если использовать user.name -> Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!
}

function inerestingInterviewIssues() {

    function User(login) {
        this.login = login;
        this.getName = () => this.login;
    }


    function withArguments() {
        let length = 10;
        function fn() {
            console.log(this.length);
        }

        var o = {
            length: 2,
            method: function (callback) {
                callback(); // возврашает this.length, где this - глобальный объект. 
                // И т.к. length не определена как переменная (словом let или var), то она записывается как свойство глобального объекта

                arguments[0](); // метод callback вызвали на объекте arguments, т.е. this уже arguments
                // а arguments.length === 3, т.к. o.method(fn, 123, 456);
            }
        }
        o.method(fn, 123, 456);
    }

    let arnold = new User('Arnold');

    // console.log(arnold.getName()); // Arnold // getName - arrow function
    // console.log(arnold.getName.call({ login: 'John Doe' })); // Arnold // getName - arrow function

    withArguments();
}

// simpleExample();
// secondSimpleExample()
// arrowFunc()
// thisWithConstructor();
// innerCalls();
// withDifferentTypes()
inerestingInterviewIssues()