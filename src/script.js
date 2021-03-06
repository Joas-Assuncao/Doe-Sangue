import './assets/css/style.css';
import { navbar } from './assets/modules/navbar.js';

navbar();

const button = document.querySelector('#button');
const blood = [
    document.querySelector('input[value="A+"]'),
    document.querySelector('input[value="A-"]'),
    document.querySelector('input[value="B+"]'),
    document.querySelector('input[value="B-"]'),
    document.querySelector('input[value="O+"]'),
    document.querySelector('input[value="O-"]'),
    document.querySelector('input[value="AB+"]'),
    document.querySelector('input[value="AB-"]'),
];

button.addEventListener('click', () => {
    const type = blood.reduce(checkInputs, 0);
    createTable(type);
    return;
});

document.addEventListener('keypress', event => {
    const key = event.keyCode;
    if (key === 13) {
        const type = blood.reduce(checkInputs, 0);
        createTable(type);
        return;
    }
})

function checkInputs(accumulator, initial, index) {
    if (blood[index].checked) {
        accumulator = blood[index].value;
    }

    return accumulator;
}

function createTable(type) {
    document.querySelector('.table').innerHTML = '';
    const table = document.createElement('table');

    if (type === 'A+') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
            Doa para: AB+ e A+ <br><br>
            Recebe de: A+, A-, O+ e O-
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }

    if (type === 'A-') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
            Doa para: A+, A-, AB+ e AB- <br><br>
            Recebe de: A- e O-
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }

    if (type === 'B+') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
            Doa para: B+ e AB+ <br><br>
            Recebe de: B+, B-, O+ e O- 
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }

    if (type === 'B-') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
        Doa para: B+, B-, AB+ e AB- <br><br>
        Recebe de: B- e O-
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }

    if (type === 'O+') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
            Doa para: A+, B+, O+ e AB+ <br><br>
            Recebe de: O+ e O-
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }

    if (type === 'O-') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
            Doa para: A+, B+, O+, AB+, A-, B-, O- e AB- (todos)<br><br>
            Recebe de: O-
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }

    if (type === 'AB+') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
            Doa para: AB+ <br><br>
            Recebe de: A+, B+, O+, AB+, A-, B-, O- e AB- (todos)
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }

    if (type === 'AB-') {
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerHTML = `Sangue ${type}`;
        td.innerHTML = `
            Doa para: AB+ e AB- <br><br>
            Recebe de: A-, B-, O- e AB-
        `;
        const array = [th, td];

        for (let elements of array) {
            const tr = document.createElement('tr');
            tr.appendChild(elements);
            table.appendChild(tr);
        }

        const div = document.querySelector('div.table');
        div.appendChild(table);
    }
}