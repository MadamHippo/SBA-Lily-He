function goodOrBad() {
  let randomFate = Math.floor(Math.random() * 23) + 1;
  document.getElementById('fate-title-button').innerHTML = goodPlace[randomFate];
}

// List collections:
let goodPlace = ["Blank", "<h1>Awww, Fork!</h1><br><h3>You lost 40.57 points.</h3><br>You tried to cheat on the point system.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 61.14 points.</h4><br>You made a donation to a charity recommended by the point system.",
"<h1>Awww, Fork!</h1><br><h3>You lost 53.83 points.</h3><br>You used the point system to manipulate others.",
"<h1>Ya Basic!</h1><br><h3>You lost 99.15 points.</h3><br>You used the point system to brag to your friends.",
"<h1>Ya Basic!</h1><br><h3>You lost 5.55 points.</h3><br>You made a joke about the point system to someone who didn't understand it.",
"<h1>Pobody's Nerfect!</h1><br><h3>You lost 8.20 points</h3><br>You tried to hack the point system.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 6.60 points.</h4><br>You helped a friend improve their point score.",
"<h1>Pobody's Nerfect!</h1><br><h3>You lost 4010.55 points.</h3><br>You intentionally tampered with the point system.",
"<h2>You Sexy Skyscraper!</h2><br><h4>You gained 53.83 points.</h4><br>You remembered sister's birthday",
"<h2>You Sexy Skyscraper!</h2><br><h4>You gained 1.06 points.</h4><br>You reported a glitch in the point system.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 814292.09 points.</h4><br>You proposed a new, fairer point system.",
"<h1>Awww, Bullshirt!</h1><br><h3>You lost 1.44 points.</h3><br>You made fun of the point system to someone who believed in it.",
"<h1>Awww, Bullshirt!</h1><br><h3>You lost 64.42 points.</h3><br>Buying your loved ones a prescription odor control deodorant for Christmas with a card that reads *hint, hint*.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 0.89 points.</h4><br>You helped someone understand how the point system works.",
"<h2>Oh Shirt!</h2><br><h4>You gained 9875.37 points.</h4><br>You used the point system to inspire positive change in your community.",
"<h2>4 Oreos From Heaven!</h2><br><h4>You gained 27275.62 points.</h4><br>You purified a water source for a rural (village): Population > 650)",
"<h2>Oh Shirt!</h2><br><h4>You gained 29.95 points.</h4><br>Planted rare baobob tree in Madagascar.",
"<h1>Pobody's Nerfect!</h1><br><h3>You lost 433115.25 points.</h3><br>You committed genocide.",
"<h2>Bells Yeah!</h2><br><h4>You gained 8192.09 points.</h4><br>You convinced Michael to stop his evil reboot plan.",
"<h1>Awww, Bullshirt!</h1><br><h3>You lost 1.44 points.</h3><br>You wore a fedora and took a selfie.",
"<h1>Awww, Bullshirt!</h1><br><h3>You lost 64.42 points.</h3><br>Drinking labor-intensive cashew milk knowing the negative ecological and human rights impact of the legume industry.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 0.89 points.</h4><br>Sang to a child",
"<h2>Bells Yeah!</h2><br><h4>You gained 9875.37 points.</h4><br>Donating your kidney to a stranger.",
"<h2>Best Person!</h2><br><h4>You gained 752775.62 points.</h4><br>Ending slavery",
"<h2>Best Person!</h2><br><h4>You gained 29.95 points.</h4><br>Giving up your seat on a crowded train."
];