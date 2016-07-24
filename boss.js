var bossMoves;
var bossHP;
var slowed = false;

function summonBoss()
{
  bossMoves = 99; //starting position
  bossHP = 20;
  document.getElementById("boss").style.left = bossMoves + "%";
  document.getElementById("boss").style.visibility = "visible";
  monsterTimer = setInterval("Boss()", 200);
}

function Boss()
{
  if (bossHP < 0) //boss kill
  {
    fizzelFireball();
    killTimeouts();
    clearInterval(monsterTimer);
    monsterTimer = setInterval("bossDeathScene()", 75);
  }

  else if(fireballHeight > 66 && fireballMoves > bossMoves+2) //fireball head shot deals extra damage
  {
    bossHP -= 2;
    fizzelFireball();
  }

  else if(fireballHeight < 20 && fireballMoves > bossMoves+5) //fireball foot shot slows him down
  {
    bossHP--;
    fizzelFireball();
    slowed = true;
  }

  else if(fireballMoves > bossMoves+5) //body hit does normal damage
  {
    bossHP--;
    fizzelFireball();
  }

  else if(bossMoves > 95-heroMoves) //the boss moves toward the hero
  {
    moveBoss();
  }

  else //when the boss reaches the hero it's game over
  {
    clearInterval(monsterTimer);
    heroTimer = setInterval("deathByFire()", 300);
  }
}

////////////////////////////////////////////////////////////////////////////////
//                            Animations                                      //
////////////////////////////////////////////////////////////////////////////////

var twinklePos;
var twinkleHeight;

function moveBoss()
{
  if(boss.src.match("boss.png"))
  {
    boss.src = "images/boss1.png";
  }
  else if(boss.src.match("boss1"))
  {
    boss.src = "images/boss2.png";
  }
  else if(boss.src.match("boss2"))
  {
    boss.src = "images/boss3.png";
  }
  else
  {
    boss.src = "images/boss.png";
  }

  bossMoves -= 1;

  if(slowed)
  {
    clearInterval(monsterTimer);
    monsterTimer = setInterval("Boss()", 500);
  }
  document.getElementById("boss").style.left = bossMoves + "%";
}

function bossDeathScene()
{
  switch(deathCount)
  {
    case 0:
    {
      twinklePos = bossMoves-7; //head region
      twinkleHeight = 40;
      document.getElementById("twinkle").style.visibility = "visible";
      deathCount++;
    }
    break;
    case 1: case 5: case 10:
    {
      twinkle.src = "images/twinkle2.png";
      deathCount++;
    }
    break;
    case 2: case 6: case 11:
    {
      twinkle.src = "images/twinkle3.png";
      deathCount++;
    }
    break;
    case 3: case 7:
    {
      twinkle.src = "images/twinkle4.png";
      deathCount++;
    }
    break;
    case 4:
    {
      twinklePos = bossMoves-5; //belly region
      twinkleHeight = 20;
      twinkle.src = "images/twinkle1.png";
      monsterTimer = setInterval("bossDeathScene()", 50);
      deathCount++;
    }
    break;
    case 8:
    {
      boss.src = "images/stoneBoss.png";
      twinkle.src = "images/twinkle5.png";
      deathCount++;
    }
    break;
    case 9:
    {
      twinklePos = bossMoves;
      twinkleHeight = 60;
      twinkle.src = "images/twinkle1.png";
      monsterTimer = setInterval("bossDeathScene()", 25);
      deathCount++;
    }
    break;
    default:
    {
      document.getElementById("twinkle").style.visibility = "hidden";
      clearInterval(monsterTimer);
    }
    break;
  }
  document.getElementById("twinkle").style.left = twinklePos + "%";
  document.getElementById("twinkle").style.bottom = twinkleHeight + "%";
}
