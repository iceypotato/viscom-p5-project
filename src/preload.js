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
let loadedCloud1;
let loadedCloud2;
let loadedCloud3;
let playerImage
let platformImage

function preload() {
    // font = loadFont(comicSansReg)

    loadedImgBG = loadImage('assets/image/bg.png')
    loadedGround = loadImage('assets/image/ground.png')
    loadedSnowBG = loadImage('assets/image/snow.png')
    loadedBlackBG = loadImage('assets/image/black.png')
    loadedText = loadImage('assets/image/celeste.png')

    loadedLeftMountain = loadImage('assets/image/left mountain.png')
    loadedRightMountain = loadImage('assets/image/right mountain.png')
    loadedBigMountain = loadImage('assets/image/middle mountain.png')

    loadedStrawberryImg = loadAnimation('assets/image/strawberry.png')

    loadedCloud1 = loadImage('assets/image/cloud.png')
    loadedCloud2 = loadImage('assets/image/cloud 2.png')
    loadedCloud3 = loadImage('assets/image/cloud 3.png')

    soundFormats('wav', 'ogg', 'mp3')
    sndCelesteBSideComplete = loadSound('assets/mus/celeste bside chapter complete.wav') // Source: Celeste B Side Complete
    sndStrawberryGet = loadSound('assets/mus/game_gen_strawberry_red_get_1000.wav')
    sndCrystalHeartGet = loadSound('assets/mus/crystal heart get.wav')

    playerImage = loadAnimation('assets/player/player.png')

    platformImage = loadAnimation('assets/platform/platform.png')
    
    groundImage = loadAnimation('assets/platform/ground.png')
    
}