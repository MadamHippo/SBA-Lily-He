function goodOrBad() {
  let randNum = Math.floor(Math.random() * 23) + 1;
  document.getElementById('fate-title-button').innerHTML = goodPlace[randNum];
}


let goodPlace = ["Blank", "<h1>Awww, Fork!</h1><br><h3>You lost 40.57 points.</h3><br>You overstated personal connection to tragedy that has nothing to do with you.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 61.14 points.</h4><br>You maintained your composure in line at the water park in Houston.",
"<h1>Awww, Fork!</h1><br><h3>You lost 53.83 points.</h3><br>You told a woman to \"smile\"",
"<h1>Ya Basic!</h1><br><h3>You lost 99.15 points.</h3><br>You rooted for the New York Yankees.",
"<h1>Ya Basic!</h1><br><h3>You lost 5.55 points.</h3><br>You used \“Facebook\” as a verb.",
"<h1>Pobody’s Nerfect!</h1><br><h3>You lost 8.20 points</h3><br>You used the term \"bro-code.\"",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 6.60 points.</h4><br>You fixed a broken tricycle for a child that loves tricycles.",
"<h1>Pobody’s Nerfect!</h1><br><h3>You lost 4010.55 points.</h3><br>You poisoned a river.",
"<h2>You Sexy Skyscraper!</h2><br><h4>You gained 53.83 points.</h4><br>You remained loyal to the Cleveland Browns.",
"<h2>You Sexy Skyscraper!</h2><br><h4>You gained 1.06 points.</h4><br>You scratched your elbow.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 814292.09 points.</h4><br>You ended slavery.",
"<h1>Awww, Bullshirt!</h1><br><h3>You lost 1.44 points.</h3><br>You blew your nose by pressing one nostril down and exhaling.",
"<h1>Awww, Bullshirt!</h1><br><h3>You lost 64.42 points.</h3><br>You revved a motorcycle.",
"<h2>Holy Shirtballs!</h2><br><h4>You gained 0.89 points.</h4><br>You pet a lamb.",
"<h2>Oh Shirt!</h2><br><h4>You gained 9875.37 points.</h4><br>You never discussed veganism unprompted.",
"<h2>Oh Shirt!</h2><br><h4>You gained 272775.62 points.</h4><br>You hosted a Syrian refugee family of five for 3 years.",
"<h2>Oh Shirt!</h2><br><h4>You gained 29.95 points.</h4><br>You attended your cousin\'s friend\'s child\'s jazz dance recital.",
"<h1>Pobody’s Nerfect!</h1><br><h3>You lost 433115.25 points.</h3><br>You committed genocide.",
"<h1>Awww, Bullshirt!</h1><br><h3>You lost 52.83 points.</h3><br>You disturbed coral reef with flippers.",
"<h1>Ya Basic!</h1><br><h3>You lost 22.22 points.</h3><br>You failed to disclose camel illness when selling said camel.",
"<h1>Pobody’s Nerfect!</h1><br><h3>You lost 824.55 points.</h3><br>You were commissioner of an American professional football league.",
"<h2>Here Yeah!</h2><br><h4>You gained 17.05 points.</h4><br>You helped a hermit crab find a new shell.",
"<h2>Here Yeah!</h2><br><h4>You gained 60.09 points.</h4><br>You helped your mom with her printer 339 times.",
"<h2>Here Yeah!</h2><br><h4>You gained 630.20 points.</h4><br>You gave out full-sized candy bars at Halloween."
];