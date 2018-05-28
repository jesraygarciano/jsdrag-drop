const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag Events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    // console.log('Start');
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
    
}

function dragEnd() {
    // console.log('End');
    this.className = 'fill';
}

function dragOver(e){
    // console.log('Over');
    e.preventDefault();
}
function dragEnter(e){
    // console.log('Enter');    
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave(){
    // console.log('Leave');
    this.className = 'empty';
}
function dragDrop(){
    // console.log('Drop');
    this.className = 'empty';
    this.append(fill);
}