let radio2
let countryList = ['China','France','Russia','Japan','USA']

let countrySrcs = ['china.jpg','france.jpg', 'russia.jpg', 'japan.jpg', 'usa.jpg']

let videosets = [
  [
    "mediaForCC/chinaLocking.mp4",
    "mediaForCC/chinaLocking3.mp4",
    "mediaForCC/chinaLocking2(1).mp4"
  ],
  [
    "mediaForCC/hiphop1.mp4",
    "mediaForCC/hiphop2.mp4",
    "mediaForCC/hiphop3.mp4"
  ],
  [   
    "mediaForCC/animation1",
    "mediaForCC/animation2",
    "mediaForCC/animation3"
  ],
  [    
    "mediaForCC/japanHipHip.mp4",
    "mediaForCC/japanKrump.mp4",
    "mediaForCC/japanPopping.mp4"
    ],
  [    
    "mediaForCC/litefeet1.mp4",
    "mediaForCC/litefeet2.mp4",
    "mediaForCC/litefeet3.mp4"
    ]
]
let v1,v2,v3
function setup() {
  createCanvas(400,400);
  radio2 = createRadio();
  radio2.option(' China   ', 1);
  radio2.option(' France   ', 2);
  radio2.option(' Russia  ', 3);
  radio2.option(' Japan  ', 4);
  radio2.option(' USA  ', 5);
  radio2.changed(changeCountry)
  
  background(220);
  imgElement = createImg(
    'france.jpg',
    'the p5 magenta asterisk'
  );
  imgElement.position (0,0)
  imgElement.size(400,400)
  
  v1= createVideo("chinaLocking.mp4",vidLoad)
  v1.position(380,0)
  v1.size(300,150)
  v2= createVideo("chinaLocking3-1.mp4",vidLoad)
  v2.position(380,200)
  v2.size(300,150)
  v3 = createVideo("japanHipHip-1.mp4", vidLoad)
  v3.position(380, 400)
  v3.size(300, 150)



}
function vidLoad() {
  v1.loop();
  v1.play();
  v2.loop();
  v2.play();
  v3.loop();
  v3.play();
}
function changeCountry(){
  let index = radio2.value()-1
  print(countryList[index])
  // imgElement.removeAttribute('src')  
   imgElement.attribute("src",countrySrcs[index])
  let currentSet = videosets[index]
  
  v1.attribute("src",currentSet[0])
  v2.attribute("src",currentSet[1])
  v3.attribute("src",currentSet[2])
  v4.attribute("src",currentSet[3])
  v5.attribute("src",currentSet[4])
  
  vidLoad()
  
}
let imgElement
function draw() {
  
}