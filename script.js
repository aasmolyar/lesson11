
const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');

let color;
const logger = function (event) {
    color = event.target.value;
}

const changeColor = function (event) {
    square.style.backgroundColor = color;
}

text.addEventListener('input', logger)
btn.addEventListener('click', changeColor);

const ebtn = document.getElementById('e_btn');

const changeStyle = function (event) {
    ebtn.style.display = 'none';
}

ebtn.addEventListener('click', changeStyle);


const range = document.getElementById('range');
console.log(range);
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');
console.dir(circle);

span.textContent = '50%';
circle.style.height = `${span.textContent}`;
circle.style.width = `${span.textContent}`;

let size;

const logger1 = function (event) {
    span.textContent = event.target.value + '%';
    size = event.target.value;
}

const changeSize = function (event) {
    circle.style.height = size + '%';
    circle.style.width = size + '%';
}

range.addEventListener('input', logger1);
range.addEventListener('input', changeSize);

