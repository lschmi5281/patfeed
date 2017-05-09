function checkIt() {
  // Initialize scores
  var Sloth= 0;
  var Kitten= 0;
  var Bear= 0;
  var Cheetah= 0;
  var Dog= 0;
  var Pig= 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'Sloth') {
        Sloth++;
      }
      else if (e.value == 'Kitten') {
        Kitten++;
      }
      else if (e.value == 'Bear') {
        Bear++;
      }
      else if (e.value == 'Cheetah') {
      Cheetah++;
      }
      else if (e.value == 'Dog') {
        Dog++;
      }
      else if (e.value == 'Pig') {
        Pig++;
      }
    }

  }

  // Determine result
  var counts = "Sloth: " + Sloth + ", " +
               "Kitten: " + Kitten  + ", " +
               "Bear: " + Bear + ", " +
               "Cheetah: " + Cheetah  + ", " +
               "Dog: " + Dog  + ", " +
               "Pig: " + Pig;

  // What is the highest value?
  var max = Math.max(Sloth, Kitten, Bear, Cheetah, Dog, Pig);

  // Form a message
  var message;

  if (max == Sloth) {
    title = "We Can Guess Which Animal You Are";
    message = "You are a sloth.";
    text = "You love eating and just chilling.  You value you time.";
  }

  else if (max == Kitten) {
    title = "We Can Guess Which Animal You Are";
    message = "You are a kitten.";
    text = "You love to take naps and cuddle up.  You are a light-hearted person.";
  }

  else if (max == Bear) {
    title = "We Can Guess Which Animal You Are";
    message = "You are a bear.";
    text = "You eat a good amount of food and live day by day." ;
  }

  else if (max == Cheetah) {
    title = "We Can Guess Which Animal You Are";
    message = "You are a cheetah.";
    text = "You are fast and lean.  You love running and you're fast too!";
  }

  else if (max == Dog) {
    title = "We Can Guess Which Animal You Are";
    message = "You are a dog.";
    text = "You like being around people and hanging out.";
  }

  else if (max == Pig) {
    title = "We Can Guess Which Animal You Are";
    message = "You are a pig.";
    text = "You love eating like it is a sport.  You like getting in the mud and playing too.";
  }


  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = message;
  document.getElementById('result-text').innerHTML = text;
}
