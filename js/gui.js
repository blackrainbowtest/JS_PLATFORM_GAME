import { ctx } from "./utils.js";


export class Gui {
    constructor() {
        this.scoreBarSizes = {
            w: 256, h: 138
        }
        this.scoreBar = new Image()
        this.scoreBar.src = 'img/gui/score_bar.png'
        this.NumSizes = {
            w: 26, h:42,
        }
        this.scoreNums = [
            new Image(), new Image(), new Image(), new Image(), new Image(),
            new Image(), new Image(), new Image(), new Image(), new Image()
        ]
        this.hpBar = new Image()
        this.hp = new Image()
        this.hpBar.src = 'img/gui/hp/bar.png'
        this.hp.src = 'img/gui/hp/hp.png'
        this.hpWidth = 248

        this.scoreNums.forEach((num, i) => {
            num.src = `img/gui/nums/num0${i}-gray.png`
        })

        this.gold = new Image()
        this.gold.src = 'img/gui/gold.png'

        this.health = 0
        this.maxHealth = 120
    }

    draw(coin, health = 0) {
        this.health = health
        this.drawScoreBar()
        if(coin < 10) {
            this.drawScoreNums(Array.from(String('00' + coin)), coin)
        } else if( coin < 100) {
            this.drawScoreNums(Array.from(String('0' + coin)), coin)
        } else {
            this.drawScoreNums(Array.from(String(coin)), coin)
        }
        this.drawGoldIcon()
        this.drawHp()
    }

    drawHp() {
        ctx.drawImage(this.hp, 0 + 22, innerHeight - 59, this.hpWidth * (this.health/this.maxHealth), 59)
        ctx.drawImage(this.hpBar, 0, innerHeight - 64, 292, 64)
    }

    drawScoreBar() {
        ctx.drawImage(this.scoreBar, 0, 0, this.scoreBarSizes.w, this.scoreBarSizes.h)
    }

    drawScoreNums(arr) {
        ctx.drawImage(this.scoreNums[arr[0]], (this.scoreBarSizes.w / 2 - this.NumSizes.w / 2) - this.NumSizes.w, this.scoreBarSizes.h / 2 - this.NumSizes.h / 2, this.NumSizes.w, this.NumSizes.h)
        ctx.drawImage(this.scoreNums[arr[1]], (this.scoreBarSizes.w / 2 - this.NumSizes.w / 2), this.scoreBarSizes.h / 2 - this.NumSizes.h / 2, this.NumSizes.w, this.NumSizes.h)
        ctx.drawImage(this.scoreNums[arr[2]], (this.scoreBarSizes.w / 2 - this.NumSizes.w / 2) + this.NumSizes.w, this.scoreBarSizes.h / 2 - this.NumSizes.h / 2, this.NumSizes.w, this.NumSizes.h)
    }

    drawGoldIcon() {
        ctx.drawImage(this.gold, 16, this.scoreBarSizes.h / 2 - 32, 64, 64)
    }


}