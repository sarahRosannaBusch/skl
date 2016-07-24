var geyserCounter; //for switch statement
var geyserPos;
var geyserTimer;

function summonGeyser()
{
  geyserCounter = 0;
  geyserPos = Math.random()*100; //random generated a number between 0 and 1
  if(geyserPos > 25 && geyserPos < 50) //to give the hero a safe zone and monsters can get in the room
  {
    document.getElementById("geyser").style.visibility = "visible";
    document.getElementById("geyser").style.left = geyserPos + "%";
    clearTimeout(geyserTimer);
    geyserTimer = setInterval("Geyser()", 1000);
  }
  else
  {
    geyserTimer = setTimeout("summonGeyser()", 10); //summon a new geyser right away
  }
}

function Geyser()
{
  switch(geyserCounter)
  {
    case 0: case 6:
    {
      geyser.src = "images/geyser2.png";
      geyserCounter++;
    }
    break;
    case 1: case 5:
    {
      geyser.src = "images/geyser3.png";
      geyserCounter++;
    }
    break;
    case 2: case 4:
    {
      if(geyserPos+5 < 100-heroMoves && geyserPos > 80-heroMoves)
        heroTimer = setInterval("deathByFire()", 200);

      geyser.src = "images/geyser4.png";
      geyserCounter++;
    }
    break;
    case 3:
    {
      if(geyserPos+5 < 100-heroMoves && geyserPos > 85-heroMoves)
        heroTimer = setInterval("deathByFire()", 200);

      geyser.src = "images/geyser3.png"
      //geyser.src = "images/geyser5.png";
      geyserCounter++;
    }
    break;
    default:
    {
      geyser.src = "images/geyser1.png";
      document.getElementById("geyser").style.visibility = "hidden";
      clearInterval(geyserTimer);
      var nextGeyser = Math.random();
      nextGeyser *= 10000;
      geyserTimer = setTimeout("summonGeyser()", nextGeyser);
    }
  }
}
