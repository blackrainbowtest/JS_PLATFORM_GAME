import { canvas, ctx } from "./utils.js";
import { Game } from "./game.js";

export class Background {
    constructor({ level = 1, imageSrc = 'Sky.png' }) {
        this.level = level
        this.position = {
            x: 0,
            y: 0,
        }
        this.width = innerWidth
        this.height = innerHeight
        this.imageSrc = imageSrc
        this.image = new Image()
        this.image.src = `img/background/level${this.level}/${this.imageSrc}`
    }

    draw() {
        this.calculation()
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        if (this.position.x < 0) {
            ctx.drawImage(this.image, this.position.x + innerWidth, this.position.y, this.width, this.height)
        } else {
            ctx.drawImage(this.image, this.position.x - innerWidth, this.position.y, this.width, this.height)
        }

    }

    calculation() {
        if (this.position.x > innerWidth) {
            this.position.x = -innerWidth
        }
        if (this.position.x < -innerWidth) {
            this.position.x = innerWidth
        }
    }

}