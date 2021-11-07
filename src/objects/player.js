class Player {

    constructor(sprite, gravity, maxMoveVelX, maxMoveVelY, accelX, accelY, jumpHeight) {
        this.sprite = sprite
        this.gravity = gravity
        this.maxMoveVelX = maxMoveVelX
        this.maxMoveVelY = maxMoveVelY
        this.accelX = accelX
        this.accelX = accelY
        this.currentVelX = 0
        this.currentVelY = 0
        this.previousVelocity = null
    }

    draw() {
        drawSprite(this.sprite)
    }

    update() {

    }
    
    addVelocity(x, y) {


    }

    jump() {

    }

    resetToIdle() {
        if (this.currentVelX > 0) {
            this.currentVelX -= this.accelX
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        if (this.currentVelX < 0) {
            this.currentVelX += this.accelX
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        if (this.currentVelX === this.previousVelocity) {
            this.currentVelX = 0
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        this.previousVelocity = this.currentVelX
        console.log(this.sprite.velocity.x)
    }

    moveLeft() {
        if (this.currentVelX > -this.maxMoveVelX) {
            this.currentVelX -= this.accelX
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        console.log(this.sprite.velocity.x)
    }

    moveRight() {
        if (this.currentVelX < this.maxMoveVelX) {
            this.currentVelX += this.accelX
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        console.log(this.sprite.velocity.x)
    }
}