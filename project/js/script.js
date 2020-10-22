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
let promo = document.querySelectorAll('.promo__adv');

promo.forEach(item => {
    item.remove();
});

// 2nd exercise 
let bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre');

genre.textContent = "ДРАМА";
// console.log(genre);

// 3rd 
bg.style.backgroundImage = "url('img/bg.jpg')";



// 4rd 
let list = document.querySelector(".promo__interactive-list");
let item = document.querySelectorAll('.promo__interactive-item');

item.forEach(item => {
    item.remove();
});


for (let i = 0; i < movieDB.movies.length; i++) {

    let div = document.createElement('div');
    div.classList.add('delete');

    let li = document.createElement('li');
    li.classList.add('promo__interactive-list');
    li.textContent = `${i+1}. ` + movieDB.movies[i];
    list.append(li);
    li.append(div);

 }

// item[0].prepend(movieDB.movies[0]); // it's working 



