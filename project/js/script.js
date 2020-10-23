/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// 1st exercise 
let promo = document.querySelectorAll('.promo__adv img');

promo.forEach(item => {
    item.remove();
});

// 2nd exercise 
let bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre');

genre.textContent = "драма";
// console.log(genre);

// 3rd 
bg.style.backgroundImage = "url('img/bg.jpg')";



// 4rd 
let list = document.querySelector(".promo__interactive-list");
let item = document.querySelectorAll('.promo__interactive-item');

item.forEach(item => {      // 1st method do delete old information
    item.remove();
});

list.innerHTML = "";    // 2nt method do delete old information

movieDB.movies.sort();  //sorting our DB by name  


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

//                                                              H I S    M E T H O D

 movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
 });

// item[0].prepend(movieDB.movies[0]); // it's working 



