// class EpicStuff {

//     static j = 0
//     static timesScrolled = 0

//     static cool() {
//         EpicStuff.j++
//         console.log(EpicStuff.j)
//     }
    
//     static decrement() {
//         if (i > 1) {
//             i--
//         }
//     }
    
//     static increment() {
//         if (EpicStuff.j < 10) {
//             i++
//         }
//         else if (EpicStuff.j > 31) {
//             clearTimeout(timer)
//             setInterval(EpicStuff.decrement, 310)
//         }
//         EpicStuff.j++
//     }
    
//     static startMoveBackground(velocity) {
//         imgSnow.draw()
//         imgSnow2.draw()
//         console.log(i)
//         if (EpicStuff.timesScrolled === 2) {
//             imgBlackBG.draw()
//             imgBlackBG.yloc += velocity
//             imgSnow.yloc += velocity
//             imgSnow2.yloc += velocity
//             if (imgBlackBG.yloc >= 0) {
//                 imgBG.draw()
//                 imgBG.yloc += velocity
//             }
//         }
//         else {
//             imgSnow.yloc += velocity
//             imgSnow2.yloc += velocity
//             if (imgSnow.yloc > height) {
//                 imgSnow.yloc = -height
//                 EpicStuff.timesScrolled++
//             }
//             if (imgSnow2.yloc > height) {
//                 imgSnow2.yloc = -height
//                 EpicStuff.timesScrolled++
//             }
//         }
//     }

//         /**
//      * draws a currently loaded image
//      * @param {*} loadedImage 
//      * @param {*} xpos 
//      * @param {*} ypos 
//      * @param {*} width 
//      * @param {*} height 
//      * @param {*} xParallax Parallaxing value for x. 0.5 for move with mouse
//      * @param {*} yParallax Parallaxing value for y. 0.5 for move with mouse
//      */
//          static drawImage(loadedImage, xpos, ypos, w, h, xParallax=0, yParallax=0) {
//             let xpar = map(mouseX, 0, width, xpos - (width * xParallax), xpos + (width * xParallax))
//             let ypar = map(mouseY, 0, height, ypos - (height * yParallax), ypos + (height * yParallax))
//             image(loadedImage, xpar, ypar, w, h)
//         }
// }

function strawberryAGot(spriteA, spriteB) {
    spriteB.remove()
    if (!gotStrawberryA) {
        sndStrawberryGet.setVolume(0.2)
        sndStrawberryGet.play()
        platform2.position = createVector(116, 589)
    }
    gotStrawberryA = true
}

function strawberryBGot(spriteA, spriteB) {
    spriteB.remove()
    if (!gotStrawberryB) {
        sndStrawberryGet.play()
    }
    gotStrawberryB = true
}

function strawberryCGot(spriteA, spriteB) {
    spriteB.remove()
    if (!gotStrawberryC) {
        sndCrystalHeartGet.setVolume(0.2)
        sndCrystalHeartGet.play()
        platform.remove()
        platform2.remove()
        platform3.remove()
        platform4.remove()
        platform5.remove()
        platform6.remove()
        platform7.remove()

    }
    gotStrawberryC = true
}