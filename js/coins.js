import { canvas, ctx } from "./utils.js";

export class Coins {
    constructor({ x, y, w, h, t = 1 }) {
        this.size = 64
        this.position = {
            x,
            y,
        }
        this.width = w
        this.height = h
        this.type = t
        this.path = new Image()
        this.phase = 1
        this.maxPhase = 10
        this.speed = 5
        this.animationSpeed = this.speed

        this.alive = true
        this.path.src = `img/coin/Gold.png`
    }

    draw() {
        if(this.alive) {
            if (this.animationSpeed <= 0) {
                this.phase++
                this.animationSpeed = this.speed
            }
            if (this.phase > this.maxPhase)
                this.phase = 1
            if (this.position.x + this.width >= 0 && canvas.width > this.position.x) {       // render when platform in view
                this.typing()
            }
            this.animationSpeed--
        }
    }

    typing() {
        window.onload = () => {
            ctx.drawImage(this.path, ((this.phase - 1) * this.size), 0, this.size, this.size, this.position.x, this.position.y, this.size, this.size)
        }
        ctx.drawImage(this.path, (this.phase - 1) * this.size, 0, this.size, this.size, this.position.x, this.position.y, this.size, this.size)

    }

}