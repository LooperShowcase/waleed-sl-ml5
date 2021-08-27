class Player {
  constructor() {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.6;
  }
  show() {
    image(playerimg, this.x, this.y, this.size, this.size);
  }
  jump() {
    this.velocityY = -15;
  }
  move() {
    this.velocityY = this.velocityY + this.gravity;
    this.y = this.y + this.velocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentobs) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,

      currentobs.x,
      currentobs.y,
      currentobs.size,
      currentobs.size
    );
    return iscolliding;
  }
}
