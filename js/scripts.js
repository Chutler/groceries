$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix"];

    var userInputs = blanks.map(function(blank) {
      return $("input#" + blank).val();
    });

    var groceries = userInputs.map(function(grocery) {
      return grocery.toUpperCase();
    })
    
    groceries.sort();
    
    groceries.forEach(function(grocery) {
      $("." + 1 ).text(grocery);
    });
    
    console.log(groceries)

    $("#results").show();
    $("groceries").hide();

    alert('Got to END of form submit!');
    event.preventDefault();
  });
});
