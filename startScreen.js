function startScreen()
{
  //set up html
  var htmlString = '<img id="heroArms" src="images/aimStraight.png">';
  htmlString += '<img id="heroLegs" src="images/legs1.png">';
  htmlString += '<img id="fireball" src="images/fireball.png">';
  htmlString += '<p id="story">';
  htmlString += 'After placing the crystal in the stone, you discover ';
  htmlString += 'that the rest of your party is dead and all of your ';
  htmlString += 'armor and weapons are broken. Luckily the pyromancer ';
  htmlString += 'taught you how to conjure a single fireball, because the ';
  htmlString += 'crystal must be defended until the process is complete.';
  htmlString += '</p>';
  gameArea.innerHTML = htmlString;

  summonHero();
}
