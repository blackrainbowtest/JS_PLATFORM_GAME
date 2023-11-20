import { ctx } from "./utils.js"

export class Book {
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
        this.image.src = `img/books/${this.type}.png`
        this.collision = false

        this.font = new FontFace("base", "url(../fonts/Zelda.otf)")
    }

    draw() {
        if (this.alive) {
            ctx.drawImage(this.image, this.position.x - this.size / 2, this.position.y, this.size, this.size)
            if (this.collision) {
                this.font.load().then(() => {
                    ctx.beginPath()
                    ctx.strokeStyle = "yellow"
                    ctx.font = "30px base"
                    ctx.strokeText(`You need 30 gold.`, this.position.x - 60, this.position.y + 110)
                })
            }
        }
    }
}