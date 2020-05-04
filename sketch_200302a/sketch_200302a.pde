/*Some code was used as reference material by Processing's example of ArraylistClass.

https://processing.org/examples/arraylistclass.html

Mainly used to understand how to store and decrement objects through an array list.

The code will have multiple circles (up to 10) that bounce and squish into flatter
circles until they reach a certain limit and disappear. If time allows, will work 
on making the circles disappear into smaller circles that also bounce until
disappearing.

*/
ArrayList<DeflatingCircles> circles;

float speed = 1;
float acceleration = 9.8;
float deflate = 1;





void setup(){
  size(1000,1000);
  background(255);
  
  circles = new ArrayList<DeflatingCircles>(); //we have an array list here for deflating circles

}
void draw(){
  for(int i = circles.size()-1; i >= 0; i--){ //we make sure to loop through the array list backwards to accomodate for deleting and adding new objects
  DeflatingCircles circles = circles.get(i);//
  circles.bounce();
  circles.drawCircle();
  //gonna work on circles getting smaller as they bounce
}

class DeflatingCircles{
  float xWidth, yHeight;
  
  
  DeflatingCircles (float x, float y){
    xWidth = x;
    yHeight = y;
  }
  
 void drawCircle(){
 fill(0,204,0); //color of face
 ellipse(mouseX,mouseY, xWidth, yHeight); //shape of face
 
 float xRound = xWidth/15; //we set variables and do calculations to keep the face the same shape in different sizes
 float yRound = yHeight/15;
 
 int xCoord = round(xRound); //we round because coordinates don't use float, but rather integer
 int yCoord = round(yRound); 
 
 line(mouseX-xCoord, mouseY-yCoord, mouseX-(xCoord*3), mouseY-(yCoord*4)); //left eye
 line(mouseX-(xCoord*3), mouseY-(yCoord*4), mouseX-(xCoord*5), mouseY-yCoord);
  
 line(mouseX+xCoord, mouseY-yCoord, mouseX+(xCoord*3), mouseY-(yCoord*4)); //right eye
 line(mouseX+(xCoord*3), mouseY-(yCoord*4), mouseX+(xCoord*5), mouseY-yCoord);
  
 arc(mouseX, mouseY+(yCoord*2), xWidth/2, yHeight/2, 0, PI, CHORD); //mouth
 
 
 }
 
  
    

}
void mousePressed(){
  c1.drawCircle();
  
}
