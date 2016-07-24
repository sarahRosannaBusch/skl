var m1;
var m2;

function summonMinion1()
{
  clearTimeout(m1Timer);
  m1 = 99; //starting position
  minion1.src = "images/minion.png";
  document.getElementById("minion1").style.left = m1 + "%";
  document.getElementById("minion1").style.visibility = "visible";
  m1Timer = setInterval("minion1Moves()", 10);
}

function summonMinion2()
{
  clearTimeout(m2Timer);
  m2 = 99;
  minion2.src = "images/minion.png";
  document.getElementById("minion2").style.left = m2 + "%";
  document.getElementById("minion2").style.visibility = "visible";
  m2Timer = setInterval("minion2Moves()", 10);
}

function minion1Moves()
{
  if(fireballHeight < 15 && fireballMoves > m1 && fireballMoves < m1+10) //fireballs one shot kill minions
  {
    fizzelFireball();
    clearInterval(m1Timer); //stops it from running minionMoves()
    m1Timer = setInterval("minion1DeathScene()", 100);
  }
  else if(m1 > geyserPos && m1 < geyserPos+5
    && document.getElementById("geyser").style.visibility == "visible") //minions avoid fire
  {
    m1 -= 5; //minion jumps out of the fire
  }
  else if(m1 > 95-heroMoves) //minions move toward the hero
  {
    m1 -= 0.1;
    document.getElementById("minion1").style.left = m1 + "%";
  }
  else //when a minion reaches him the hero dies
  {
    clearInterval(m1Timer);
    document.getElementById("minion1").style.visibility = "hidden";
    heroTimer = setInterval("deathBySlime()", 100);
  }
}

function minion2Moves()
{
  if(fireballHeight < 15 && fireballMoves > m2 && fireballMoves < m2+10) //fireballs one shot kill minions
  {
    fizzelFireball();
    clearInterval(m2Timer); //stops it from running minionMoves()
    m2Timer = setInterval("minion2DeathScene()", 100);
  }
  else if(m2 > geyserPos && m2 < geyserPos+5
    && document.getElementById("geyser").style.visibility == "visible") //minions avoid fire
  {
    m2 -= 5; //m2 jumps out of the fire
  }
  else if(m2 > 95-heroMoves) //minions move toward the hero
  {
    m2 -= 0.1;
    document.getElementById("minion2").style.left = m2 + "%";
  }
  else //when a minion reaches him the hero dies
  {
    clearInterval(m2Timer);
    document.getElementById("minion2").style.visibility = "hidden";
    heroTimer = setInterval("deathBySlime()", 100);
  }
}

////////////////////////////////////////////////////////////////////////////////
//                            Animations                                      //
////////////////////////////////////////////////////////////////////////////////

function minion1DeathScene()
{
  if(minion1.src.match("minion.png"))
    minion1.src = "images/minionDeath1.png";
  else if(minion1.src.match("1"))
    minion1.src = "images/minionDeath2.png";
  else
    document.getElementById("minion1").style.visibility = "hidden"; //minion disappears

}

function minion2DeathScene()
{
  if(minion2.src.match("minion.png"))
    minion2.src = "images/minionDeath1.png";
  else if(minion2.src.match("1"))
    minion2.src = "images/minionDeath2.png";
  else
    document.getElementById("minion2").style.visibility = "hidden"; //minion disappears
}
