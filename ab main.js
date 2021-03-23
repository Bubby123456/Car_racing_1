canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
car_1_width=120;
car_1_height=70;
car_1_image="Car_1.png"
car_1_x=10;
car_1_y=10;

car_2_width=120;
car_2_height=70;
car_2_image="Car_2.jpg";
car_2_x=10;
car_2_y=100;
background_image="back.jpg";

function add()
{
    background_imgtag= new Image();
    
    background_imgtag.src=background_image;
    
    car_1_imgTag=new Image();
    car_1_imgTag.onload=uploadcar_1;
    car_1_imgTag.src=car_1_image;

    car_2_imgTag=new Image();
    car_2_imgTag.onload=uploadcar_2;
    car_2_imgTag.src=car_2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width, canvas.height);
}

function uploadcar_1() {
    ctx.drawImage(car_1_imgTag,car_1_x,car_1_y,car_1_width,car_1_height);
}

function uploadcar_2() {
    ctx.drawImage(car_2_imgTag,car_2_x,car_2_y,car_2_width,car_2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38') {
        car_1_up();
        console.log("up arrow key");
    }
    if (keyPressed=='40') {
        car_1_down();
        console.log("down arrow key");
    }
    if (keyPressed=='37') {
        car_1_left();
        console.log("left arrow key");
    }
    if (keyPressed=='39') {
        car_1_right();
        console.log("right arrow key");
    }
    if (keyPressed=='87') {
        car_2_up();
        console.log("w"+"key");
    }
    if (keyPressed=='83') {
        car_2_down();
        console.log("s"+"key");
    }
}

