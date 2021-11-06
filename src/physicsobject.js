class PhysicsObject {
    /**
     * represents a physics object. reference: 
     */
    
    constructor(pos, velocity, accel, gravity, friction, mass) {
        this.pos = pos
        this.velocity = velocity
        this.accel = accel
        this.gravity = gravity
        this.friction = friction
        this.mass = mass
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
    
    update() {
        // Velocity changes according to acceleration
        this.velocity.add(this.acceleration);
        // position changes by velocity
        this.position.add(this.velocity);
        // We must clear acceleration each frame
        this.acceleration.mult(0);
    }
    display() {
        stroke(0);
        strokeWeight(2);
        fill(255,127);
        ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
    }
    checkEdges() {
        if (this.position.y > (height - this.mass * 8)) {
            // A little dampening when hitting the bottom
            this.velocity.y *= -0.9;
            this.position.y = (height - this.mass * 8);
        }
    }
}