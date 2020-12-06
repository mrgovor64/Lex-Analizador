$(document).ready(function() {
  let lexAnal = new LexAnal();

  $('.button').on('click', function(event) {
    // let string = 'const num = 23.4'


    let string = $('.textarea').val();
    $('.content').html(JSON.stringify(lexAnal.parse(string), null, 2));

  });


  let inputTestAr = [
    {
      "inputString": "const num = 23.4",
      "expectation": ["word", "spaces", "word", "spaces", "appropriation", "spaces", "number"]
    },
    {
      "inputString": "const num = (23.4)",
      "expectation": ["word", "spaces", "word", "spaces", "appropriation", "spaces", "number"]
    },
    {
      "inputString": "const num = (23.4 + 1.0)",
      "expectation": ["word", "spaces", "word", "spaces", "appropriation", "spaces", "round brackets", "number", "spaces", "spaces", "number", "round brackets"]
    },
  ]
  $('.tests').html('');
  for (let variable of inputTestAr) {
    $('.tests').append('Входная строка: ' + variable.inputString + '\n');
    $('.tests').append('Ожидание: ' + JSON.stringify(variable.expectation, null, 2) + '\n');
    $('.tests').append('Результат: ' + JSON.stringify(lexAnal.parse(variable.inputString), null, 2) + '\n');
    $('.tests').append('Статус: ' + lexAnal.test(variable.inputString, variable.expectation) + '\n\n\n');


  }



});
