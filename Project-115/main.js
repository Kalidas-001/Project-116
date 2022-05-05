mustach_x = 0;
mustach_y = 0; 

function preload()
{
    mustach = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() 
{canvas = createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);}

function modelLoaded()
{
    console.log("posenet is innitialised");
}

function gotposes(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        mustach_x = results[0].pose.nose.x-30;
        nosey=results[0].pose.nose.y;
        mustach_y = results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
    }
}


function draw()
{
    image(video,0,0,300,300);
    image(mustach,mustach_x,150,90)

}

function take_snapshot()
{
    save('aditya.png');
}