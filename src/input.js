function mouseClicked() {

}

function keyPressed() {
    if (keyCode === ENTER && !hasStarted) {
        sndCelesteBSideComplete.setVolume(0.2)
        sndCelesteBSideComplete.play()
        hasStarted = true
    }

    // if (keyWentUp(65)) {
    //     player.setSpeed(0, 0)
    // }
    // if (keyWentUp(68)) {
    //     player.setSpeed(0, 0)
    // }
}