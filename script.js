const btn = document.getElementById('btn');

const square = document.getElementById('square');
console.log(square);
//square.style.backgroundColor = 'blue'

const text = document.getElementById('text');
console.log(text);


let color;

const logger = function (event) {
    color = event.target.value;
    console.log('в логере ' + color);
}


const changeColor = function (event) {
    console.log('в чендже ' + color);
    square.style.backgroundColor = color;
}

text.addEventListener('input', logger)
btn.addEventListener('click', changeColor)
