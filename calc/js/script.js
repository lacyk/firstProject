"use strict";

const inputRUB = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf8');
    request.send();

    request.addEventListener('readystatechange', () => { // readyStateChange відслідковування зміни цього стану 
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
        }
    });
    // scoistva: 

    // status
    // statusText
    // response
    // readyState

});