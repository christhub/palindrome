var palindrome = function(message) {
  var emptyArr = new Array();
  var splitWord = message.split("");
  var length = splitWord.length;
  var l = length-1;
  var halfL = Math.floor(length/2);

  if(length %2 === 0){

    for (var i = 0; i < halfL; i++){
      if(splitWord[i] !== splitWord[l]){
        return false;
      }
      l--;
    };
    return true;
  } else {

    for (var i = 0; i < halfL; i++){
      if(splitWord[i] !== splitWord[l]){
        return false;
      }
      l--;
    };
    return true;
  };
};

var isitapalindrome = function(message) {
  var answer = palindrome(message);
  if (answer === true) {
    return "yes";
  } else {
    return "no";
  }
};


$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var message = $("input#palindrome-input").val();
    var result = isitapalindrome(message);

    $("#palindrome-word").text(result);
    $('#result').show();
    event.preventDefault();
  });
});
