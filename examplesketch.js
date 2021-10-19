//////////
//////////
//////////
////////// Trashport
//////////
//////////
//////////
//////////
/////////by Nat Atlaw
////////
///////
let titleimg;
let addressimg;
let filledimg;
let listimg;
let selectedimg;
let drivingimg;
let arrivedimg;
// let arrowimg;
let newlistimg;

var x =329;
var y =310;

var backX = 350;
var backY=30;

var listX = 355;
var listY = 810;


let titlepage = true;
let addresspage = false;
let filledpage = false;
let listpage = false;
let selectedpage = false;
let drivingpage = false;
let arrivedpage = false;


var counter = 10;
function preload(){
  // img = loadImage('shrekophone.jpg');
  titleimg = loadImage('title.png');
  addressimg = loadImage('address.png');
  filledimg = loadImage('filled.png');
  listimg = loadImage('list.png');
  selectedimg = loadImage('selected.png');
  drivingimg = loadImage('driving.png');
  arrivedimg = loadImage('arrived.png');



  // newlistimg = loadImage('newlist.jpg');
  // arrowimg = loadImage('arrow.png');

}


function setup() {
  createCanvas(428,926);
  // createCanvas(600,600);
  frameRate(5);
}
function draw() {
  // x=x+changex;
  // y=y+changey;
  background(200);

  if(titlepage==true){
    image(titleimg, 0, 0);

  }
  if (addresspage==true){
    // square(exitX,exitY,20);
    image(addressimg,0,0);

    // square(exitX,exitY,20);
    }
    if (filledpage==true){
      // square(exitX,exitY,20);
      image(filledimg,0,0);

      // square(exitX,exitY,20);
      }
      if (listpage==true){
        // square(exitX,exitY,20);
        image(listimg,0,0);

        // square(exitX,exitY,20);
        }
        if(selectedpage==true){
          // square(exitX,exitY,20);

          image(selectedimg,0,0);
          stroke(255,0,0);
          strokeWeight(4);
          noFill();
          ellipse(x,y,25,24);
          if(counter==10){
            // stroke(0,0,0);
            // strokeWeight(4);
            // noFill();
            // ellipse(329,310,25,24);
            x=1000;
            y=1000;
            counter=counter-10;
          }
          else if(counter==0){
            counter = counter+10;
            x=329;
            y=310;
          }



          // square(exitX,exitY,20);
          }
          if (drivingpage==true){
            // square(exitX,exitY,20);
            image(drivingimg,0,0);

            // square(exitX,exitY,20);
            }
            if (arrivedpage==true){
              // square(exitX,exitY,20);
              image(arrivedimg,0,0);

              // square(exitX,exitY,20);
              }

  //
  // if (overview3==false){
  //
  //   }

}

function mousePressed(){

  if (mouseY>0 && mouseY<800 && titlepage==true){
    titlepage = false;
    addresspage = true;


  }
  if (mouseY>415 && mouseY<480 && mouseX>50 && mouseX<350 && addresspage==true){
    addresspage = false;
    filledpage = true;


  }
  if (mouseY>795 && mouseY<830 && mouseX>50 && mouseX<350 && filledpage==true){
    filledpage = false;
    listpage = true;


  }
  if (mouseY>480 && mouseY<580 && mouseX>50 && mouseX<350 && listpage==true){

    listpage = false;
    selectedpage = true;



      // rect(255,680,140,50);
  }
  if (mouseY>680 && mouseY<730 && mouseX>255 && mouseX<395 && selectedpage==true){
    selectedpage = false;
    drivingpage = true;


  }
  if (mouseY>0 && mouseY<300 && drivingpage==true){
    drivingpage = false;
    arrivedpage = true;


  }
  if(listpage == true && mouseY>0 && mouseY<50 & mouseX>0 && mouseX<50){

    addresspage = true;

    filledpage = false;
    listpage = false;
    selectedpage = false;
    drivingpage = false;
    arrivedpage = false;
  }
  if(selectedpage == true && mouseY>0 && mouseY<50 & mouseX>0 && mouseX<50){

    addresspage = true;

    filledpage = false;
    listpage = false;
    selectedpage = false;
    drivingpage = false;
    arrivedpage = false;
  }


}
