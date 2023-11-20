import { canvas, ctx } from "./utils.js";

export class Platform {
    constructor({ x, y, w, h, t = 1 }) {
        this.size = 128
        this.position = {
            x,
            y,
        }
        this.width = w
        this.height = h
        this.type = t
        this.path = {
            left: new Image(),
            middle: [],
            right: new Image(),
        }
        for (let i = 0; i < Math.ceil((this.width - this.size * 2) / this.size); i++) {
            this.path.middle.push(new Image())
        }
    }

    draw() {
        if(this.position.x + this.width >= 0 && canvas.width > this.position.x) {       // render when platform in view
            this.typing()
        }
    }

    typing() {
        this.path.left.src = `img/platform/type${this.type}_left.png`
        this.path.middle.forEach(path => {
            path.src = `img/platform/type${this.type}_middle.png`
        })
        this.path.right.src = `img/platform/type${this.type}_right.png`
        ctx.drawImage(this.path.left, this.position.x, this.position.y, this.size, this.size)
        this.path.middle.map((middle, index) => {
            ctx.drawImage(middle, this.position.x + (this.size * (index + 1)), this.position.y, this.size, this.size)
        })
        ctx.drawImage(this.path.right, this.position.x + this.width - this.size, this.position.y, this.size, this.size)
    }
}