function setup() {
  createCanvas(400, 400);
  radio2 = createRadio();
  radio2.option(' China   ', 1);
  //radio2.html('<br>');
  radio2.option(' France   ', 2);
  radio2.option(' Germany  ', 3);
  radio2.option(' Japan  ', 4);
  radio2.option(' USA  ', 5);
}

function draw() {
  background(220);
  console.log(radio2.selected());
}