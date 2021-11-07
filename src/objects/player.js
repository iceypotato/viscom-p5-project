class Player {

    constructor(sprite, gravity, maxMoveVelX, accelX, accelY, jumpHeight, maxFallVel) {
        this.sprite = sprite
        this.gravity = gravity
        this.maxMoveVelX = maxMoveVelX
        this.accelX = accelX
        this.accelY = accelY
        this.jumpHeight = jumpHeight
        this.maxFallVel = maxFallVel
        this.currentVelX = 0
        this.currentVelY = 0
        this.previousVelocity = null
        this.isFalling = false
        this.isCurrentlyJumping = false
    }

    draw() {
        drawSprite(this.sprite)
    }

    jump() {

        if (this.currentVelY > -this.jumpHeight && !this.isFalling) {
            this.isCurrentlyJumping = true
            this.currentVelY -= this.accelY
            if (this.currentVelY <= -this.jumpHeight) {
                this.isFalling = true
                this.isCurrentlyJumping = false
            }
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
    }

    fall() {
        if (this.sprite.position.y >= height - 200 ) {
            this.currentVelY = 0
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
            this.isFalling = false
        }
        else if (this.currentVelY < this.maxFallVel && this.isFalling) {
            this.currentVelY += this.gravity
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
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
        // console.log(this.sprite.velocity.y)
        // console.log(this.sprite.position.y >= height)
        this.previousVelocity = this.currentVelX
        // console.log(this.sprite.velocity.x)
    }

    moveLeft() {
        if (this.currentVelX > -this.maxMoveVelX) {
            this.currentVelX -= this.accelX
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        // console.log(this.sprite.velocity.x)
    }

    moveRight() {
        if (this.currentVelX < this.maxMoveVelX) {
            this.currentVelX += this.accelX
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        // console.log(this.sprite.velocity.x)
    }
}