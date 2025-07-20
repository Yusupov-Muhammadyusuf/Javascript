const minValue = document.getElementById('min');
const maxValue = document.getElementById('max');
const btn = document.getElementById('button');
const pr = document.getElementById('placeholder');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const min = Number(minValue.value);
    const max = Number(maxValue.value);

    if (minValue.value === '' || maxValue.value === '') {
        alert("Please enter min and max values completely!");
        return;
    } 

    if (min > max) {
        alert("Min have to small from Max!");
        return;
    }

    pr.textContent = getRandomNumber(min, max);
}

btn.addEventListener('click', generate);