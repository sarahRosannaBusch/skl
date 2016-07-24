var spiderPos;
var spiderHalt;
var spiderHP;

function summonSpider()
{
  clearTimeout(spiderTimer); //keeps timing consistent
  spider.src = "images/spider.png";
  document.getElementById("spider").style.height = "15%";
  spiderHP = 0;
  spiderPos = 99;
  //spiderHalt = false;
  document.getElementById("spider").style.left = spiderPos + "%";
  document.getElementById("spider").style.visibility = "visible";
  spiderTimer = setInterval("Spider()", 400);
}

function Spider()
{
  if(spiderPos < 87-heroMoves && spiderPos > 85-heroMoves) //spider kills hero
  {
    clearInterval(spiderTimer);
    spiderTimer = setInterval("deathBySpider()", 200);
  }
  else if(fireballHeight > 92 && fireballMoves > spiderPos+2 && fireballMoves < spiderPos+50)
  {
    fizzelFireball();
    if(spiderHP < 1) //spider dies
    {
      clearInterval(spiderTimer);
      document.getElementById("spider").style.visibility = "hidden";
    }
    /*else //spider takes damage if hit by fireball
    {
      spiderHP--;
    }*/
  }
  else //spider moves forward
  {
    spiderPos -= 1;
    //if(spiderHP == 2)
    //{
      if(spider.src.match("spider1"))
        spider.src = "images/spider.png";
      else
        spider.src = "images/spider1.png";
    //}
    /*else //if spider is damaged
    {
      if(spider.src.match("spider.png") || spider.src.match("spiderA"))
        spider.src = "images/spiderA.png";
      else
        spider.src = "images/spider1A.png";
    }*/
    document.getElementById("spider").style.left = spiderPos + "%";
  }
}

function spiderImmobilized()
{
  clearTimeout(spiderTimer);
  spiderHalt = false;
  spiderTimer = setInterval("Spider()", 10);
}
