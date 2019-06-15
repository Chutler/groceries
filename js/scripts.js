$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix"];

    var userInputs = blanks.map(function(blank) {
      return $("input#" + blank).val();
    });

    var groceries = userInputs.map(function(grocery) {
      return grocery.toUpperCase();
    })
    
    debugger;
    groceries.sort();
    console.log(groceries);

    var listOne = groceries[0];
    var listTwo = groceries[1];
    var listThree = groceries[2];
    var listFour = groceries[3];
    var listFive = groceries[4];
    var listSix = groceries[5];

    // $(".tony").text(listOne);
    // $(".listTwo").text(listTwo);
    // $(".listThree").text(listThree);
    // $(".listFour").text(listFour);
    // $(".listFive").text(listFive);
    // $(".listSix").text(listSix);

    
    // console.log(groceries);

    $("#blanks").hide();
    $("#results").show();
    
    alert('Got to END of form submit!');
    event.preventDefault();
  });
});
