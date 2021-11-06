class ScrollingBG {

    constructor(loadedimages, maxVel, accelIn, accelOut) {
        this.imgs = loadedimages
        this.maxVel = maxVel
        this.accelIn = accelIn
        this.accelOut = accelOut
        this.stopDistance = -1500
        this.slowing = false
        this.stopped = false
        this.x = 0
        this.y = 0
        this.curVel = 0
        // this._highestImage()
    }
    addImage(loadedImage) {
        this.imgs.push(loadedImage)
    }

    scroll() {
        if (this.imgs[0].yloc > this.stopDistance) {
            this.curVel -= this.accelOut
            if (this.curVel < 1) {
                this.curVel = 1
            }
        }
        else if (this.curVel < this.maxVel) {
            this.curVel += this.accelIn
            if (this.curVel > this.maxVel) {
                this.curVel = this.maxVel
            }
        }

        for (let i = 0; i < this.imgs.length; i++) {
            this.imgs[i].draw()
            this.imgs[i].yloc += this.curVel
            // this.highestImageDistance += this.curVel
        }
        if (this.imgs[0].yloc > 0) {
            this.imgs[0].yloc = 0
            this.stopped = true
        }
        // console.log(this.highestImageDistance + ' ' + this.curVel)
    }

    _highestImage() {
        this.highestImageDistance = this.imgs[0].yloc
        this.imgs.forEach(element => {
            if (element.yloc < this.highestImageDistance) this.highestImageDistance = element.yloc
        });
        console.log(this.highestImageDistance)
    }
}