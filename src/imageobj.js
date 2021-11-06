class LoadedImage {

    constructor(loadedImage, xloc, yloc, w, h, xparallax=0, yparallax=0) {
        this.image = loadedImage
        this.xloc = xloc
        this.yloc = yloc
        this.w = w
        this.h = h
        this.xparallax = xparallax
        this.yparallax = yparallax
        this.allowTint = false
    }

    draw() {
        let xpar = map(mouseX, 0, width, this.xloc - (width * this.xparallax), this.xloc + (width * this.xparallax))
        let ypar = map(mouseY, 0, height, this.yloc - (height * this.yparallax), this.yloc + (height * this.yparallax))
        image(this.image, xpar, ypar, this.w, this.h)
        noTint()
    }

    setTint(v1, v2, v3, alpha) {
        if (!(v1 === 0 && v2 === 0 && v3 === 0 && alpha === 0) && this.allowTint){
            tint(v1, v2, v3, alpha)
        }

    }
    setTint(gray, alpha) {
        if (!(gray === 255 && alpha === 255) && this.allowTint) {
            tint(gray, alpha)
        }
    }
}