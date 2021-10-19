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

}
function draw() {
  // x=x+changex;
  // y=y+changey;
  background(200);

  if(titlepage==true){
    image(titleimg, 0, 0);

  }

  // if (filledpage==true){
  //   // square(exitX,exitY,20);
  //   image(filledimg,0,0);
  //
  //   // square(exitX,exitY,20);
  //   }
  if (overview3==true){
    // square(exitX,exitY,20);
    // image(haywardimg,0,0);
    // square(exitX,exitY,20);
    }
  // if (overview4==true){
  //     // square(exitX,exitY,20);
  //     image(unionimg,0,0);
  //     // square(exitX,exitY,20);
  //   }
  // if (overview5==true){
  //       // square(exitX,exitY,20);
  //       image(newarkimg,0,0);
  //       // square(exitX,exitY,20);
  //     }
  // if (newpage==true){
  //
  //     image(newlistimg,0,0);
  //
  //
  // }
  // if (overview==true){
  //   image(haywardimg,0,0);
  // }
//   if(x>300 || x<0){
//  changex=changex*-1;
// }
// if(y<0 || y>300){
//   changey=changey*-1
// }
  // noLoop();

// rect(355,804,100,100);
}

function mousePressed(){

  if (mouseY>0 && mouseY<800 && titlepage==true){
    titlepage = false;
    addresspage = true;
    if (addresspage==true){
      // square(exitX,exitY,20);
      image(addressimg,0,0);

      // square(exitX,exitY,20);
      }

  }
  if (mouseY>415 && mouseY<480 && mouseX>50 && mouseX<350 && addresspage==true){
    addresspage = false;
    filledpage = true;
    if (filledpage==true){
      // square(exitX,exitY,20);
      image(filledimg,0,0);

      // square(exitX,exitY,20);
      }

  }
  if (mouseY>795 && mouseY<830 && mouseX>50 && mouseX<350 && filledpage==true){
    filledpage = false;
    listpage = true;
    if (listpage==true){
      // square(exitX,exitY,20);
      image(listimg,0,0);

      // square(exitX,exitY,20);
      }

  }
  if (mouseY>480 && mouseY<580 && mouseX>50 && mouseX<350 && listpage==true){
    listpage = false;
    selectedpage = true;
    if (selectedpage==true){
      // square(exitX,exitY,20);
      image(selectedimg,0,0);

      // square(exitX,exitY,20);
      }
      // rect(255,680,140,50);
  }
  if (mouseY>680 && mouseY<730 && mouseX>255 && mouseX<395 && selectedpage==true){
    selectedpage = false;
    drivingpage = true;
    if (drivingpage==true){
      // square(exitX,exitY,20);
      image(drivingimg,0,0);

      // square(exitX,exitY,20);
      }

  }
  if (mouseY>0 && mouseY<300 && drivingpage==true){
    drivingpage = false;
    arrivedpage = true;
    if (arrivedpage==true){
      // square(exitX,exitY,20);
      image(arrivedimg,0,0);

      // square(exitX,exitY,20);
      }

  }

}
