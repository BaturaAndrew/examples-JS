const ul = document.createElement('ul');
const input = document.createElement('input');
const button = document.createElement('button');
input.type = 'text';
button.innerHTML = 'Add user';


function renderItem(conteiner, items) {
  items.forEach(item => {
    const li = document.createElement('li');
    if (item.removed) {
      li.classList.add('-removed');
    }
    li.innerHTML = item.name;
    conteiner.appendChild(li);
  })
}
// item.removed ? '-removed' : ''

renderItem(ul, data);

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(ul);

ul.addEventListener('click', e => {
  e.target.classList.toggle('-removed');
  const index = Array.from(ul.children).indexOf(e.target);
  data[index].removed = !data[index].removed;
})

button.addEventListener('click', () => {
  data.push({
    name: input.value
  });
  renderItem(ul, data);
})