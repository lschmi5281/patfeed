function checkIt() {
  // Initialize scores
  var Clay= 0;
  var Tony= 0;
  var Hannah= 0;
  var Justin= 0;
  var Bryce= 0;
  var Alex= 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'Clay') {
        Clay++;
      }
      else if (e.value == 'Tony') {
        Tony++;
      }
      else if (e.value == 'Hannah') {
        Hannah++;
      }
      else if (e.value == 'Justin') {
      Justin++;
      }
      else if (e.value == 'Bryce') {
        Bryce++;
      }
      else if (e.value == 'Alex') {
        Alex++;
      }
    }

  }

  // Determine result
  var counts = "Clay Jensen: " + Clay + ", " +
               "Tony: " + Tony  + ", " +
               "Hannah Baker: " + Hannah + ", " +
               "Justin: " + Justin  + ", " +
               "Bryce: " + Bryce  + ", " +
               "Alex Standall: " + Alex;

  // What is the highest value?
  var max = Math.max(Clay, Tony, Hannah, Justin, Bryce, Alex);

  // Form a message
  var message;

  if (max == Clay) {
    title = "Which 13 Reasons Why Character Are You?";
    message = "Welcome to your tape, Clay Jensen.";
    text = "You are a very caring person and also a good friend.  You will do anything to make sure your friends are treated right.";
  }

  else if (max == Tony) {
    title = "Which 13 Reasons Why Character Are You?";
    message = "You are Tony.";
    text = "You are good at keeping promises to help a friend and follow instructions carefully.";
  }

  else if (max == Hannah) {
    title = "Which 13 Reasons Why Character Are You?";
    message = "Hey, it's Hannah. Hannah Baker.";
    text = "You have a lot of problems, but you let them build up in you until you can't take it anymore." ;
  }

  else if (max == Justin) {
    title = "Which 13 Reasons Why Character Are You?";
    message = "Welcome to your tape, Justin.";
    text = "You try to hide things to protect people, but overall you are a good person.  You are also a happy person, but you hide the pain of what you really are going through";
  }

  else if (max == Bryce) {
    title = "Which 13 Reasons Why Character Are You?";
    message = "Welcome to your tape, Bryce.";
    text = "You are selfish and cocky.  You think everyone wants you, and you don't don't mind fighting someone that is against you.";
  }

  else if (max == Alex) {
    title = "Which 13 Reasons Why Character Are You?";
    message = "Welcome to your tape, Alex Standall.";
    text = "You struggle with being happy.  You let guilt get the better of you";
  }


  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = message;
  document.getElementById('result-text').innerHTML = text;
}
