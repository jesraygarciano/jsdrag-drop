const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);

