const info = [
  { name: 'Tesla', model: 'Y' },
  { name: 'Toyota', model: 'bz4x' },
  { name: 'Porche', model: '911' },
  { name: 'Mercedes-Benz', model: 'maybach' },
  { name: 'BWM', model: 'm9' },
  { name: 'Tesla', model: 'Cybertrack' },
  { name: 'BYD', model: 'Chempion' },
  { name: 'NIO', model: 'ES6' },
  { name: 'Volkswagen', model: 'Polo' },
  { name: 'Nissan', model: 'Patrol' },
  { name: 'Audi', model: 'a4' },
  { name: 'Kia', model: 'K5' },
  { name: 'Hyundai', model: 'Sonata' },
  { name: 'Honda', model: 'Civic' },
  { name: 'Isuzu', model: 'ELF' },
  { name: 'Ferrari', model: '488 GTB' },
  { name: 'Ford', model: 'Edge' },
  { name: 'Lamborghini', model: 'Aventador' },
  { name: 'Bugatti', model: 'Chiron' },
];

const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

function getRandomItems(array, count) {
  const shuffeld = [...array].sort(() => 0.5 - Math.random());
  return shuffeld.slice(0, count);
}

function CarRandom() {
  return getRandomItems(info, 1)[0];
}

function YearRandom() {
  return getRandomItems(years, 1)[0];
}

let count = 0;
const maxRandom = 5;

while (count < maxRandom) {
  const car = CarRandom();
  const year = YearRandom();
  const car2 = CarRandom();
  const year2 = YearRandom();

  const selelction = prompt(`
    Enter 1 or 2 to select \n
    Name: ${car.name}, Model: ${car.model}, Year: ${year} \n
    Name: ${car2.name}, Model: ${car2.model}, Year: ${year2}
    `)

  if (selelction == 1) {
    alert(`✅ You have selected ${car.name}, ${car.model}, ${year}!`);
    count++;
  } else if (selelction == 2 ) {
    alert(`✅ You have selected ${car2.name}, ${car2.model}, ${year2}!`);
    count++;
  } else {
    alert('⚠️ Please enter only 1 or 2!');
  }

  if (count == maxRandom) {
    alert('🎉 The game is over. 5 selections have been made!');
  }
}
