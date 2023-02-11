function goodOrBad() {
  let randomFate = Math.floor(Math.random() * 23) + 1;
  document.getElementById('fate-content').innerHTML = goodPlace[randomFate];
}

// List collections:
let goodPlace = [
  "Blank", 
  "<h2>Awww, Fork!</h2><br><h3>You lost 40.57 points.</h3><br>Spitting out a piece of gum and sticking it onto public property.",
  "<h2>Holy Shirtballs!</h2><br><h3>You gained 61.14 points.</h3><br>You made a donation to a charity recommended by The Good Place.",
  "<h2>Awww, Fork!</h2><br><h3>You lost 53.83 points.</h3><br>You used the point system to shame and manipulate others.",
  "<h2>Ya Basic!</h2><br><h3>You lost 99.15 points.</h3><br>You used the point system to brag to your friends.",
  "<h2>Ya Basic!</h2><br><h3>You lost 5.55 points.</h3><br>You made a joke about your wife even though she told you not to tell it.",
  "<h2>Pobody's Nerfect!</h2><br><h3>You lost 8.20 points</h3><br>You tried to teach CSS to a blind man.",
  "<h2>Holy Shirtballs!</h2><br><h4>You gained 6.60 points.</h4><br>You helped a friend move furnite (1-story, no stairs).",
  "<h2>Pobody's Nerfect!</h2><br><h3>You lost 4010.55 points.</h3><br>You intentionally tampered with the point system.",
  "<h2>You Sexy Skyscraper!</h2><br><h3>You gained 53.83 points.</h3><br>You remembered sister's birthday",
  "<h2>You Sexy Skyscraper!</h2><br><h3>You gained 2.06 points.</h3><br>You returned an item to the lost & found. (Item value > $5.)",
  "<h2>4 Oreos From Heaven!</h2><br><h3>You gained 814292.09 points.</h3><br>You ended a war.",
  "<h2>Awww, Bullshirt!</h2><br><h3>You lost 1.44 points.</h3><br>Eating a plant-based diet while also making a snarky comment about how it's better for the environment.",
  "<h2>Awww, Bullshirt!</h2><br><h3>You lost 64.42 points.</h3><br>Buying your loved ones a prescription odor control deodorant for Christmas with a card that reads *hint, hint*.","<h2>Holy Shirtballs!</h2><br><h3>You gained 0.89 points.</h3><br>You helped a squirrel find his lost acorn.",
  "<h2>Oh Shirt!</h2><br><h3>You gained 9875.37 points.</h3><br>You used the point system to inspire positive change in your community.",
  "<h2>4 Oreos From Heaven!</h2><br><h3>You gained 2775.62 points.</h3><br>You purified a water source for a rural (village)(Population > 650)",
  "<h2>Oh Shirt!</h2><br><h3>You gained 29.95 points.</h3><br>Planted rare baobob tree in Madagascar.",
  "<h2>Pobody's Nerfect!</h2><br><h3>You lost 433115.25 points.</h3><br>You committed mass genocide.",
  "<h2>Bells Yeah!</h2><br><h3>You gained 8192.09 points.</h3><br>You convinced Michael to stop his evil reboot plan.",
  "<h2>Awww, Bullshirt!</h2><br><h3>You lost 1.44 points.</h3><br>You wore a fedora and took a selfie.",
  "<h2>Awww, Bullshirt!</h2><br><h3>You lost 64.42 points.</h3><br>Drinking labor-intensive cashew milk knowing the negative ecological and human rights impact of the legume industry.",
  "<h2>Holy Shirtballs!</h2><br><h3>You gained 0.89 points.</h3><br>Sang a lullably to a child.",
  "<h2>Best Person!</h2><br><h3>You gained 9875.37 points.</h3><br>Donating your kidney to a stranger.",
  "<h2>Best Person!</h2><br><h3>You gained 752775.62 points.</h3><br>Ending slavery.",
  "<h2>Best Person!</h2><br><h3>You gained 9.95 points.</h3><br>Giving up your seat on a crowded train."
];