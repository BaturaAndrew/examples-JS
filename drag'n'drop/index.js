
let blocksEl = document.querySelectorAll('.block');
let dragSrcEl = null;
[].forEach.call(blocksEl,(block) => {
  // REPLACE FRAMES
  block.addEventListener('dragstart', handleDragStart, false);
  block.addEventListener('dragenter', handleDragEnter, false);
  block.addEventListener('dragover', handleDragOver, false);
  block.addEventListener('dragleave', handleDragLeave, false);
  block.addEventListener('drop', handleDrop, false);
  block.addEventListener('dragend', handleDragEnd, false);
});

function handleDragStart(e) { 
  // Target (this) element is the second node
  // this.style.opacity = 0.4;

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function handleDragEnter() {
  this.classList.add('over');
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl !== this) {
    // Set the source column's HTML to the HTML of the columnwe dropped on. 
    dragSrcEl.innerHTML = this.innerHTML; 
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDragEnd() {
  blocksEl = Array.prototype.slice.call(blocksEl);
  blocksEl.map(el => el.classList.remove('over'));
}
