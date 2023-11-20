import { ctx } from "./utils.js"


export class Menu {

    constructor() {
        this.speed = 5
        this.position = {
            x: 0,
            y: 0,
        }
        this.sizes = {
            w: innerWidth,
            h: innerHeight,
        }
        this.startGame = true
        this.Mainmenu = true

        this.image = new Image()
        this.play = new Image()
        this.playData = {
            s: 224,
            x: innerWidth / 2 - 224 / 2,
            y: innerHeight / 2 - 224 / 2,
        }
        this.play.src = `img/menu/play.png`
        this.image.src = `img/menu/BG.png`

        // MENU
        this.menuSky = new Image()
        this.menuSky.src = `img/menu/Sky.png`

        this.menuBg = new Image()
        this.menuBg.src = `img/menu/background.png`
        this.map = {
            x: 0,
            y: -innerWidth * 1.4 + innerHeight,
            w: innerWidth,
            h: innerWidth * 1.4,
        }
        this.game = {}
        this.gameButton = {
            btn0: new Image(),
            btn1: new Image(),
            btn2: new Image(),
            btn3: new Image(),
            w: Math.round(innerWidth / 6),
            h: Math.round(innerHeight / 6),
        }
        this.gameButton.btn0.src = 'img/menu/button/button01.png'
        this.gameButton.btn1.src = 'img/menu/button/button02.png'
        this.gameButton.btn2.src = 'img/menu/button/button03.png'
        this.gameButton.btn3.src = 'img/menu/button/button04.png'

        this.buttonPositions = [
            {
                x: Math.round(this.map.x + this.map.w / 2.2 - this.gameButton.w / 2),
                y: Math.round(this.map.y + this.map.h / 1.15 - this.gameButton.h / 2),
                collision: false,
                level: 1,
            },
            {
                x: Math.round(this.map.x + this.map.w / 1.5 - this.gameButton.w / 2),
                y: Math.round(this.map.y + this.map.h / 1.53 - this.gameButton.h / 2),
                collision: false,
                level: 2
            },
            {
                x: Math.round(this.map.x + this.map.w / 1.7 - this.gameButton.w / 2),
                y: Math.round(this.map.y + this.map.h / 2.2 - this.gameButton.h / 2),
                collision: false,
                level: 3
            },
            {
                x: Math.round(this.map.x + this.map.w / 2.4 - this.gameButton.w / 2),
                y: Math.round(this.map.y + this.map.h / 3.3 - this.gameButton.h / 2),
                collision: false,
                level: 4
            },
            {
                x: Math.round(this.map.x + this.map.w / 1.5 - this.gameButton.w / 2),
                y: Math.round(this.map.y + this.map.h / 8.9 - this.gameButton.h / 2),
                collision: false,
                level: 5
            },
        ]

        this.mouse = {
            x: 0,
            y: 0,
            img: new Image(),
            src: 'img/menu/cursor.png',
            w: 40,
            h: 40,
        }
        this.mouse.img.src = this.mouse.src

        this.move = {
            up: false,
            down: false,
            img: new Image(),
            imgdown: new Image(),
            src: 'img/menu/move.png',
            srcdown: 'img/menu/movedown.png',
            w: 800,
            h: 60,
        }
        this.move.img.src = this.move.src
        this.move.imgdown.src = this.move.srcdown

        this.gameLvlCheck = 0
    }

    draw() {
        if (this.startGame) {
            this.startBackground()
        } else {
            this.startMenu()
            this.buttonPositions.forEach(button => this.startLevels(button))
            this.moveUpDown()
        }
        this.startMouse()
    }

    moveUpDown() {
        if(this.move.up) {
            ctx.drawImage(this.move.img, innerWidth / 2 - this.move.w / 2, 0, this.move.w, this.move.h)
        }
        if(this.move.down) {
            ctx.drawImage(this.move.imgdown, innerWidth / 2 - this.move.w / 2, innerHeight - this.move.h, this.move.w, this.move.h)
        }
    }

    update(gameLevel) {
        this.game = gameLevel
        this.moveMenu()
        this.draw()
    }

    startBackground() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.sizes.w, this.sizes.h)
        ctx.drawImage(this.play, this.playData.x, this.playData.y, this.playData.s, this.playData.s)

    }

    startMenu() {
        ctx.drawImage(this.menuSky, this.position.x, this.position.y, innerWidth, innerHeight)
        ctx.drawImage(this.menuBg, this.map.x, this.map.y, this.map.w, this.map.h)
    }

    startLevels(button) {
        if (button.collision) {
            ctx.beginPath()
            ctx.strokeStyle = "yellow"
            if(button.level > this.game.gameMaxLevel) {
                ctx.strokeStyle = "gray"
                ctx.lineWidth = 1
            }
            ctx.font = "30px fantasy"
            ctx.strokeText(`LEVEL ${button.level}`, button.x + this.gameButton.w / 2 - 50, button.y + this.gameButton.h + 30)
        }
        this.game.levelCleaningDegree[`lvl${button.level}`].forEach((lvl, idx) => {
            if (lvl) { this.gameLvlCheck = idx + 1 }
        })
        ctx.drawImage(this.gameButton[`btn${button.level <= this.game.gameMaxLevel ?
            this.gameLvlCheck : 0}`], button.x, button.y, this.gameButton.w, this.gameButton.h)
        this.gameLvlCheck = 0
    }

    startMouse() {
        ctx.drawImage(this.mouse.img, this.mouse.x, this.mouse.y, this.mouse.w, this.mouse.h)
    }

    moveMenu() {
        if (this.move.up) {
            if (this.map.y <= 0) {
                this.map.y += this.speed
                this.buttonPositions.forEach(button => button.y += this.speed)
            }
        } else if (this.move.down) {
            if (-innerWidth * 1.4 + innerHeight < this.map.y) {
                this.map.y -= this.speed
                this.buttonPositions.forEach(button => button.y -= this.speed)
            }
        }
    }
}