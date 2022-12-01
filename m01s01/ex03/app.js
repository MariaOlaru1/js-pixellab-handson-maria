var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputHeight = document.getElementById('height');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();
    var length = inputLength.value || 12;
    var width = inputWidth.value || 5;
    var height = inputHeight.value || 3;
    var result = 180;
    result = length * width * height;

    elementResult.innerText = result;
  },
  false,
);
