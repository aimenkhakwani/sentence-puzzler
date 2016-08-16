$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();

  var userSent = $("input#sentence").val().toUpperCase();
  var splitArray = userSent.split("");

  for (var index = 0; index < splitArray.length; index += 1) {
    if ((splitArray[index] === "A") || (splitArray[index] === "E") || (splitArray[index] === "I") || (splitArray[index] === "O") || (splitArray[index] === "U")){
        splitArray[index] = "-"
    }
  }
  var joinArray = splitArray.join("");
  $(".output").text(joinArray);
  });
});
