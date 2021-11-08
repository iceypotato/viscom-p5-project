class Cloud {
    constructor(loadedImg, vel) {
        this.loadedImg = loadedImg
        this.velocity = vel
    }

    draw() {
        this.loadedImg.allowTint = true
        this.loadedImg.setTint(255, 255, 255, 200)
        this.loadedImg.draw()
        this.loadedImg.xloc += this.velocity
        if (this.loadedImg.xloc > width) {
            this.loadedImg.xloc = -this.loadedImg.w
        }
    }

    generateRandomHeight() {
        return Math.floor(Math.random() * 200)
    }

    generateRandomVelocity() {
        return Math.random() * 0.1
    }

}