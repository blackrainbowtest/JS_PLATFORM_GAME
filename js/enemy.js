import { canvas, ctx, getRandomNumber } from "./utils.js"


export class Enemy {
    constructor({ x = 50, y = 50, g = 1.5, type = 1 }) {
        this.position = {
            x: x,
            y: y,
        }
        this.width = 0
        this.height = 0
        this.coin = 0
        this.type = type
        this.speed = 0
        switch (type) {
            case 1:
                this.width = 128
                this.height = 90
                this.coin = 2
                this.speed = getRandomNumber(2, 4)
                break;
            case 2:
                this.width = 128
                this.height = 90
                this.coin = 5
                this.speed = getRandomNumber(4, 6)
                break;

            default:
                this.width = 60
                this.height = 60
                this.coin = 1
                break;
        }
        this.gravity = g
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.alive = true
        this.platform = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        }
        this.move = true
        this.way = false
        
        this.tempSpeed = this.speed

        this.image = new Image()
        this.image.src = `img/enemy/troll/troll_${this.type}.png`

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
        if (this.move) {
            this.animate()
        }
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += this.gravity
        }
    }

    animate() {
        if (this.counter <= 0) {
            this.counter = 20
            if (this.alive) {
                switch (this.way) {
                    case true:
                        this.spriteRow = 0
                        this.spriteSteep >= this.maxSpriteSteep ? this.spriteSteep = 0 : this.spriteSteep++
                        break;

                    default:
                        this.spriteRow = 1
                        this.spriteSteep >= this.maxSpriteSteep ? this.spriteSteep = 0 : this.spriteSteep++
                        break;
                }
            } else {
                this.speed = 20
                switch (this.way) {
                    case true:
                        this.spriteRow = 2
                        if (this.spriteSteep >= this.maxSpriteSteep) {
                            this.spriteSteep = 8
                            this.speed = this.tempSpeed
                            this.move = false
                        }
                        this.spriteSteep++
                        break;

                    default:
                        this.spriteRow = 3
                        if (this.spriteSteep >= this.maxSpriteSteep) {
                            this.spriteSteep = 8
                            this.speed = this.tempSpeed
                            this.move = false
                        }
                        this.spriteSteep++
                        break;
                }
            }
        }
        this.counter -= this.speed
    }
}