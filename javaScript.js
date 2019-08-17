<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  var counter = 0;

  var wins = 0;

  var losses = 0; 

  var targetNumber = '';

  var targetNumber = Math.floor(Math.random() *101)+19;

  $("#number-to-guess").text(targetNumber);
  // Now for the hard part. Creating multiple latte each with their own unique number value.



 

      
  // We begin by expanding our array to include four options.
  var numberOptions1 =  [20, 5, 1, 10];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions1.length; i++) {

    // For each iteration, we will create an imageLatte
    var imageLatte = $("<img>");

    // First each latte will be given the class ".latte-image".
    // This will allow the CSS to take effect.
    imageLatte.addClass("coffeepic1");

    // Each imageLatte will be given a src link to the latte image
    imageLatte.attr("src","https://images.unsplash.com/photo-1475241404975-c3ae90fdd9e6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=brigitte-tohm-BnrKDRn5sjg-unsplash.jpg,");

    // Each imageLatte will be given a data attribute called data-latteValue.
    // This data attribute will be set equal to the array value.
    imageLatte.attr("data-lattevalue", numberOptions1[i]);

    // Lastly, each latte image (with all it classes and attributes) will get added to the page.
    $("#coffeepic1").append(imageLatte);

    }


      
  // This time, our click event applies to every single latte on the page. Not just one.
  $(".coffeepic1").on("click", function() {

    // Determining the latte's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the latte value of the clicked latte.
    // Using the .attr("data-lattevalue") allows us to grab the value out of the "data-lattevalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var latteValue = ($(this).attr("data-lattevalue"));
    latteValue = parseInt(latteValue);
    // We then add the latteValue to the user's "counter" which is a global variable.
    // Every click, from every latte adds to the global counter.
    
    counter += latteValue;
    // All of the same game win-lose logic applies. So the rest remains unchanged.

    $("#count-tracker-div").html("Your total score is:"+ "   "+ counter);
    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      gameTime ();
    }

    else if (counter > targetNumber) {
      alert("You lose!!");
      losses++;
      gameTime ();
    }

function gameTime (){ 
  var targetNumber = '';

  var targetNumber = Math.floor(Math.random() *101)+19;

  $("#number-to-guess").text(targetNumber);

   $("#loss-tracker-div").html("losses: " +losses);

    $("#win-tracker-div").html("Wins: " + wins);

    $("#count-tracker-div").html("New score: " + counter);
    

    imageLatte.attr("data-lattevalue", numberOptions1[i]);

    $("#coffeepic1").append(imageLatte);

    

    latteValue = parseInt(latteValue);

    counter = 0;
   
  }

  

    
    
  });
