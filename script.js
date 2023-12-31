const changeColor = document.getElementById('changeColorBtn');
let hex_code = document.getElementById('hex-code');

function generateColor() {
  let hexColor = '#';
  let hex_numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  for (let i = 0; i < 6; i++) {
    let random_index = Math.floor(Math.random() * hex_numbers.length);
    hexColor += hex_numbers[random_index];
    document.body.style.background = hexColor;
    hex_code.textContent = hexColor;
  }
}

changeColorBtn.addEventListener('click', () => {
  generateColor();
});
