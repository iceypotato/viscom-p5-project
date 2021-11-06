/*
* Nicholas Lee
* Visual Communication Design
* Represents a poster
*/


// Declare Variables
let loadedImgBG;
let loadedSnowBG
let loadedBlackBG;
let loadedText;
let loadedBigMountain;
let loadedLeftMountain;
let loadedRightMountain
let strawberry;
let sndCelesteBSideComplete;
let notStarted = true
let moveBG = false
let movingBG;

// Loaded Image Objects
let imgBG;
let imgSnow;
let imgSnow2;
let imgBigMountain;
let imgLeftMountain;
let imgRightMountain;
let imgSmallMountain;
let imgText;

// Misc
let i = 0
let timer;


function preload() {
    // font = loadFont(comicSansReg)

    loadedImgBG = loadImage('assets/image/bg.png')
    loadedSnowBG = loadImage('assets/image/snow.png')
    loadedBlackBG = loadImage('assets/image/black.png')
    loadedText = loadImage('assets/image/celeste.png')
    loadedLeftMountain = loadImage('assets/image/left mountain.png')
    loadedRightMountain = loadImage('assets/image/right mountain.png')
    loadedBigMountain = loadImage('assets/image/middle mountain.png')
    loadedStrawberryImg = loadImage('assets/image/strawberry.png')

    soundFormats('wav', 'ogg', 'mp3')
    sndCelesteBSideComplete = loadSound('assets/mus/celeste bside chapter complete.wav') // Source: Celeste B Side Complete
    
    
}

function setup() {
    createCanvas(1280, 720);
    imgText = new LoadedImage(loadedText, 392  * 0.8, 498 * 0.8, loadedText.width * 0.8, loadedText * 0.8, 0.05, 0.05)
    imgText.allowTint = true
    imgBG = new LoadedImage(loadedImgBG, 0, -height, loadedImgBG.width * 0.8, loadedImgBG.height * 0.8)
    imgBlackBG = new LoadedImage(loadedBlackBG, 0, -height, loadedBlackBG.width * 0.8, loadedBlackBG.height * 0.8)
    imgSnow = new LoadedImage(loadedSnowBG, 0, -height, loadedSnowBG.width * 0.8, loadedSnowBG.height * 0.8)
    imgSnow2 = new LoadedImage(loadedSnowBG, 0, (-height) * 2, loadedSnowBG.width * 0.8, loadedSnowBG.height * 0.8)
    imgBigMountain = new LoadedImage(loadedBigMountain, 274 * 0.8, 188 * 0.8, loadedBigMountain.width * 0.8, loadedBigMountain.height * 0.8, 0.02, 0.02)
    imgBigMountain.allowTint = true
    imgLeftMountain = new LoadedImage(loadedLeftMountain, 0, 273*0.8, loadedLeftMountain.width*0.8, loadedLeftMountain.height*0.8, 0.01, 0.01)
    imgLeftMountain.allowTint = true
    imgRightMountain = new LoadedImage(loadedRightMountain, 783*0.8, 300*0.8, loadedRightMountain.width*0.8, loadedRightMountain.height*0.8, 0.01, 0.01)
    imgRightMountain.allowTint = true
    // imgSmallMountain = new LoadedImage(loadedSmallMountain, 0, 330 * 0.8, loadedSmallMountain.width * 0.8, loadedSmallMountain.height * 0.8, 0.01, 0.01)
    // imgSmallMountain2 = new LoadedImage(loadedSmallMountain, 681.72 * 0.8, 330 * 0.8, loadedSmallMountain.width * 0.8, loadedSmallMountain.height * 0.8, 0.01, 0.01)
    // movingBG = new ScrollingBG()


    
}

let tintNum = 0
let finishedScrolling = false
function draw() {
    // let v1 = createVector(40, 50);
    // let v2 = createVector(40, 50);
    // ellipse(v1.x, v1.y, 50, 50);
    // ellipse(v2.x, v2.y, 50, 50);
    // v1.add(v2);
    // ellipse(v1.x, v1.y, 50, 50);
    if (!moveBG) {
        background(0)
    }
    if (moveBG && imgBG.yloc !== 0) {
        EpicStuff.startMoveBackground(i)
    }
    if (imgBG.yloc === 0) {
        finishedScrolling = true
    }
    if (moveBG && finishedScrolling) {
        imgBG.draw()
        imgLeftMountain.setTint(255, tintNum)
        imgLeftMountain.draw()
        imgRightMountain.setTint(255, tintNum)
        imgRightMountain.draw()
        imgBigMountain.setTint(255, tintNum)
        imgBigMountain.draw()
        imgText.setTint(255, tintNum)
        imgText.draw()
        tintNum += 10
        if (tintNum >= 255) {
            imgBigMountain.allowTint = false
            imgLeftMountain.allowTint = false
            imgRightMountain.allowTint = false
            imgText.allowTint = false 
        }
    }

}

function mouseClicked() {
}

function keyPressed() {
    if (keyCode === ENTER && notStarted) {
        sndCelesteBSideComplete.setVolume(0.3)
        sndCelesteBSideComplete.play()
        notStarted = false
        moveBG = true
        timer = setInterval(EpicStuff.increment, 100)
    }
}