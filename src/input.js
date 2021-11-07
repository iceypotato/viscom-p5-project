function mouseClicked() {

}

function keyPressed() {
    if (keyCode === ENTER && !hasStarted) {
        sndCelesteBSideComplete.setVolume(0.2)
        sndCelesteBSideComplete.play()
        hasStarted = true
    }
}

function controls() {
    if (keyWentDown(32) || player.isCurrentlyJumping) {
        player.jump()
    }
    if (keyDown(65) && !keyDown(68)) {
        player.moveLeft()
    }
    if (keyDown(68) && !keyDown(65)) {
        player.moveRight()
    }
    if ((!keyDown(65) && !keyDown(68)) || (keyDown(65) && keyDown(68))) {
        player.resetToIdle()
    }
    if (player.isFalling) {
        player.fall()
    }
}