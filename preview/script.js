'use strict';


const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
 

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
}); 