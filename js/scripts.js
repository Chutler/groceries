$(document).ready(function() {
  $("#groceries form").submit(funtion(event) {
    var blanks = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix"];

    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      $("." + grocery).text(userInput);
    });

    $("#results").show();
    $("#groceries").hide();

    event.preventDefault();
  });
});
