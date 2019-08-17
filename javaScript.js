


var targetNumber = 53;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.


  // We begin by expanding our array to include four options.
  var numberOptions1 = [10, 5, 3, 7];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions1.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageLatte = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageLatte.addClass("coffeepic1");

    // Each imageCrystal will be given a src link to the crystal image
    imageLatte.attr("src","https://images.unsplash.com/photo-1475241404975-c3ae90fdd9e6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=brigitte-tohm-BnrKDRn5sjg-unsplash.jpg,");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageLatte.attr("data-lattevalue", numberOptions1[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#coffeepic1").append(imageLatte);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".coffeepic1").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var latteValue = ($(this).attr("data-latteValue"));
    LatteValue = parseInt(LatteValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
