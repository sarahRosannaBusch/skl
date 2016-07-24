var fireballTimer;
var fireballMoves;
var fireballFlag = false;
var fireballHeight;

function shoot()
{
  if(fireballFlag == false) //if there isn't already a fireball out
  {
    summonFireball();
  }
}

function summonFireball()
{
  fireballFlag = true;
  fireballMoves = 98-heroMoves; //get starting position for fireball
  if(heroArms.src.match("aimUp2"))
  {
    fireballHeight = 65;
    document.getElementById("fireball").style.transform = "rotate(-40deg)";
  }
  else if(heroArms.src.match("aimUp.png"))
  {
    fireballHeight = 55;
    document.getElementById("fireball").style.transform = "rotate(-17deg)";
  }
  else if (heroArms.src.match("aimStraight"))
  {
    fireballHeight = 43;
    document.getElementById("fireball").style.transform = "rotate(0deg)";
  }
  else if (heroArms.src.match("aimDown.png"))
  {
    fireballHeight = 35;
    document.getElementById("fireball").style.transform = "rotate(20deg)";
  }
  else if (heroArms.src.match("aimDown2"))
  {
    fireballHeight = 20;
    document.getElementById("fireball").style.transform = "rotate(35deg)";
  }
  document.getElementById("fireball").style.left = fireballMoves + "%";
  document.getElementById("fireball").style.bottom = fireballHeight + "%";
  document.getElementById("fireball").style.visibility = "visible";
  fireballTimer = setInterval("moveFireball()", 100); //shoot
}

function moveFireball()
{
    fireballMoves += 5; //fireball moves forward

    if(fireballHeight > 95 || fireballHeight < 1 || fireballMoves > 99) //goes out of bounds
      fizzelFireball();
    else if(heroArms.src.match("aimUp2")) //shoots way up
      fireballHeight += 12;
    else if(heroArms.src.match("aimUp.png")) //shoots upward
      fireballHeight += 5;
    else if(heroArms.src.match("aimDown.png")) //shoots downward
      fireballHeight -= 5;
    else if(heroArms.src.match("aimDown2")) //shoots way way down
      fireballHeight -= 12;

    document.getElementById("fireball").style.left = fireballMoves + "%";
    document.getElementById("fireball").style.bottom = fireballHeight + "%";
}

function fizzelFireball()
{
  document.getElementById("fireball").style.visibility = "hidden";
  clearInterval(fireballTimer);
  fireballFlag = false;
  fireballMoves = 0; //so fireballs that hit the floor dont leave a death trap
}
/*
function fizzelFireball()
{
  clearInterval(fireballTimer);
  fireball.src = "images/fireballHit.png";
  fireballTimer = setTimeout("snuff()", 200);
}

function snuff()
{
  document.getElementById("fireball").style.visibility = "hidden";
  fireball.src = "images/fireball.png";
  fireballFlag = false;
  fireballMoves = 0; //so fireballs that hit the floor dont leave a death trap
  clearTimeout(fireballTimer);
}
*/
