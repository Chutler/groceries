$(document).ready(function() {
  $("#groceries form").submit(function(event) {
    var items = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix"];
    console.log(items);

    groceries.forEach(function(grocery) {
     var userInput = $("input#" + blank).val();
     $("." + blank).text(userInput);
     });

    // var upperItems = items.map(function(item) {
    //   return item.toUpperCase();
    //   console.log(upperItems);
    // });
    //
    // var alphaItems = upperItems(sort);
    // console.log(alphaItems);
    // });
    //
    // alphaItems.forEach(function(item) {
    //   var groceries = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    //
    // });
    //
    // $("#results").show();
    // $("#groceries").hide();

    event.preventDefault();
  });
});
