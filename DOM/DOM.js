function block1(e) {
  console.log('block1');
  // div.removeEventListener('click', block1);
  if (e instanceof Event) {
    // console.log('e is Event');
  }

  if (e.target === div) {
    // console.log('e.target === div');
  }

  // console.log(e.target); 
  // console.log(e.currentTarget);
  // console.log(e.bubbles);
  // console.log(e.eventPhase);
  // console.log(e.type);
}

function block2(e) {
  console.log('block2');
  event.target.removeAttribute('onclick');
}

// традиционная привязка обработчиков
var div = document.body.querySelector('.block1');
// div.onclick = function (e) {
//   console.log('block1');
//   div.onclick = null;
// }


// wc3 привязка
div.addEventListener('click', block1);

// preventDefault - отменяет дефолтное поведение
// stopPropagation
var link = document.querySelector('#linkToGoogle');
link.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = 'https://yandex.ru';
})

let counter = 0;

const button = document.querySelector('button');
const span = document.querySelector('span');
button.addEventListener('click', e => {

  if (e.altKey) {
    counter += 10;
    console.log(e.screenX);
    console.log(e.screenY);
  } else {
    counter++;
  }
  span.innerHTML = counter;
});