class Player {

    constructor(sprite, gravity, maxMoveVelX, accelX, jumpAccel, maxJumpSpeed, maxFallVel, jumpHeight) {
        this.sprite = sprite
        this.gravity = gravity
        this.maxMoveVelX = maxMoveVelX
        this.accelX = accelX
        this.jumpAccel = jumpAccel
        this.maxJumpSpeed = maxJumpSpeed
        this.maxFallVel = maxFallVel
        this.jumpHeight = jumpHeight

        this.currentVelX = 0
        this.currentVelY = 0
        this.jumpDistance = 0
        this.previousVelocity = null
        this.isFalling = false
        this.isCurrentlyJumping = false
    }

    draw() {
        drawSprite(this.sprite)
    }

    jump() {
        if (this.currentVelY > -this.maxJumpSpeed && !this.isFalling) {
            this.isCurrentlyJumping = true
            this.currentVelY -= this.jumpAccel
        }
        this.jumpDistance += Math.abs(this.currentVelY)
        if (this.jumpDistance > this.jumpHeight) {
            this.isFalling = true
            this.isCurrentlyJumping = false
            this.jumpDistance = 0
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
    }

    fall() {
        if (this.sprite.position.y >= height - this.sprite.width/2) {
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