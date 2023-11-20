import { canvas, ctx } from "./utils.js";
// import playerImage from '../img/player/1_KNIGHT'

export class Player {

  constructor(gravity = 1.5, x = 100, y = innerHeight - 300) {
    this.position = {
      x,
      y,
    }
    this.status = {
      onGround: false,
      dubleJump: false,
      walk: false,
      way: true,
      alive: true
    }
    this.speed = 5
    this.gravity = gravity
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.width = 128
    this.height = 128
    this.playerMaxHealth = 120

    this.hitten = false
    this.tik = 0
    this.cooldown = 110
    this.showTik = false

    this.animation = "IDLE"

    this.image = new Image()
    this.image.src = 'img/player/player_1.png'

    this.sw = this.width
    this.sh = this.height

    this.spriteSteep = 0
    this.maxSpriteSteep = 9
    this.spriteRow = 0
    this.counter = 20
  }

  draw() {
    ctx.drawImage(this.image, this.sw * this.spriteSteep, this.sh * this.spriteRow, this.sw, this.sh, this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    if (this.counter <= 0) {
      this.counter = 20
      if (this.status.alive) {
        if (!this.status.onGround && !this.hitten) {
          this.animation = "JUMP"
        } else if (this.status.walk) {
          this.animation = "RUN"
        } else if (this.hitten) {
          this.animation = "HITEN"
        } else {
          this.animation = "IDLE"
        }
        switch (this.animation) {
          case "IDLE":
            this.status.way ? this.spriteRow = 0 : this.spriteRow = 1
            break;
          case "RUN":
            this.status.way ? this.spriteRow = 2 : this.spriteRow = 3
            break;
          case "JUMP":
            this.status.way ? this.spriteRow = 4 : this.spriteRow = 5
            break;
          case "HITEN":
            this.status.way ? this.spriteRow = 6 : this.spriteRow = 7
            break;

          default:
            break;
        }
        this.spriteSteep >= this.maxSpriteSteep ? this.spriteSteep = 0 : this.spriteSteep++
      } else {

      }
    }
    this.counter -= this.speed


    if (this.hitten) {
      this.tik++
      if (this.tik % 15 == 0) {
        this.showTik = !this.showTik
      } else {
        this.draw()
        this.showTik = false
      }
      if (this.tik > this.cooldown) {
        this.hitten = false
        this.tik = 0
        this.showTik = false
      }
    } else {
      if (this.status.onGround) {

      } else {

        this.draw()
      }
    }

    // move update
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += this.gravity
    }
    this.draw()
  }
}