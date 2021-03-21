var player,key,door,keyimg,doorimg,playerimg,openimg,monster1,monster2,monsterimg,openbeartrap,closedbeartrap,openbeartrapimg,closedbeartrapimg;
var gamestate="start";

function preload(){
    keyimg=loadImage("key.png")
    doorimg=loadImage("door.png")
    playerimg=loadImage("player.png")
    openimg=loadImage("open.png")
     monsterimg=loadImage("monsterimg.png")
     openbeartrapimg=loadImage("openbeartrap.png")
     closedbeartrapimg=loadImage("closedbeartrap.png")
}

function setup(){
createCanvas(700,700)
player=createSprite(60,28,15,15)
player.addImage(playerimg)
player.scale=0.1

player.setCollider ("rectangle",0,0,70,70)

key1=createSprite(630,39,5,5)
key1.addImage(keyimg)
key1.scale=0.1

door=createSprite(13,623,20,40)
door.addImage(doorimg)
// door.addImage(openimg)
door.scale=0.2
 monster1=createSprite(604,222,20,20)
monster1.addImage(monsterimg)
monster1.scale=0.2

monster2=createSprite(160,558,20,20)
monster2.addImage(monsterimg)
monster2.scale=0.2

openbeartrap=createSprite(589,299,10,10)
openbeartrap.addImage(openbeartrapimg)
openbeartrap.scale=0.2
edges =createEdgeSprites();


line1=createSprite(150,100,20,190)
line2=createSprite(530,201,20,130)
line3=createSprite(150,425,20,150)
line4=createSprite(180,250,200,20)
line5=createSprite(364,250,20,130)
line6=createSprite(300,500,20,200)
line7=createSprite(556,130,20,250)
line8=createSprite(600,360,400,20)
line9=createSprite(150,500,200,20)
line10=createSprite(444,144,20,150)
line11=createSprite(64,250,200,20)
line12=createSprite(600,500,20,200)
line13=createSprite(300,650,200,20)
line14=createSprite(200,200,20,20)
line15=createSprite(200,200,20,20)

line1.debug=true
line2.debug=true
line3.debug=true
line4.debug=true
line5.debug=true
line6.debug=true
line7.debug=true
line8.debug=true
line9.debug=true
line10.debug=true
line11.debug=true
line12.debug=true
line13.debug=true
line14.debug=true
line15.debug=true
}

function draw(){
background(100,12,74)
console.log(mouseX)
console.log(mouseY)



drawSprites();


}




























