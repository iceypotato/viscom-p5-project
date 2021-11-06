class ScrollingBG {

    constructor(loadedimages, easeIn, easeOut) {
        this.imgs = loadedimages
        this.x = 0
        this.y = 0
        this.easeIn = 0
        this.easeOut = 0
    }
    addImage(loadedImage) {
        this.imgs.push(loadedImage)
    }

    scroll() {
        let targetY = length + 1
        let dy = targetY - this.y;
        for (let i = 0; i < this.imgs.length; i++) {
            this.imgs[i].yloc += dy * easing
            if (this.imgs[i].yloc > height) {

            }
        }
    }

    _move() {

    }
}