const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);

// Drag Functions
function dragStart() {
    // console.log('Start');
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
    
}

function dragEnd() {
    console.log('End');
}