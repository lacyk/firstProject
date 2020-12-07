'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper'),
      crc = document.querySelectorAll('.circle');

console.dir(box);
// box.style.background = 'blue';

box.style.cssText = 'background-color: green; width: 500px';

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.background = 'yellow';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue'; 
// });


const div = document.createElement('div');
const text = document.createTextNode('I was here');
div.classList.add('black');
// div.style.width = '500px';
div.style.cssText = 'width: 500px; height: 250px';


wrapper.append(div);
div.innerHTML = '<h1>Hello There</h1>'.toUpperCase();

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставка елементу до початку 
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставка елементу після початку 
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставка елементу після початку 
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // вставка елементу після початку 


// div.textContent = 'Hello ';
// text.classList.add('black');
// hearts[0].before(text);

// wrapper.style.background = 'green';

// document.body.append(wrapper);
// document.body.prepend(div);


// hearts[0].before(div);
// hearts[0].after(div);

// hearts[0].replaceWith(circles[0]);
// circles[0].remove();
// hearts[0]. before

//  
// console.log(crc);

// hearts[0].replaceWith(crc[0]);
// crc[0].replaceWith(hearts[0]);
