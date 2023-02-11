// Setting up the experience, by the way, you just died.
alert("You just died. Welcome! Everything is fine.");



// A random search response:
function statusAlert() {

  const databaseResult = Math.floor(Math.random()*2);

  let message, image;
  if (databaseResult === 0) {
    message = "You are doing great! That 'Best Person Award' will soon be yours!"
    
  } else {
    message = "Pobody's Nerfect?! Keep trying, you'll get to the Good place eventually!"

  }

  alert(message);

}



