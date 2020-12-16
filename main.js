canvaas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car-1.png";
car2_x = 10;
car2_y = 100;

backround_image = "https://postimg.cc/p9D2dqqZ"

function add() {
   background_imgTag = new Image(); //defining a variable with a new image
   background_imgTag.onload = uploadBackground;
   // setting a function, onloading this variable
   background_imgTag.src = background_image;
   // load image

   car1_imgTag = new Image();
   //defining a variable with a new image
   car1_imgTag.onload = uploadrover;
   // setting a function, onloading this variable
   car1_imgTag.src = car1_image;
   // load image 
}

function add() {
   background_imgTag = new Image(); //defining a variable with a new image
   background_imgTag.onload = uploadBackground;
   // setting a function, onloading this variable
   background_imgTag.src = background_image;
   // load image
   car2_imgTag = new Image();
   //defining a variable with a new image
   car2_imgTag.onload = uploadrover;
   // setting a function, onloading this variable
   car2_imgTag.src = car2_image;
   // load image 
}

function uploadBackground() {
   ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
   ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadBackground() {
   ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
   ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
window.addEventListener("keyup", my_keyup);
window.addEventListener("keyleft", my_keyleft);
window.addEventListener("keyright", my_keyright);

window.addEventListener("keyS", my_keydown);
window.addEventListener("keyW", my_keyup);
window.addEventListener("keyA", my_keyleft);
window.addEventListener("keyD", my_keyright);

function up() {
   if (car1_y >= 0) {
      rover_y = car1_y - 10;
      console.log("when up arrow is pressed,x=" + car1_x + "y =" + car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function down() {
   if (car1_y <= 500) {
      car1_y = car1_y + 10;
      console.log("when down arrow is pressed,x=" + car1_x + "y =" + car1_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}


function left() {
   if (car1_x >= 0) {
      car1_x = car1_x - 10;
      console.log("when left arrow is pressed,x=" + car1_x + "y =" + car1_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function right() {
   if (car1_x <= 700) {
      rover_x = rover_x + 10;
      console.log("when right arrow is pressed,x=" + car1_x + "y =" + car1_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function up() {
   if (car2_y >= 0) {
      car2_y = car2_y - 10;
      console.log("when W is pressed,x=" + car2_x + "y =" + car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function down() {
   if (car1_y <= 500) {
      rover_y = rover_y + 10;
      console.log("when S arrow is pressed,x=" + car2_x + "y =" + car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}


function left() {
   if (rover_x >= 0) {
      rover_x = rover_x - 10;
      console.log("when A is pressed,x=" + car2_x + "y =" + car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

function right() {
   if (rover_x <= 700) {
      rover_x = rover_x + 10;
      console.log("when D is pressed,x=" + car2_x + "y =" + car2_y);
      uploadBackground();
      uploadcar1();
      uploadcar2();
   }
}

if (car1_x > 700) {
   console.log(car1won);
   document.getElementById('game_status').innerHTML = "Car 1  Won!";
}