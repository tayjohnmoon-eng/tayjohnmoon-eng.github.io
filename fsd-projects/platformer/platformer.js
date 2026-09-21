$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
  
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
toggleGrid();



    // TODO 2 - Create Platforms

createPlatform(400,0,20,290);
createPlatform(1350, 400, 50, 50);
createPlatform(100, 20, 10, 10);
createPlatform(200,600,90,30);
createPlatform(300,500,90,30);
createPlatform(400, 400, 90, 30, "purple");
createPlatform(600, 600, 90, 30, "teal");
createPlatform(700,500,90,30, "yellow");
createPlatform(900, 400,90,30, "orange");
createPlatform(1100,400,90,30, "blue");
createBadPlatform(700, 300, 90, 30, "blue");
createPlatform(300, 700, 400, 20, "green", 200, 400, 2, 0, 0, 0);
createPlatform(400, 300, 200, 20, "blue", 300, 300, 1, 100, 400, 1);
createPlatform(300, 200, 200, 20, "orange", 0, 0, 0, 200, 400, 1);
    // TODO 3 - Create Collectables

createCollectable("steve", 750, 475, 0.5, 0.7);
createCollectable("grace", 700, 600, 0.5, 0.7);
createCollectable("diamond", 300, 170, 0.5, 0.7);
createCollectable("max", 1000, 300);




    
    // TODO 4 - Create Cannons      
 createCannon("top", 600, 1000);
createCannon("right", 300, 950);

  createCannon("right", 600, 1000);
  createCannon("top", 1000, 850);
createCannon("top", 400, 2000, 20, 10, 400, 800, 2);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});