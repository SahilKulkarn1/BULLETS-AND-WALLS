var thickness, wall; 
var  bullet ,speed, weight; 




function setup() { 
  createCanvas(1400,400);
  speed=random(223,321)
weight=random(30,52)

  bullet =createSprite(50,200,50,50)
  bullet .velocityX=speed 
wall=createSprite(1200,200,thickness,height/2)
thickness=random(22,83)

}








function draw() {
  background(0);


  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0
    var damage=0.5 * weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
    wall.shapecolor="red"
    }
    
    if(damage<10)
    {
    wall.shapeColor="green"
    }


  }
  





drawSprites();
}


function hasCollided(object1,object2)
{
  bulletRightEdge=object1.x + object1.width
  wallLeftEdge=object2.x
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false 
}