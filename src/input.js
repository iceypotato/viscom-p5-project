function mouseClicked() {
    console.log(mouseX, mouseY)
}

function keyPressed() {
    if (keyCode === ENTER && !hasStarted) {
        sndCelesteBSideComplete.setVolume(0.2)
        sndCelesteBSideComplete.play()
        hasStarted = true
    }
}

function controls() {
    // console.log(player.currentVelY + " " + player.sprite.touching.bottom)
    // console.log(player.sprite.position)
    if (keyWentDown('j') || player.isCurrentlyDashing) {
        player.dash()
    }
    if (keyWentDown(32) || player.isCurrentlyJumping) {
        player.jump()
    }
    else {
        player.fall()
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

    
    // if (player.sprite.touching.bottom)
}