import { Gui } from "./gui.js";
import { InputHandler } from "./inputHandler.js";
import { LEVELS } from "./levels.js";
import { Menu } from "./menu.js";
import { Player } from "./player.js";
import { canvas, ctx } from "./utils.js";
import { audio } from "./audio.js";


export class Game {

  animation = null
  gameSpeed = 15
  playerJump = 15
  maxGameLevels = 5
  gameOver = false
  gameVolume = 0.1
  gameFinal = false
  CANVAS_WIDTH = canvas.width = innerWidth
  CANVAS_HEIGHT = canvas.height = innerHeight
  // static points
  scrollOffsset = 0
  savePosition = 0
  // statik player info
  playerMovementCtnr = 500
  gravity = 0.7
  paralaxFactor = 0.2
  paralax = this.paralaxFactor
  // statik game GUI??
  background = [...LEVELS.level_1.background]
  enemys = [...LEVELS.level_1.enemies]
  player = new Player(this.gravity)
  coins = [...LEVELS.level_1.coins]
  platforms = [...LEVELS.level_1.platforms]
  foreground = [...LEVELS.level_1.foreground]
  traps = [...LEVELS.level_1.traps]
  books = [...LEVELS.level_1.books]
  posions = [...LEVELS.level_1.posions]
  exit = LEVELS.level_1.exit
  gui = new Gui()
  menu = new Menu()

  keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    },
    down: {
      pressed: false
    }
  }

  constructor() {
    this.input = new InputHandler(this)
    this.inputKeys = []
// _____________________________________________________________________________________________________________________________
// put ! on relise _______________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________________________
    if (!localStorage.getItem('game')) {
      localStorage.setItem('game', JSON.stringify({
        gameLevel: 1,
        gameMaxLevel: 1,
        levelCleaningDegree: {
          lvl1: [true, false, false],
          lvl2: [false, false, false],
          lvl3: [false, false, false],
          lvl4: [false, false, false],
          lvl5: [false, false, false],
        },
        books: {
          lvl1: [],
          lvl2: [],
          lvl3: [],
          lvl4: [],
          lvl5: [],
        },
        coin: 0,
        playerHealth: 120,
      }))
    }
    this.game = JSON.parse(localStorage.getItem('game'))
    this.gameOverImg = new Image()
    this.gameOverImg.src = "../img/gameOver/gameOver.png"
    this.killRange = 40
  }

  play() {
    this.playerMove()
    this.animation = requestAnimationFrame(() => this.animate())
  }

  animate() {
    this.clearScreen()
    if (!this.menu.Mainmenu) {
      this.runGame()
      audio.menu.pause()
      audio.menu.currentTime = 0
      audio[`lvl${this.game.gameLevel}`].volume = this.gameVolume
      audio[`lvl${this.game.gameLevel}`].play()
    } else {
      this.menu.update(this.game)
      this.menuLogic()
      if (!this.menu.startGame) {
        audio.menu.volume = this.gameVolume
        audio.menu.play()
        audio[`lvl${this.game.gameLevel}`].pause()
        audio[`lvl${this.game.gameLevel}`].currentTime = 0
      }
    }

    // win conditions __________________________________________________________________________________________
    if (this.exit.win) {
      this.winStage()
    }

    //lose conditions __________________________________________________________________________________________
    if (this.player.position.y > this.CANVAS_HEIGHT || !this.player.status.alive) {
      this.gameOver = true
      this.loseStage(this.game.gameLevel)
    }

    this.animation = this.animation = requestAnimationFrame(() => this.animate())
  }

  init() {
    this.background.forEach(background => {
      background.position.x = 0
    })
    this.player = new Player(this.gravity, 100, innerHeight - 300)
    this.platforms.forEach(platform => {
      if (!this.scrollOffsset <= 0) {
        platform.position.x += this.scrollOffsset
      }
    })

    this.foreground.forEach(foreground => {
      foreground.position.x = 0
    })

    this.enemys.forEach(enemy => {
      if (!this.scrollOffsset <= 0) {
        enemy.position.x += this.scrollOffsset
        enemy.alive = true
        enemy.move = true
        enemy.way = false
      }
    })

    this.coins.forEach(coin => {
      if (!this.scrollOffsset <= 0) {
        coin.position.x += this.scrollOffsset
        coin.alive = true
      }
    })

    this.books.forEach(book => {
      if (!this.scrollOffsset <= 0) {
        book.position.x += this.scrollOffsset
        book.alive = true
      }
    })

    this.posions.forEach(posion => {
      if (!this.scrollOffsset <= 0) {
        posion.position.x += this.scrollOffsset
        posion.alive = true
      }
    })

    this.traps.forEach(trap => {
      if (!this.scrollOffsset <= 0) {
        trap.position.x += this.scrollOffsset
        trap.alive = true
      }
    })

    if (!this.scrollOffsset <= 0) {
      this.exit.position.x += this.scrollOffsset
      this.exit.win = false
    }
    this.scrollOffsset = 0
    // cancelAnimationFrame(this.animation)
    this.gameOver = false
  }

  runGame() {
    this.draw()
    this.collisions()
    this.playerMoveControl()
  }

  collisions() {
    // platform collision detection __________________________________________________________________________________________
    this.platforms.forEach(platform => {
      if (this.player.position.y + this.player.height <= platform.position.y &&
        this.player.position.y + this.player.height + this.player.velocity.y >= platform.position.y
        && this.player.position.x + this.player.width - this.player.width / 6 >= platform.position.x &&
        this.player.position.x + this.player.width / 6 <= platform.position.x + platform.width) {
        if (!this.keys.down.pressed) {
          this.player.velocity.y = 0
        }
        if (!this.player.status.onGround) {
          audio.fallDown.volume = this.gameVolume
          audio.fallDown.play()
        }
        this.player.status.onGround = true
        this.player.status.dubleJump = false
      }

      // enemy collision with platform detection
      this.enemys.forEach(enemy => {
        if (enemy.position.y + enemy.height <= platform.position.y &&
          enemy.position.y + enemy.height + enemy.velocity.y >= platform.position.y
          && enemy.position.x + enemy.width - enemy.width / 6 >= platform.position.x &&
          enemy.position.x + enemy.width / 6 <= platform.position.x + platform.width) {
          enemy.velocity.y = 0
          enemy.platform.x = platform.position.x
          enemy.platform.y = platform.position.y
          enemy.platform.w = platform.width
          enemy.platform.h = platform.height
        }
      })
    })

    // coins collision detection__________________________________________________________________________________
    this.coins.forEach((coin) => {
      if (
        (
          (coin.position.x >= this.player.position.x &&
            coin.position.x <= this.player.position.x + this.player.width) ||
          (coin.position.x + coin.width >= this.player.position.x &&
            coin.position.x + coin.width <= this.player.position.x + this.player.width))
        &&
        (
          (coin.position.y >= this.player.position.y &&
            coin.position.y <= this.player.position.y + this.player.height) ||
          (coin.position.y + coin.height >= this.player.position.y &&
            coin.position.y + coin.height <= this.player.position.y + this.player.height)
        )
        &&
        coin.alive) {
        this.game.coin++
        coin.alive = false
        audio.coin.currentTime = 0
        audio.coin.volume = this.gameVolume * 2
        audio.coin.play()
      }
    })

    // book collision detection__________________________________________________________________________________
    this.books.forEach((book) => {
      if (
        (
          (book.position.x >= this.player.position.x &&
            book.position.x <= this.player.position.x + this.player.width) ||
          (book.position.x + book.width >= this.player.position.x &&
            book.position.x + book.width <= this.player.position.x + this.player.width))
        &&
        (
          (book.position.y >= this.player.position.y &&
            book.position.y <= this.player.position.y + this.player.height) ||
          (book.position.y + book.height >= this.player.position.y &&
            book.position.y + book.height <= this.player.position.y + this.player.height)
        )
        &&
        book.alive) {
        book.collision = true
        if (this.game.coin - 30 >= 0) {
          if (!this.game.books[`lvl${this.game.gameLevel}`].includes(book.type)) {
            this.game.books[`lvl${this.game.gameLevel}`].push(book.type)
          }
          book.alive = false
          audio.book.volume = this.gameVolume * 4
          audio.book.play()
          this.game.coin -= 30
        }
      } else {
        book.collision = false
      }
    })
    // posion collosion
    this.posions.forEach((posion) => {
      if (
        (
          (posion.position.x >= this.player.position.x &&
            posion.position.x <= this.player.position.x + this.player.width) ||
          (posion.position.x + posion.width >= this.player.position.x &&
            posion.position.x + posion.width <= this.player.position.x + this.player.width))
        &&
        (
          (posion.position.y >= this.player.position.y &&
            posion.position.y <= this.player.position.y + this.player.height) ||
          (posion.position.y + posion.height >= this.player.position.y &&
            posion.position.y + posion.height <= this.player.position.y + this.player.height)
        )
        &&
        posion.alive) {
        posion.alive = false
        this.game.playerHealth += 48
        audio.posion.volume = this.gameVolume
        audio.posion.play()
        if (this.game.playerHealth > this.player.playerMaxHealth) {
          this.game.playerHealth = this.player.playerMaxHealth
        }
      }
    })

    // traps collision detection__________________________________________________________________________________
    this.traps.forEach((trap) => {
      if (
        (
          (trap.position.x >= this.player.position.x &&
            trap.position.x <= this.player.position.x + this.player.width) ||
          (trap.position.x + trap.width >= this.player.position.x &&
            trap.position.x + trap.width <= this.player.position.x + this.player.width))
        &&
        (
          (trap.position.y >= this.player.position.y &&
            trap.position.y <= this.player.position.y + this.player.height) ||
          (trap.position.y + trap.height >= this.player.position.y &&
            trap.position.y + trap.height <= this.player.position.y + this.player.height)
        )
        // (coin.position.x >= this.player.position.x && coin.position.x <= this.player.position.x + this.player.width) &&
        // (coin.position.x + coin.width >= this.player.position.x && coin.position.x + coin.width <= this.player.position.x + this.player.width)
      ) {
        if (this.game.playerHealth >= 0) {
          if (!this.player.hitten) {
            audio.hitten.volume = this.gameVolume
            audio.hitten.play()
            this.game.playerHealth -= 48
            if (this.game.playerHealth <= 0) {
              this.game.playerHealth = 0
              this.player.status.alive = false
            }
            this.player.hitten = true
          }
          if (this.player.status.onGround) {
            this.player.velocity.y -= this.playerJump
            this.player.status.onGround = false
          }
        }
      }
    })

    // portal collision
    if ((
      (this.exit.position.x >= this.player.position.x &&
        this.exit.position.x <= this.player.position.x + this.player.width) ||
      (this.exit.position.x + this.exit.width >= this.player.position.x &&
        this.exit.position.x + this.exit.width <= this.player.position.x + this.player.width)) &&
      ((this.exit.position.y >= this.player.position.y &&
        this.exit.position.y <= this.player.position.y + this.player.height) ||
        (this.exit.position.y + this.exit.height >= this.player.position.y &&
          this.exit.position.y + this.exit.height <= this.player.position.y + this.player.height)
      )) {
      this.exit.win = true
      this.exit.active = false
    }

    // enemy collision logic
    this.enemys.forEach((enemy) => {
      if (this.player.position.y + this.player.height <= enemy.position.y &&
        this.player.position.y + this.player.height + this.player.velocity.y >= enemy.position.y
        && this.player.position.x + this.player.width - this.player.width / 6 >= enemy.position.x &&
        this.player.position.x + this.player.width / 6 <= enemy.position.x + enemy.width
        && enemy.alive) {
        if (!this.keys.down.pressed) {
          this.player.velocity.y = 0
        }
        this.player.status.onGround = true
        this.player.status.dubleJump = false
        enemy.alive = false
        audio.enemyDied.currentTime = 0
        audio.enemyDied.volume = this.gameVolume
        audio.enemyDied.play()
        this.game.coin += enemy.coin
        enemy.spriteSteep = 0
        if (this.player.status.onGround) {
          this.player.velocity.y -= this.playerJump / 2
          this.player.status.onGround = false
        }
      }
      if (
        (
          (enemy.position.x > this.player.position.x + this.killRange &&
            enemy.position.x < this.player.position.x + this.player.width - this.killRange) ||
          (enemy.position.x + enemy.width > this.player.position.x + this.killRange &&
            enemy.position.x + enemy.width < this.player.position.x + this.player.width - this.killRange))
        &&
        (
          (enemy.position.y > this.player.position.y &&
            enemy.position.y < this.player.position.y + this.player.height) ||
          (enemy.position.y + enemy.height > this.player.position.y &&
            enemy.position.y + enemy.height < this.player.position.y + this.player.height)
        )
        &&
        enemy.alive
      ) {
        if (this.game.playerHealth >= 0) {
          if (!this.player.hitten) {
            audio.hitten.volume = this.gameVolume
            audio.hitten.play()
            this.game.playerHealth -= 24
            if (this.game.playerHealth <= 0) {
              this.game.playerHealth = 0
              this.player.status.alive = false
            }
            this.player.hitten = true
          }
          if (this.player.status.onGround) {
            this.player.velocity.y -= this.playerJump
            this.player.status.onGround = false
          }
        }
      }
      // enemy moving logic
      if (enemy.alive) {
        if (enemy.move) {
          if (enemy.way) {
            enemy.position.x += enemy.speed
            if (enemy.position.x + enemy.width >= enemy.platform.x + enemy.platform.w - enemy.width / 6) {
              enemy.way = !enemy.way
            }
          } else {
            enemy.position.x -= enemy.speed
            if (enemy.position.x <= enemy.platform.x + enemy.width / 6) {
              enemy.way = !enemy.way
            }
          }
        }
      }
    })

  }

  playerMoveControl() {
    // player move detection __________________________________________________________________________________________
    if (this.keys.right.pressed && this.player.position.x < this.CANVAS_WIDTH - this.playerMovementCtnr) {
      this.player.velocity.x = this.player.speed
    } else if (this.keys.left.pressed && this.player.position.x > this.playerMovementCtnr) {
      this.player.velocity.x = -this.player.speed
    } else {
      this.player.velocity.x = 0
      // RIGHT
      if (this.keys.right.pressed) {
        this.scrollOffsset += this.player.speed
        this.background.forEach(background => {
          background.position.x -= this.player.speed * this.paralax
          this.paralax += this.paralaxFactor
        })
        this.platforms.forEach(platform => {
          platform.position.x -= this.player.speed
        })
        this.enemys.forEach(enemy => {
          enemy.position.x -= this.player.speed
        })
        this.coins.forEach(coin => {
          coin.position.x -= this.player.speed
        })
        this.books.forEach(book => {
          book.position.x -= this.player.speed
        })
        this.posions.forEach(posion => {
          posion.position.x -= this.player.speed
        })
        this.traps.forEach(trap => {
          trap.position.x -= this.player.speed
        })
        this.exit.position.x -= this.player.speed
        this.foreground.forEach(foreground => {
          foreground.position.x -= this.player.speed * (this.paralax * 1.2)
          this.paralax = this.paralaxFactor
        })
        // LEFT
      } else if (this.keys.left.pressed) {
        this.scrollOffsset -= this.player.speed
        this.background.forEach(background => {
          background.position.x += this.player.speed * this.paralax
          this.paralax += this.paralaxFactor
        })
        this.platforms.forEach(platform => {
          if (!this.scrollOffsset <= 0) {
            platform.position.x += this.player.speed
          }
        })
        this.enemys.forEach(enemy => {
          enemy.position.x += this.player.speed
        })
        this.coins.forEach(coin => {
          coin.position.x += this.player.speed
        })
        this.books.forEach(book => {
          book.position.x += this.player.speed
        })
        this.posions.forEach(posion => {
          posion.position.x += this.player.speed
        })
        this.traps.forEach(trap => {
          trap.position.x += this.player.speed
        })
        this.exit.position.x += this.player.speed
        this.foreground.forEach(foreground => {
          foreground.position.x += this.player.speed * (this.paralax * 1.2)
          this.paralax = this.paralaxFactor
        })
      }

    }
    // player
  }

  // DRAW IMAGES__________________________________________________________________________________________
  draw() {
    this.clearScreen()
    this.background.forEach(background => {
      background.draw()
    })

    this.exit.draw()
    this.platforms.forEach(platform => {
      platform.draw()
    })
    this.traps.forEach(trap => {
      trap.draw()
    })
    this.enemys.forEach(enemy => {
      enemy.update()
    })
    this.player.update()
    this.coins.forEach(coin => {
      coin.draw()
    })
    this.foreground.forEach(foreground => {
      foreground.draw()
    })
    this.books.forEach(book => {
      book.draw()
    })
    this.posions.forEach(posion => {
      posion.draw()
    })
    this.gui.draw(this.game.coin, this.game.playerHealth)
  }

  playerMove() {
    window.addEventListener("contextmenu", e => e.preventDefault());
    addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'KeyA':
          this.keys.left.pressed = true
          this.player.status.way = false
          this.player.status.walk = true
          break;
        case 'KeyS':
          this.keys.down.pressed = true
          break;
        case 'KeyD':
          this.keys.right.pressed = true
          this.player.status.way = true
          this.player.status.walk = true
          break;
        case 'KeyW':
          this.player.velocity.y -= 0
          audio.run.pause()
          audio.run.currentTime = 0
          break;
        case 'Enter':
          if (this.gameOver) {
            audio.gameOver.pause()
            audio.gameOver.currentTime = 0
            this.init()
          }
          break;

        default:
          break;
      }
    })

    addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyA':
          this.keys.left.pressed = false
          if (!this.keys.right.pressed) {
            this.player.status.walk = false
          }
          break;
        case 'KeyS':
          this.keys.down.pressed = false
          break;
        case 'KeyD':
          this.keys.right.pressed = false
          if (!this.keys.left.pressed) {
            this.player.status.walk = false
          }
          break;
        case 'KeyW':
          if (this.player.status.onGround) {
            this.player.velocity.y -= this.playerJump
            this.player.status.onGround = false
          } else {
            if (!this.player.status.dubleJump) {
              this.player.velocity.y -= this.playerJump / 2
              this.player.status.dubleJump = true
            }
          }
          break;

        default:
          break;
      }
    })

  }

  clearScreen() {
    ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
  }

  setLevel() {
    this.background = [...LEVELS[`level_${this.game.gameLevel}`].background]
    this.enemys = [...LEVELS[`level_${this.game.gameLevel}`].enemies]
    this.coins = [...LEVELS[`level_${this.game.gameLevel}`].coins]
    this.platforms = [...LEVELS[`level_${this.game.gameLevel}`].platforms]
    this.foreground = [...LEVELS[`level_${this.game.gameLevel}`].foreground]
    this.books = [...LEVELS[`level_${this.game.gameLevel}`].books]
    this.posions = [...LEVELS[`level_${this.game.gameLevel}`].posions]
    this.traps = [...LEVELS[`level_${this.game.gameLevel}`].traps]
    this.exit = LEVELS[`level_${this.game.gameLevel}`].exit
  }

  menuLogic() {
    addEventListener('click', (e) => {
      audio.click.currentTime = 0
      audio.click.volume = this.gameVolume
      audio.click.play()
      const [x, y, x1, y1] = [this.menu.playData.x, this.menu.playData.y, e.pageX, e.pageY]
      if (getDistance(x, y, x1 - 112, y1 - 112) < 224 / 2 + 10) {
        this.menu.startGame = false
      }
      if (!this.menu.startGame) {
        this.menu.buttonPositions.forEach(button => {
          if (button.collision) {
            if (button.level <= this.game.gameMaxLevel) {
              this.menu.Mainmenu = false
              this.game.gameLevel = button.level
              this.setLevel()
            }
          }
        })
      }
    })
    // mouse menu collision logic
    this.menu.buttonPositions.forEach(button => {
      if (this.collisionCheck(button.x, this.menu.gameButton.w, button.y, this.menu.gameButton.h,
        this.menu.mouse.x, this.menu.mouse.w, this.menu.mouse.y, this.menu.mouse.h) && !this.menu.startGame) {
        button.collision = true
      } else {
        button.collision = false
      }
    })

    addEventListener('mousemove', (e) => {
      this.menu.mouse.x = e.pageX
      this.menu.mouse.y = e.pageY
      if (e.pageY < 50) {
        this.menu.move.up = true
      } else if (e.pageY >= innerHeight - 50) {
        this.menu.move.down = true
      } else {
        this.menu.move.up = false
        this.menu.move.down = false
      }
    })

    const getDistance = (x, y, x1, y1) => {
      return Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2))
    }
  }

  collisionCheck(x1, w1, y1, h1, x, w, y, h, sqr = 0) {
    return (
      (x > x1 + sqr &&
        x < x1 + w1 - sqr) ||
      (x + w > x1 + sqr &&
        x + w < x1 + w1 - sqr))
      &&
      (
        (y > y1 &&
          y < y1 + h1) ||
        (y + h > y1 &&
          y + h < y1 + h1)
      )
  }

  winStage() {
    if (this.game.books[`lvl${this.game.gameLevel}`]) {
      if (this.game.books[`lvl${this.game.gameLevel}`].length >= 3) {
        this.game.levelCleaningDegree[`lvl${this.game.gameLevel}`][2] = true
        this.game.levelCleaningDegree[`lvl${this.game.gameMaxLevel}`][1] = true
        this.game.levelCleaningDegree[`lvl${this.game.gameLevel}`][0] = true
      }
      if (this.game.books[`lvl${this.game.gameLevel}`].length >= 2) {
        this.game.levelCleaningDegree[`lvl${this.game.gameMaxLevel}`][1] = true
        this.game.levelCleaningDegree[`lvl${this.game.gameLevel}`][0] = true
      }
      if (this.game.books[`lvl${this.game.gameLevel}`].length >= 1) {
        this.game.levelCleaningDegree[`lvl${this.game.gameLevel}`][0] = true
      }
    }
    if (this.game.gameMaxLevel < this.maxGameLevels && this.game.gameLevel == this.game.gameMaxLevel) {
      this.game.gameMaxLevel++
      this.game.levelCleaningDegree[`lvl${this.game.gameMaxLevel}`][0] = true
    }
    localStorage.setItem('game', JSON.stringify({
      gameLevel: this.game.gameLevel,
      gameMaxLevel: this.game.gameMaxLevel,
      coin: this.game.coin,
      playerHealth: this.game.playerHealth,
      levelCleaningDegree: this.game.levelCleaningDegree,
      books: this.game.books
    }))
    this.init()
    this.menu.Mainmenu = true
  }

  loseStage(lvl) {
    let temp = this.game.gameLevel
    this.game = JSON.parse(localStorage.getItem('game'))
    this.game.gameLevel = temp
    this.gameOver = true
    // audio.menu.currentTime = 0
    audio[`lvl${this.game.gameLevel}`].pause()
    audio[`lvl${this.game.gameLevel}`].currentTime = 0
    ctx.drawImage(this.gameOverImg, 0, 0, innerWidth, innerHeight)
    audio.gameOver.volume = this.gameVolume
    if (audio.gameOver.currentTime <= 19) {
      audio.gameOver.play()
    } else {
      audio.gameOver.pause()
    }
  }
}