  var heroMoves; //starting position of hero's right side

  function summonHero()
  {
    //xmlhttp.open("GET", "stats.xml", true);
    heroMoves = 85;
  }

  function aimUp()
  {
    if(heroArms.src.match("Down2"))
      heroArms.src = "images/aimDown.png";
    else if(heroArms.src.match("Down.png"))
      heroArms.src = "images/aimStraight.png";
    else if(heroArms.src.match("Straight"))
      heroArms.src = "images/aimUp.png";
    else
      heroArms.src = "images/aimUp2.png"
  }

  function aimDn()
  {
    if(heroArms.src.match("Up2"))
      heroArms.src = "images/aimUp.png"
    else if(heroArms.src.match("Up.png"))
      heroArms.src = "images/aimStraight.png";
    else if(heroArms.src.match("Straight"))
      heroArms.src = "images/aimDown.png";
    else
      heroArms.src = "images/aimDown2.png";
  }

  function moveLeft()
  {
    if(heroMoves > -5 && heroMoves < 85) //if he's within bounds
    {
      heroMoves += 5; //relative to right side of page
      heroWalk();
    }
  }

  function moveRight()
  {
    if(heroMoves > 4 && heroMoves < 90) //slight variations in bounds are so hero doesn't get stuck
    {
      heroMoves -= 5; //relative to right side of page
      heroWalk();
    }
  }

  function heroWalk()
  {
    if(heroLegs.src.match("1"))
      heroLegs.src = "images/legs2.png";
    else
      heroLegs.src = "images/legs1.png";

    document.getElementById("heroArms").style.right = heroMoves + "%";
    document.getElementById("heroLegs").style.right = heroMoves + "%";
  }

  ////////////////////////////////////////////////////////////////////////////////
  //                            Animations                                      //
  ////////////////////////////////////////////////////////////////////////////////

  function deathByFire()
  {
    document.getElementById("gameKey").disabled = true; //disable game key, game over
    killTimeouts();
    switch(deathCount)
    {
      case 0: case 1:
      {
        heroArms.src = "images/deathByFire1.png"; //death scene doesn't have independent arms and legs
        document.getElementById("heroLegs").style.visibility = "hidden";
        deathCount++;
      }
      break;
      case 2: case 3:
      {
        heroArms.src = "images/deathByFire2.png";
        deathCount++;
      }
      break;
      case 4:
      {
        heroArms.src = "images/deathByFire3.png";
        deathCount++;
      }
      break;
      case 5:
      {
        heroArms.src = "images/deathByFire4.png";
        deathCount--; //fire flickers between case 4 and 5 forever
      }
      break;
    }
  }

  function deathBySlime()
  {
    document.getElementById("gameKey").disabled = true; //disable game key, game over
    killTimeouts();
    switch(deathCount)
    {
      case 0:
      {
        heroArms.src = "images/deathBySlime1.png"; //death scene doesn't have independent arms and legs
        document.getElementById("heroLegs").style.visibility = "hidden";
        deathCount++;
      }
      break;
      case 1:
      {
        heroArms.src = "images/deathBySlime2.png";
        deathCount++;
      }
      break;
      case 2:
      {
        heroArms.src = "images/deathBySlime3.png";
        deathCount++;
      }
      break;
      case 3:
      {
        heroArms.src = "images/deathBySlime4.png";
        deathCount++;
      }
      break;
      case 4:
      {
        heroArms.src = "images/deathBySlime5.png";
        deathCount++;
      }
      break;
      case 5:
      {
        heroArms.src = "images/deathBySlime6.png";
        deathCount++;
      }
      break;
      case 6:
      {
        heroArms.src = "images/deathBySlime7.png";
        deathCount++;
      }
      break;
      case 7:
      {
        heroArms.src = "images/deathBySlime8.png";
        deathCount++;
      }
      break;
    }
  }

  function deathBySpider()
  {
    document.getElementById("gameKey").disabled = true; //disable game key, game over
    killTimeouts();
    switch(deathCount)
    {
      case 0:
      {
        spider.src = "images/deathBySpider1.png";
        deathCount++;
      }
      break;
      case 1:
      {
        document.getElementById("spider").style.height = "100%";
        document.getElementById("spider").style.width = "10%";
        deathCount++;
      }
      break;
      case 2:
      {
        spider.src = "images/deathBySpider2.png";
        deathCount++;
      }
      break;
      case 3:
      {
        spider.src = "images/deathBySpider3.png";
        deathCount++;
      }
      break;
      case 4:
      {
        spider.src = "images/deathBySpider4.png";
        document.getElementById("heroArms").style.visibility = "hidden";
        document.getElementById("heroLegs").style.visibility = "hidden";
        deathCount++;
      }
      break;
      default:
      {
        //document.getElementById("spider").style.visibility = "hidden";
        clearInterval(spiderTimer);
      }
    }
  }
