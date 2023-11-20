import { ctx } from "./utils.js"

export class Exit {
    constructor({ x = 50, y = 50 }) {
        this.position = {
            x: x,
            y: y,
        }
        this.width = 0
        this.height = 0
        this.coin = 0
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.size = 128
        this.image = new Image()
        this.image.src = `img/exit/exit.png`
        this.win = false
        this.active = true
    }

    draw() {
        ctx.drawImage(this.image, this.position.x - this.size / 2, this.position.y, this.size, this.size)

    }
}