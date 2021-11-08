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
        this.dashMaxDistance = 20

        this.prevPos = null
        this.currentPos = this.sprite.position
        this.currentVelX = 0
        this.currentVelY = 0
        this.jumpDistance = 0
        this.dashDistance = 0
        this.previousVelocity = null
        this.isFalling = false
        this.hasJump = true
        this.isCurrentlyJumping = false
        this.isCurrentlyDashing = false
        this.facing = 0 // in Degrees
    }

    draw() {
        drawSprite(this.sprite)
    }

    //max jump speed: 10
    //jump accel: 10
    jump() {
        // console.log(player.jumpDistance)
        // if (this.hasJump) {
        //     this.currentVelY = 0
        //     this.hasJump = false
        // }
        this.prevPos = this.sprite.position
        if (this.currentVelY > -this.maxJumpSpeed && !this.isFalling) {
            this.isCurrentlyJumping = true
            this.hasJump = false
            if (this.currentVelY - this.jumpAccel < -this.maxJumpSpeed) {
                this.currentVelY = -this.maxJumpSpeed
            }
            else this.currentVelY -= this.jumpAccel
            
        }
        if (this.isCurrentlyJumping) {
            this.jumpDistance += Math.abs(this.currentVelY)
        }
        if (this.jumpDistance >= this.jumpHeight) {
            this.isFalling = true
            this.isCurrentlyJumping = false
            this.jumpDistance = 0
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        this.currentPos = this.sprite.position
        // console.log(player.jumpDistance)
    }

    fall() {
        this.prevPos = this.sprite.position
        if (this.sprite.touching.bottom ) {  // If player is touching a platform allow the sprite to jump again.
            this.isFalling = false
            this.currentVelY = 0.001
            this.hasJump = true 
            this.hasDash = true
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        else {
            this.hasJump = false
            this.isFalling = true
        }
        if (this.sprite.position.y >= height - this.sprite.height/2) {
            this.currentVelY = 0
            this.isFalling = false
            this.hasJump = true
            this.hasDash = true
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        if (this.currentVelY < this.maxFallVel && this.isFalling) {
            this.currentVelY += this.gravity
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        this.currentPos = this.sprite.position
    }

    resetToIdle() {
        this.prevPos = this.sprite.position
        if (this.currentVelX > 0) {
            if (this.currentVelX >= this.accelX) this.currentVelX -= this.accelX
            else this.currentVelX = 0
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        if (this.currentVelX < 0) {
            if (this.currentVelX <= this.accelX) this.currentVelX += this.accelX
            else this.currentVelX = 0
            this.currentVelX += this.accelX
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        // if (this.currentVelX === this.previousVelocity) {
        //     this.currentVelX = 0
        //     this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        // }
        // this.previousVelocity = this.currentVelX
        // console.log(this.sprite.velocity.x)
        this.currentPos = this.sprite.position
    }

    moveLeft() {
        this.prevPos = this.sprite.position
        this.sprite.mirrorX(-1)
        this.facing = 180
        if (this.sprite.position.x <= this.sprite.width/2) {
            this.currentVelX = 0
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        else if (this.currentVelX > -this.maxMoveVelX) {
            if (this.currentVelX - this.accelX < -this.maxMoveVelX) {
                this.currentVelX -= this.maxMoveVelX + this.currentVelX
            }
            else this.currentVelX -= this.accelX
            
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        // console.log(this.sprite.velocity.x)
        this.currentPos = this.sprite.position

    }

    moveRight() {
        this.prevPos = this.sprite.position
        this.sprite.mirrorX(1)
        this.facing = 0
        if (this.sprite.position.x >= width - this.sprite.width/2) {
            this.currentVelX = 0
            this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        }
        else if (this.currentVelX < this.maxMoveVelX) {
            if (this.currentVelX + this.accelX > this.maxMoveVelX) {
                this.currentVelX += this.maxMoveVelX - this.currentVelX
            }
            else this.currentVelX += this.accelX
        }
        this.sprite.setVelocity(this.currentVelX, this.currentVelY)
        // console.log(this.sprite.velocity.x)
        this.currentPos = this.sprite.position
    }

    dash() {
        if (this.facing === 0 && this.hasDash) {
            this.hasDash = false
            this.isCurrentlyDashing = true
            this.currentVelX = 10
            this.dashDistance += this.currentVelX
            this.sprite.setVelocity(this.currentVelX, 0)
        }
        if (this.facing === 180 && this.hasDash) {
            this.hasDash = false
            this.isCurrentlyDashing = true
            this.currentVelX = -10
            this.dashDistance += -this.currentVelX
            this.sprite.setVelocity(this.currentVelX, 0)
        }
        if (this.dashDistance > this.dashMaxDistance) {
            this.isCurrentlyDashing = false
        }
    }

    collide(spriteA, spriteB) {
    }
}