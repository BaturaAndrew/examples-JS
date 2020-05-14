// - При сравнении значений разных типов JavaScript приводит каждое из них к числу.

// - При использовании математических операторов и других операторов сравнения < > <= >=
// Значения null / undefined преобразуются к числам: null становится 0, а undefined – NaN.

// - для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся
// undefined равно только null -> undefined == null -> true

// 	(Логическое НЕ) Возвращает false, если операнд может быть преобразован в true; в противном случае возвращает true.
// undefined, null, NaN не могут быть преобразованны, и Boolean(undefined) - > false. 
// !0 -> true, !'' -> true

true + false //1

12 / "6" // 2

"number" + 15 + 3 // number153

15 + 3 + "number" // 18number
  
[1] > null // true // [1]==1 and null -> 0

"foo" + + "bar" // "fooNaN"

'true' == true // false // 'true'-> NaN and true->1 => '1' == true // true

false == 'false' // false //  false-> 0 and 'false'-> NaN   => '0' == false // true

null == '' // false

!!"false" == !!"true" // true   // !'' == !!"true"  <-true
  
['x'] == 'x' // true
  
[] + null + 1 // "null1" // [] -> '' when + . BUT [] == 0 -> true , BUT [] == [] -> false
  
[1, 2, 3] == [1, 2, 3] // false // because objects

{ } +[] + {} + [1] // "0[object Object]1" // '' + {} -> "[object Object]", BUT   + {} -> NaN

!+[] + [] + ![] // "truefalse" // ! + []+ []-> "true", because ! -> true and [] -> '', so -> 'true'. BUT ! + [] -> true
                // ![] -> false
                //  []==false -> true
                // ![]==false -> true  OMG


new Date(0) - 0 // 0 // JUST REMEMBER IT (new Date(0) / or * 0  -> 0)
new Date(0) + 0 // "Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)0"