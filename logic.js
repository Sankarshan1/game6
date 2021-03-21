function walk(){
    

    
    }
    
    if (gamesate="start") {
        text("PressSpaceToPLay")
        
    }
    if (keyCode=32 && gamestate="start") {
        gamestate="play"
    }
    if (gamestate="play") {
        if (keyDown("UP_ARROW")){
            player.y-=4
            
            }
            if (keyDown("DOWN_ARROW")){
                player.y+=4
                
            }
            if (keyDown("RIGHT_ARROW")){
                player.x+=4
                    
            }
            if (keyDown("LEFT_ARROW")){
                 player.x-=4
                       
            }
    }
    
    if (player.isTouching(doorimg)) {
        text("GrabTheKeyFirst")
    }
    if (player.isTouching(openimg)) {
        text("PressBackspaceToRestart")
    }
    function Touch(){
        
    if (player.isTouching(line1)||
    player.isTouching(line1)||
    player.isTouching(line2)||
    player.isTouching(line3)||
    player.isTouching(line4)||
    player.isTouching(line5)||
    player.isTouching(line6)||
    player.isTouching(line7)||
    player.isTouching(line8)||
    player.isTouching(line9)||
    player.isTouching(line10)||
    player.isTouching(line11)||
    player.isTouching(line12)||
    player.isTouching(line13)||
    player.isTouching(line14)||
    player.isTouching(line15))
    
    {
    player.x = 60
    player.y = 25
    }
    }
    
    
    
    
    function edgecollide(){
        
    player.collide(edges[0])
    player.collide(edges[1])
    player.collide(edges[2])
    player.collide(edges[3])
    
    
    }
    
    
    function keylogic(){
        
    if(player.isTouching(key1)){
        stroke(100)
        fill(0)
        text ("The Door is Open", width/2,height/2)
        
        door.scale = 0.8
        door.addImage(openimg)
        
    }
    }