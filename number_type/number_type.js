alert("Hello!  Here you can find the type of a number. \n\n Please click 'Enter' or 'OK' to start!");

const number = parseInt(prompt("Please enter a number"));

switch (number % 2) {
    case 0:
        alert(`${number} is an even number.`);
        break;
    case 1:
    case -1:
        alert(`${number} is an odd number.`);
        break;
    default:
        alert("Please enter only a number!");
}