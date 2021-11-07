/*
* Nicholas Lee
* Visual Communication Design
* Represents an interactive poster
*/

// Loaded Image Objects
let imgBG;
let imgSnow;
let imgSnow2;
let imgBigMountain;
let imgLeftMountain;
let imgRightMountain;
let imgSmallMountain;
let imgText;

function setup() {
    createCanvas(1280, 720);

    imgText = new LoadedImage(loadedText, 392  * 0.8, 498 * 0.8, loadedText.width * 0.8, loadedText.height * 0.8, 0.05, 0.04)
    imgText.allowTint = true

    imgBG = new LoadedImage(loadedImgBG, 0, -height * 5, loadedImgBG.width * 0.8, loadedImgBG.height * 0.8)
    imgBlackBG = new LoadedImage(loadedBlackBG, 0, -height * 4, loadedBlackBG.width * 0.8, loadedBlackBG.height * 0.8)
    imgSnow = new LoadedImage(loadedSnowBG, 0, -height, loadedSnowBG.width * 0.8, loadedSnowBG.height * 0.8)
    imgSnow2 = new LoadedImage(loadedSnowBG, 0, (-height) * 3, loadedSnowBG.width * 0.8, loadedSnowBG.height * 0.8)
    imgSnow3 = new LoadedImage(loadedSnowBG, 0, (-height) * 2, loadedSnowBG.width * 0.8, loadedSnowBG.height * 0.8)

    imgGround = new LoadedImage(loadedGround, 0, 637 * 0.8, loadedGround.width * 0.8, loadedGround.height * 0.8)

    imgBigMountain = new LoadedImage(loadedBigMountain, 274 * 0.8, 188 * 0.8, loadedBigMountain.width * 0.8, loadedBigMountain.height * 0.8, 0.02, 0.02)
    imgBigMountain.allowTint = true
    imgLeftMountain = new LoadedImage(loadedLeftMountain, 0, 273*0.8, loadedLeftMountain.width*0.8, loadedLeftMountain.height*0.8, 0.01, 0.01)
    imgLeftMountain.allowTint = true
    imgRightMountain = new LoadedImage(loadedRightMountain, 783*0.8, 300*0.8, loadedRightMountain.width*0.8, loadedRightMountain.height*0.8, 0.01, 0.01)
    imgRightMountain.allowTint = true
    strawberry = new LoadedImage(loadedStrawberryImg, width/2, height/2, loadedStrawberryImg.width*10, loadedStrawberryImg.height*10)
    let randHeight = () => Math.floor(Math.random() * 200)
    let randVel =  () => 0.05 + Math.random() * 0.5
    cloud1 = new Cloud(new LoadedImage(loadedCloud1, -loadedCloud1.width*0.8, randHeight(), loadedCloud1.width*0.8, loadedCloud1.height*0.8), randVel())
    cloud2 = new Cloud(new LoadedImage(loadedCloud2, -loadedCloud2.width*0.8, randHeight(), loadedCloud2.width*0.8, loadedCloud2.height*0.8), randVel())
    cloud3 = new Cloud(new LoadedImage(loadedCloud3, -loadedCloud3.width*0.8, randHeight(), loadedCloud3.width*0.8, loadedCloud3.height*0.8), randVel())

    scrollingBG = new ScrollingBG([imgBG, imgBlackBG, imgSnow , imgSnow2, imgSnow3], 10, 0.1, 0.04)

    // player = new Player(createSprite(0-playerSprite.getWidth()/2, height-playerSprite.getHeight()/2)) 
    player = new Player(createSprite(width/2, height/2, playerSprite.getWidth() * 2, playerSprite.getHeight() * 2), 0.01, 5, 5, 0.5, 0.5) 
    // player.addAnimation('idle', playerSprite)
    // player.setDefaultCollider()
    player.sprite.addAnimation('idle', playerSprite)
    player.sprite.setDefaultCollider()

    
}

let tintNum = 0
let hasStarted = false
let hasScrolled = false
let showPoster = false
function draw() {
    // let v1 = createVector(40, 50);
    // let v2 = createVector(40, 50);
    // ellipse(v1.x, v1.y, 50, 50);
    // ellipse(v2.x, v2.y, 50, 50);
    // v1.add(v2);
    // ellipse(v1.x, v1.y, 50, 50);
    if (!hasStarted && !hasScrolled) {
        background(0)
    }
    if (hasStarted && !scrollingBG.stopped) {
        // EpicStuff.startMoveBackground(i)
        scrollingBG.scroll()
    }
    if (scrollingBG.stopped && !showPoster) {

        imgLeftMountain.setTint(255, 255, 255, tintNum)
        imgLeftMountain.draw()
        imgRightMountain.setTint(255, 255, 255, tintNum)
        imgRightMountain.draw()
        imgGround.draw()
        imgBigMountain.setTint(255, 255, 255, tintNum)
        imgBigMountain.draw()
        imgText.setTint(255, 255, 255, tintNum)
        imgText.draw()
        tintNum += 5
        if (tintNum >= 255) {
            imgBigMountain.allowTint = false
            imgLeftMountain.allowTint = false
            imgRightMountain.allowTint = false
            imgText.allowTint = false
            hasScrolled = true
            showPoster = true

        }
        
    }

    if (showPoster) {
        imgBG.draw()
        imgLeftMountain.draw()
        imgRightMountain.draw()
        imgGround.draw()
        cloud1.draw()
        cloud2.draw()
        cloud3.draw()
        imgBigMountain.draw()
        imgText.draw()
        
    }
    enableControls()
    drawSprite(player.sprite)

}


function enableControls() {
    if ((!keyDown(65) && !keyDown(68)) || (keyDown(65) && keyDown(68))) {
        player.resetToIdle()
    }
    else if (keyDown(65)) {
        player.moveLeft()
    }
    else if (keyDown(68)) {
        player.moveRight()
    }
}