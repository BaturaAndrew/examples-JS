const obj = {
  field: 5,
  print() {
    console.log('print fn:', this.field)
  },
}

function secondRound() {
  o1 = {
    innerObj: {
      field: 10,
      print() {
        console.log('inner object', this.field)
      },
    },
    field: 66,
  }

  o1.innerObj.print()
}

function callBindApply() {
  function someFn() {
    console.log('print from some fn:', this.field)
  }

  console.log('\ncall & apply:')

  someFn.call(obj)
  someFn.apply(obj)

  console.log('\nbinded fn:')
  const binded = someFn.bind(obj) // bind привязывает окончательно
  binded()

  console.log('\nbinded with call & apply:')
  const anotherObj = {
    field: 'another',
  }

  binded.call(anotherObj)
  binded.apply(anotherObj)
}

function extraRound() {
  class ArObj {
    constructor() {
      this.field = 123
      this.print = () => {
        console.log('arrow print fn:', this.field)
      }
    }
  }
  const arrowObj = {
    field: 123,
    print() {
      return () => {
        console.log('arrow print fn:', this.field)
      }
    },
  }

  obj.print = arrowObj.print()
  const separatePrint = arrowObj.print()

  console.log('\nprint arrow func')

  arrowObj.print()()
  obj.print()
  separatePrint()
  arrowObj.print().call(obj)

  console.log('end\n')
}
// secondRound()
// callBindApply();
// extraRound()

function checkGlobalThis() {
  function withStrict() {
    console.log('\n with strict mode, this:', this)
  }
  // console.log('window & this:', this === window); // works with browsers console
  withStrict()
}

function additionalFeatures() {
  Number.prototype[Symbol.iterator] = function* () {
    console.log('\n I am inside generator function')
    for (let i = 0; i <= this; i++) {
      yield i
    }
  }

  String.prototype.isFirstLetterCapitalA = function () {
    if (!this || this.length === 0) {
      return false
    }

    return this[0] === 'A'
  }

  const number = 6
  console.log([...number])

  console.log(
    '\nAlphabet - is first A?  - ',
    'Alphabet'.isFirstLetterCapitalA()
  )
  console.log('Bird - is first A? -  ', 'Bird'.isFirstLetterCapitalA())
}

// checkGlobalThis();
// additionalFeatures();
