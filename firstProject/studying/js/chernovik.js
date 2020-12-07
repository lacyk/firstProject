'use strict';

//                                                              M Y   M E T H O  D

// for (let i = 0; i < movieDB.movies.length; i++) {

//     let div = document.createElement('div');
//     div.classList.add('delete');

//     let li = document.createElement('li');
//     li.classList.add('promo__interactive-item');
//     li.textContent = `${i+1}. ` + movieDB.movies[i];
//     list.append(li);
//     li.append(div);

// }

// item[0].prepend(movieDB.movies[0]); // it's working 


// function a (b) {

//     let film = input.value;
//     let short = film.slice(0, 20) + '...';
//     if (film.length > 21) {
//         list.innerHTML += `
//             <li class="promo__interactive-item">${b + 1} ${short}
//                 <div class="delete"></div>
//             </li>
//         `;
//     } else { 
//         list.innerHTML += `
//             <li class="promo__interactive-item">${b + 1} ${film}
//                 <div class="delete"></div>
//             </li>
//         `;
//     }
//  }

//_________________________________________________________________________________________________________________________________________________________


/*'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let list = document.querySelector(".promo__interactive-list"),
    lists = document.querySelectorAll(".promo__interactive-list"),
    item = document.querySelectorAll('.promo__interactive-item'),
    input = document.querySelector(".adding__input"),
    btn = document.querySelector('button'),
    bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre'),
    promo = document.querySelectorAll('.promo__adv img'),
    del = document.querySelectorAll('.delete');


// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
promo.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = "драма";


// 3) Изменить задний фон на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
bg.style.backgroundImage = "url('img/bg.jpg')";


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту  

// item.forEach(item => {      // 1st method do delete old information
//     item.remove();
// });

list.innerHTML = "";    // 2nt method do delete old information
movieDB.movies.sort();  //sorting our DB by name  

console.log(movieDB.movies);
//                                                              H I S    M E T H O D
function show() {
    movieDB.movies.forEach((mov, i) => {
        list.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${mov}
            <div class="delete"></div>
        </li>
    `;
    });
}

show();

btn.addEventListener('click', add);

del.forEach(it => {
    it.addEventListener('click', usun);
});


function add (event) {
    event.preventDefault();
    
    if (input.value != "" && input.value != null){
        movieDB.movies.push(input.value);
        movieDB.movies.sort();
        let count = movieDB.movies.length - 1;
        // show();
        a (count);
    }
}

function a (b) {

    let film = input.value;
    let short = film.slice(0, 20) + '...';
    if (film.length > 21) {
        list.innerHTML += `
            <li class="promo__interactive-item">${b + 1} ${short}
                <div class="delete"></div>
            </li>
        `;
    } else { 
        list.innerHTML += `
            <li class="promo__interactive-item">${b + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    }
 }

 function usun(event) {
    event.preventDefault();
     console.log('no way');
 }



// function cut(obj) {
//     obj.forEach(it => {
//         it.remove();
//     });
// }

console.log(item.textContent);
 

// item.forEach ((elem) => {
//     elem.remove();
// });



*/

//_________________________________________________________________________________________________________________________________________________________

