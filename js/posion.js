import { ctx } from "./utils.js"

export class Posion {
    constructor({ x = 50, y = 50, type = 1 }) {
        this.position = {
            x: x,
            y: y,
        }
        this.width = 0
        this.height = 0
        this.coin = 0
        this.type = type
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.alive = true
        this.size = 64
        this.image = new Image()
        this.image.src = `img/posion/${this.type}.png`
    }

    draw() {
        if (this.alive) {
            ctx.drawImage(this.image, this.position.x - this.size / 2, this.position.y, this.size, this.size)
        }
    }
}