var sun, mercury, venus, earth;
var sunI, mercuryI, venusI, earthI;
var angle = 0;
var angleSpeed = 0.2;

function preload() {
    sunI = loadImage("sprites/sun.jpg");
    mercuryI = loadImage("sprites/mercury.jpg");
    earthI = loadImage("sprites/earth.jpg");
    venusI = loadImage("sprites/venus.jpg");
}

function setup() {
    var canvas = createCanvas(800, 800);

    sun = createSprite(0, 0);
    sun.addImage("sun", sunI);
    sun.scale = 0.5;

    earth = createSprite(150, 300, 50, 50);
    earth.addImage("earth", earthI);
    earth.scale = 0.25;

    mercury = createSprite(0, 200, 50, 50);
    mercury.addImage("mercury", mercuryI);
    mercury.scale = 0.25;

    venus = createSprite(50, 250, 50, 50);
    venus.addImage("venus", venusI);
    venus.scale = 0.25;

    console.log(isTouching(sun, earth));
}


function draw() {
    background("black");
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    //rotate(angle);
    if (frameCount % 1 == 0) {
        sun.scale = sun.scale + 0.0025;
        sun.width = sun.width + 2.5;
        sun.height = sun.height + 2.5;
    }
    angle = angle + angleSpeed;
    if (isTouching(sun, earth)) {
        earth.remove();
    }
    if (isTouching(sun, mercury)) {
        mercury.remove();
    }
    if (isTouching(sun, venus)) {
        venus.remove();
    }
    drawSprites();
}

function isTouching(p1, p2) {
    if (p1.collide(p2)) {
        return true;
    } else {
        return false;
    }
}