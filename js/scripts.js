$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix"];

    var userInputs = blanks.map(function(blank) {
      return $("input#" + blank).val();
    });

    var groceries = userInputs.map(function(grocery) {
      return grocery.toUpperCase();
    });

    debugger;
    groceries.sort();
    console.log(groceries);

    $(".listOne").text(groceries[0]);
    $(".listTwo").text(groceries[1]);
    $(".listThree").text(groceries[2]);
    $(".listFour").text(groceries[3]);
    $(".listFive").text(groceries[4]);
    $(".listSix").text(groceries[5]);

    $("#blanks").hide();
    $("#results").show();
    
    event.preventDefault();
  });
});
