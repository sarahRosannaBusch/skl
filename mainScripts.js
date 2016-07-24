//var xhr = new XMLHttpRequest();

/*function loadXMLDoc()
{
  var xhr = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
  {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {

    }
  };
  xmlhttp.open("GET", "stats.xml", true);
  xmlhttp.send();
}*/

function formFocus() //keeps focus on game key textbox
{
  document.getElementById("gameKey").focus();
}

function startGame() //called when startButton is clicked
{
  document.getElementById("startButton").disabled = "true";
  Level1(); //changes up the html to level 1 stuff
}

function userInput(event) //this is called from the html textbox onkeydown event
{
    var key = event.keyCode;
    switch(key)
    {
      case 87: case 38://W, up
        aimUp(); break;
      case 83: case 40: //S, down
        aimDn(); break;
      case 65: case 37: //A, left arrow
        moveLeft(); break;
      case 68: case 39: //D, right arrow
        moveRight(); break;
      case 32: //space bar
        shoot();
      break;
      default: break;
    }
}
