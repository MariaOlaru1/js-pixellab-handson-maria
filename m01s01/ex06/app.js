var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();
    var radius = inputRadius.value || 7;
    var result = '153,93';

    result = 4 * Math.PI * Math.pow(7, 2);
    elementResult.innerText = result;
  },
  false,
);
