// let x;
// let y;
// let destinationX;
// let maxVel = 5
// let curVel = 0
// let accel = 0.05
// let easing = 0.01

// function setup2() {
//   createCanvas(2000, 600);
//   x = 0
//   y = height/2
//   destinationX = width
// }

// let slowing = false
// let stop = false
// function draw2() {
//   background(50,75,255);
//   if (x > width - 300) {
//     curVel -= accel
//     if (curVel < accel) {
//       slowing = true
//       curVel = accel
//     }
//   }
//   else if (curVel < maxVel && !slowing) {
//     curVel += accel
//   }
//   if (x > width) {
//     stop = true
//     curVel = 0
//   }
//   x += curVel
//   console.log(curVel)
//   ellipse(x, y, 50, 50)
  
// }