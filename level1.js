var deathCount = 0; //for hero and boss death scene switch statement
var m1Timer; //so two minions can be on the screen at once
var m2Timer;
var spiderTimer;
var monsterTimer; //ie boss timer
var heroTimer;

function Level1()
{
  //set up html
  var htmlString = '<img id="heroArms" src="images/aimStraight.png">';
  htmlString += '<img id="heroLegs" src="images/legs1.png">';
  htmlString += '<img id="fireball" src="images/fireball.png">';
  htmlString += '<img id="geyser" src="images/geyser1.png">';
  htmlString += '<img id="minion1" class="minion" src="images/minion.png">';
  htmlString += '<img id="minion2" class="minion" src="images/minion.png">';
  htmlString += '<img id="spider" src="images/spider.png">';
  htmlString += '<img id="boss" src="images/boss.png">';
  htmlString += '<img id="twinkle" src="images/twinkle1.png">';
  gameArea.innerHTML = htmlString;

  summonHero();

  var m1Count; //at 1s, 10s
  for(m1Count = 0; m1Count < 3; m1Count++)
  {
    m1Timer = setTimeout("summonMinion1()", (m1Count*9000)+1000); //takes minions 9s to cross the screen
  }

  geyserTimer = setTimeout("summonGeyser()", 5000); //at 5s

  var m2Count; //at 7s
  for(m2Count = 1; m2Count < 2; m2Count++)
  {
    m2Timer = setTimeout("summonMinion2()", (m2Count*9000)-2000);
  }

  var spiderCount; //at 10s
  for(spiderCount = 1; spiderCount < 2; spiderCount++)
  {
    spiderTimer = setTimeout("summonSpider()", spiderCount*10000);  //spider takes 20s to cross if not halted
  }

  monsterTimer = setTimeout("summonBoss()", 20000); //at 20s

  //m1Timer = setTimeout("summonMinion1()", 1000);
  //spiderTimer = setTimeout("summonSpider()", 1000);
  //monsterTimer = setTimeout("summonBoss()", 1000);
}

function killTimeouts()
{
  clearTimeout(m1Timer);
  clearTimeout(m2Timer);
  clearTimeout(monsterTimer);
  clearTimeout(geyserTimer);
}
