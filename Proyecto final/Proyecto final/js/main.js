(() => {

    let toDoListArray = [];

    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");

    const displayClock = () => {
        const timeDate = new Date();
        const clock = document.querySelector("#clock");
        const date = document.querySelector('#date');

        let hours = timeDate.getHours() % 12;
        let minutes = timeDate.getMinutes();
        let dayOrNight = '';

        if (hours.toString().length < 2) {
            hours = '0' + hours;
        }

        if (minutes.toString().length < 2) {
            minutes = '0' + minutes;
        }

        if (timeDate.getHours() <= 12) {
            dayOrNight = 'AM';
        } else {
            dayOrNight = 'PM';
        }

        const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
        const today = days[timeDate.getDay()];

        const clockOutput = hours + ' : ' + minutes + ' ' + dayOrNight;
        const dateOutput = "✨" + " " + "¡Qué bonito" + " " + today + "!" + " " + "✨";

        clock.textContent = clockOutput;
        date.textContent = dateOutput;
    }

    window.onload = clockFunction = () => {
        displayClock();
        setInterval(displayClock, 1000)
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        input.value = '';
    });

    ul.addEventListener('click', e => {
        let id = e.target.getAttribute('data-id')
        if (!id) return
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    function addItemToDOM(itemId, toDoItem) {
        const li = document.createElement('li')
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray)
    }

    function removeItemFromDOM(id) {
        var li = document.querySelector('[data-id="' + id + '"]');
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter(item => item.itemId !== id);
        console.log(toDoListArray);
    }

})();

let itemsArray;
if (localStorage.getItem('items') === null) {
    itemsArray = [];
} else {
    itemsArray = JSON.parse(localStorage.getItem('items'));
}

for (let i = 0; i < itemsArray.length; i++) {
    createListContent(itemsArray[i]);
    for (let j = 0; j < checkedArray.length; j++) {
        if (itemsArray[i] === checkedArray[j]) {
            const localStorageLi = ul.getElementsByTagName('LI')[i];
            const localStorageCheckbox = localStorageLi.querySelector('input');
            localStorageLi.className = 'checked';
            localStorageCheckbox.checked = true;
        }
    }
}

const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}