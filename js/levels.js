import { Background } from "./background.js";
import { Book } from "./book.js";
import { Coins } from "./coins.js";
import { Enemy } from "./enemy.js";
import { Exit } from "./exit.js";
import { Platform } from "./platform.js";
import { Posion } from "./posion.js";
import { Trap } from "./trap.js";

export let LEVELS = {
    // min height 120 px from bottom
    level_1: {
        platforms: [
            new Platform({ x: 0, y: innerHeight - 120, w: 768, h: 60, t: 1 }),  // start platform

            new Platform({ x: 100, y: innerHeight - 620, w: 384, h: 60, t: 2 }),    // enemy +
            new Platform({ x: 300, y: innerHeight - 520, w: 384, h: 60, t: 2 }),    // enemy +

            new Platform({ x: 700, y: innerHeight - 320, w: 1584, h: 60, t: 2 }),   // enemy +++
            new Platform({ x: 1200, y: innerHeight - 120, w: 512, h: 60, t: 1 }),   // enemy ++

            new Platform({ x: 2540, y: innerHeight - 420, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 3040, y: innerHeight - 620, w: 384, h: 60, t: 2 }),   // enemy ++
            new Platform({ x: 3440, y: innerHeight - 320, w: 512, h: 60, t: 2 }),

            new Platform({ x: 3940, y: innerHeight - 520, w: 384, h: 60, t: 2 }),

            new Platform({ x: 4240, y: innerHeight - 120, w: 384, h: 60, t: 2 }),

            new Platform({ x: 4400, y: innerHeight - 340, w: 768, h: 60, t: 2 }),   // enemy +++
            new Platform({ x: 4600, y: innerHeight - 640, w: 384, h: 60, t: 2 }),

            new Platform({ x: 5100, y: innerHeight - 620, w: 384, h: 60, t: 2 }),
            new Platform({ x: 5300, y: innerHeight - 520, w: 384, h: 60, t: 2 }),

            new Platform({ x: 5700, y: innerHeight - 320, w: 1584, h: 60, t: 2 }),  // enemy ++++
            new Platform({ x: 6200, y: innerHeight - 120, w: 512, h: 60, t: 1 }),

            new Platform({ x: 7540, y: innerHeight - 420, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 8040, y: innerHeight - 620, w: 384, h: 60, t: 2 }),
            new Platform({ x: 8440, y: innerHeight - 320, w: 512, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 8740, y: innerHeight - 120, w: 768, h: 60, t: 1 }),   // enemy ++
            new Platform({ x: 8940, y: innerHeight - 520, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 9600, y: innerHeight - 120, w: 384, h: 60, t: 1 }),
        ],
        coins: [
            new Coins({ x: 490, y: innerHeight - 690, w: 64, h: 64, t: 1 }),
            new Coins({ x: 390, y: innerHeight - 690, w: 64, h: 64, t: 1 }),    // book here
            new Coins({ x: 290, y: innerHeight - 690, w: 64, h: 64, t: 1 }),

            new Coins({ x: 800, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 900, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1000, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1100, y: innerHeight - 550, w: 64, h: 64, t: 1 }),

            new Coins({ x: 1300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1450, y: innerHeight - 250, w: 64, h: 64, t: 1 }),       // need trap here
            new Coins({ x: 1600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 1800, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1900, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2000, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2100, y: innerHeight - 550, w: 64, h: 64, t: 1 }),

            new Coins({ x: 2600, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2700, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2800, y: innerHeight - 700, w: 64, h: 64, t: 1 }),       // book here some right

            new Coins({ x: 3600, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3750, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3900, y: innerHeight - 700, w: 64, h: 64, t: 1 }),

            new Coins({ x: 4300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 4500, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 4800, y: innerHeight - 710, w: 64, h: 64, t: 1 }),       // book here

            new Coins({ x: 5200, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5400, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 6000, y: innerHeight - 450, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6200, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6400, y: innerHeight - 650, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 6600, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6800, y: innerHeight - 450, w: 64, h: 64, t: 1 }),

            new Coins({ x: 6200, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6400, y: innerHeight - 200, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 6500, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 7200, y: innerHeight - 450, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7300, y: innerHeight - 530, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7400, y: innerHeight - 620, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7500, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 7700, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7800, y: innerHeight - 690, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7900, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 8100, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8600, y: innerHeight - 600, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8700, y: innerHeight - 600, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9000, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9600, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9000, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9200, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9400, y: innerHeight - 300, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

        ],
        traps: [
            new Trap({ x: 1480, y: innerHeight - 152, t: 1 }),    /// 64
            new Trap({ x: 4480, y: innerHeight - 152, t: 1 }),    /// 64
            new Trap({ x: 6400, y: innerHeight - 350, t: 1 }),    /// 64
            new Trap({ x: 9240, y: innerHeight - 152, t: 1 }),    /// 64
        ],
        enemies: [
            new Enemy({ x: 300, y: innerHeight - 620, g: 1, type: 1 }),

            new Enemy({ x: 700, y: innerHeight - 420, g: 1, type: 1 }),
            new Enemy({ x: 1700, y: innerHeight - 420, g: 1, type: 1 }),
            new Enemy({ x: 2200, y: innerHeight - 420, g: 1, type: 1 }),

            new Enemy({ x: 1400, y: innerHeight - 220, g: 1, type: 1 }),
            new Enemy({ x: 1200, y: innerHeight - 220, g: 1, type: 1 }),

            new Enemy({ x: 2540, y: innerHeight - 520, g: 1, type: 1 }),

            new Enemy({ x: 3040, y: innerHeight - 620, g: 1, type: 1 }),
            new Enemy({ x: 3240, y: innerHeight - 620, g: 1, type: 1 }),

            new Enemy({ x: 5700, y: innerHeight - 420, g: 1, type: 1 }),
            new Enemy({ x: 6000, y: innerHeight - 420, g: 1, type: 1 }),
            new Enemy({ x: 7200, y: innerHeight - 420, g: 1, type: 1 }),
            new Enemy({ x: 8000, y: innerHeight - 420, g: 1, type: 1 }),

            new Enemy({ x: 4400, y: innerHeight - 440, g: 1, type: 1 }),
            new Enemy({ x: 4500, y: innerHeight - 440, g: 1, type: 1 }),
            new Enemy({ x: 4700, y: innerHeight - 440, g: 1, type: 1 }),

            new Enemy({ x: 8440, y: innerHeight - 420, g: 1, type: 1 }),

            new Enemy({ x: 7540, y: innerHeight - 520, g: 1, type: 1 }),

            new Enemy({ x: 8740, y: innerHeight - 220, g: 1, type: 1 }),
            new Enemy({ x: 8940, y: innerHeight - 220, g: 1, type: 1 }),

            new Enemy({ x: 8940, y: innerHeight - 620, g: 1, type: 1 }),
        ],
        books: [
            new Book({ x: 390, y: innerHeight - 600, type: 1 }),
            new Book({ x: 3700, y: innerHeight - 710, type: 2 }),
            new Book({ x: 6600, y: innerHeight - 200, type: 3 }),
        ],
        posions: [
            new Posion({ x: 2300, y: innerHeight - 710, type: 1 }),
            new Posion({ x: 6800, y: innerHeight - 710, type: 1 }),
        ],
        exit: new Exit({ x: 9900, y: innerHeight - 230 }),   // 110 разница от платформы вверх
        background: [
            new Background({ level: 1, imageSrc: 'Sky.png' }),
            new Background({ level: 1, imageSrc: 'BG_Decor.png' }),
            new Background({ level: 1, imageSrc: 'Middle_Decor.png' }),
            new Background({ level: 1, imageSrc: 'Foreground.png' }),
        ],
        foreground: [
            new Background({ level: 1, imageSrc: 'Ground.png' }),
        ],
    },
    level_2: {
        platforms: [
            new Platform({ x: 0, y: innerHeight - 120, w: 512, h: 60, t: 1 }),  // start platform

            new Platform({ x: 796, y: innerHeight - 120, w: 512, h: 60, t: 1 }),

            new Platform({ x: 1550, y: innerHeight - 200, w: 384, h: 60, t: 2 }),

            new Platform({ x: 2250, y: innerHeight - 120, w: 512, h: 60, t: 1 }),

            new Platform({ x: 3000, y: innerHeight - 240, w: 384, h: 60, t: 2 }),
            new Platform({ x: 3400, y: innerHeight - 360, w: 256, h: 60, t: 2 }),

            new Platform({ x: 3800, y: innerHeight - 500, w: 256, h: 60, t: 2 }),   // middle way

            new Platform({ x: 4200, y: innerHeight - 360, w: 256, h: 60, t: 2 }),   // to right down
            new Platform({ x: 4600, y: innerHeight - 240, w: 256, h: 60, t: 2 }),   // to right down
            new Platform({ x: 5000, y: innerHeight - 120, w: 512, h: 60, t: 1 }),   // to book here and trap too

            new Platform({ x: 4200, y: innerHeight - 600, w: 512, h: 60, t: 2 }),   // to right up
            new Platform({ x: 5000, y: innerHeight - 500, w: 384, h: 60, t: 2 }),   // to right up
            new Platform({ x: 5500, y: innerHeight - 400, w: 384, h: 60, t: 2 }),   // to right up

            new Platform({ x: 3000, y: innerHeight - 630, w: 384, h: 60, t: 2 }),   // left up
            new Platform({ x: 2000, y: innerHeight - 600, w: 768, h: 60, t: 2 }),   // left up
            new Platform({ x: 1400, y: innerHeight - 580, w: 384, h: 60, t: 2 }),   // left up
            new Platform({ x: 800, y: innerHeight - 580, w: 384, h: 60, t: 2 }),   // exit here
        ],
        traps: [
            new Trap({ x: 1090, y: innerHeight - 150, t: 1 }),
            new Trap({ x: 3520, y: innerHeight - 390, t: 1 }),
            new Trap({ x: 5240, y: innerHeight - 150, t: 1 }),
            new Trap({ x: 5600, y: innerHeight - 430, t: 1 }),
            new Trap({ x: 1580, y: innerHeight - 610, t: 1 }),
        ],
        background: [
            new Background({ level: 2, imageSrc: 'Sky.png' }),
            new Background({ level: 2, imageSrc: 'BG_Decor.png' }),
            new Background({ level: 2, imageSrc: 'Middle_Decor.png' }),
            new Background({ level: 2, imageSrc: 'Foreground.png' }),
        ],
        foreground: [
            new Background({ level: 2, imageSrc: 'Ground.png' }),
        ],
        enemies: [
            new Enemy({ x: 996, y: innerHeight - 220, g: 1, type: 1 }),
            new Enemy({ x: 1296, y: innerHeight - 220, g: 1, type: 2 }),
            new Enemy({ x: 2450, y: innerHeight - 220, g: 1, type: 2 }),
            new Enemy({ x: 3200, y: innerHeight - 340, g: 1, type: 1 }),
            new Enemy({ x: 5000, y: innerHeight - 220, g: 1, type: 1 }),
            new Enemy({ x: 5200, y: innerHeight - 220, g: 1, type: 1 }),
            new Enemy({ x: 5400, y: innerHeight - 220, g: 1, type: 1 }),
            new Enemy({ x: 2100, y: innerHeight - 700, g: 1, type: 1 }),
            new Enemy({ x: 2400, y: innerHeight - 700, g: 1, type: 2 }),
            new Enemy({ x: 2700, y: innerHeight - 700, g: 1, type: 1 }),
            new Enemy({ x: 4200, y: innerHeight - 700, g: 1, type: 1 }),
            new Enemy({ x: 4300, y: innerHeight - 700, g: 1, type: 1 }),
            new Enemy({ x: 4500, y: innerHeight - 700, g: 1, type: 2 }),
            new Enemy({ x: 5600, y: innerHeight - 500, g: 1, type: 2 }),

        ],
        coins: [
            new Coins({ x: 500, y: innerHeight - 190, w: 64, h: 64, t: 1 }),
            new Coins({ x: 570, y: innerHeight - 280, w: 64, h: 64, t: 1 }),
            new Coins({ x: 620, y: innerHeight - 370, w: 64, h: 64, t: 1 }),
            new Coins({ x: 670, y: innerHeight - 280, w: 64, h: 64, t: 1 }),
            new Coins({ x: 750, y: innerHeight - 190, w: 64, h: 64, t: 1 }),
            
            new Coins({ x: 1290, y: innerHeight - 190, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1350, y: innerHeight - 230, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1390, y: innerHeight - 270, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1450, y: innerHeight - 310, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1490, y: innerHeight - 350, w: 64, h: 64, t: 1 }),


            new Coins({ x: 2130, y: innerHeight - 440, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2060, y: innerHeight - 420, w: 64, h: 64, t: 1 }),

            new Coins({ x: 2880, y: innerHeight - 400, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3000, y: innerHeight - 400, w: 64, h: 64, t: 1 }),

            new Coins({ x: 2000, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2100, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2200, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2300, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
        ],
        books: [
            new Book({ x: 2950, y: innerHeight - 480, type: 4 }),
            new Book({ x: 5700, y: innerHeight - 480, type: 5 }),
            new Book({ x: 2000, y: innerHeight - 700, type: 6 }),
        ],
        posions: [
            new Posion({ x: 2200, y: innerHeight - 400, type: 1 }),
            new Posion({ x: 5900, y: innerHeight - 620, type: 1 }),
        ],
        exit: new Exit({ x: 850, y: innerHeight - 690 })
    },
    level_3: {
        platforms: [
            new Platform({ x: 0, y: innerHeight - 120, w: 768, h: 60, t: 1 }),  // start platform

            new Platform({ x: 1000, y: innerHeight - 240, w: 384, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 1600, y: innerHeight - 360, w: 640, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 2400, y: innerHeight - 600, w: 512, h: 60, t: 2 }),  // start platform
            new Platform({ x: 2400, y: innerHeight - 200, w: 340, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 3200, y: innerHeight - 400, w: 768, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 4250, y: innerHeight - 120, w: 768, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 5200, y: innerHeight - 320, w: 256, h: 60, t: 2 }),  // start platform
            new Platform({ x: 5300, y: innerHeight - 540, w: 256, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 5800, y: innerHeight - 540, w: 512, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 6600, y: innerHeight - 320, w: 340, h: 60, t: 2 }),  // start platform
            new Platform({ x: 7200, y: innerHeight - 120, w: 340, h: 60, t: 2 }),  // start platform
            new Platform({ x: 7700, y: innerHeight - 120, w: 340, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 8300, y: innerHeight - 220, w: 256, h: 60, t: 2 }),  // start platform
            
            new Platform({ x: 8800, y: innerHeight - 350, w: 340, h: 60, t: 2 }),  // start platform
            new Platform({ x: 9200, y: innerHeight - 540, w: 340, h: 60, t: 2 }),  // start platform
        ],
        coins: [

            new Coins({ x: 500, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 550, y: innerHeight - 240, w: 64, h: 64, t: 1 }),
            new Coins({ x: 600, y: innerHeight - 280, w: 64, h: 64, t: 1 }),
            new Coins({ x: 650, y: innerHeight - 240, w: 64, h: 64, t: 1 }),
            new Coins({ x: 700, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 1200, y: innerHeight - 320, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1300, y: innerHeight - 350, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1400, y: innerHeight - 380, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1500, y: innerHeight - 410, w: 64, h: 64, t: 1 }),

            new Coins({ x: 2250, y: innerHeight - 450, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2300, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2350, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2400, y: innerHeight - 750, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2450, y: innerHeight - 700, w: 64, h: 64, t: 1 }),

            new Coins({ x: 2900, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3950, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3000, y: innerHeight - 750, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3300, y: innerHeight - 500, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3400, y: innerHeight - 500, w: 64, h: 64, t: 1 }),
            
            new Coins({ x: 3800, y: innerHeight - 470, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3900, y: innerHeight - 520, w: 64, h: 64, t: 1 }),
            new Coins({ x: 4000, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 4100, y: innerHeight - 520, w: 64, h: 64, t: 1 }),
            new Coins({ x: 4200, y: innerHeight - 470, w: 64, h: 64, t: 1 }),
            new Coins({ x: 4250, y: innerHeight - 420, w: 64, h: 64, t: 1 }),
            new Coins({ x: 4350, y: innerHeight - 370, w: 64, h: 64, t: 1 }),
            
            new Coins({ x: 5000, y: innerHeight - 420, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5100, y: innerHeight - 520, w: 64, h: 64, t: 1 }),
            
            new Coins({ x: 5250, y: innerHeight - 620, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5350, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            
            new Coins({ x: 6300, y: innerHeight - 580, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6350, y: innerHeight - 640, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6400, y: innerHeight - 680, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6450, y: innerHeight - 580, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6500, y: innerHeight - 640, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6550, y: innerHeight - 600, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6600, y: innerHeight - 540, w: 64, h: 64, t: 1 }),
            
            new Coins({ x: 7750, y: innerHeight - 240, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7800, y: innerHeight - 240, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7850, y: innerHeight - 240, w: 64, h: 64, t: 1 }),
            
            new Coins({ x: 7900, y: innerHeight - 540, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8000, y: innerHeight - 580, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8100, y: innerHeight - 540, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8200, y: innerHeight - 500, w: 64, h: 64, t: 1 }),
        ],
        traps: [
            new Trap({ x: 500, y: innerHeight - 152, t: 1 }),    /// 32
            new Trap({ x: 1900, y: innerHeight - 392, t: 1 }),    /// 32
            new Trap({ x: 2550, y: innerHeight - 232, t: 1 }),    /// 32
            new Trap({ x: 3600, y: innerHeight - 432, t: 1 }),    /// 32
            new Trap({ x: 4550, y: innerHeight - 152, t: 1 }),    /// 32
            new Trap({ x: 6000, y: innerHeight - 572, t: 1 }),    /// 32
            new Trap({ x: 8950, y: innerHeight - 382, t: 1 }),    /// 32
        ],
        enemies: [
            new Enemy({ x: 1100, y: innerHeight - 340, g: 1, type: 1 }),
            new Enemy({ x: 1300, y: innerHeight - 340, g: 1, type: 1 }),

            new Enemy({ x: 1700, y: innerHeight - 460, g: 1, type: 1 }),
            new Enemy({ x: 1700, y: innerHeight - 460, g: 1, type: 2 }),
            new Enemy({ x: 1800, y: innerHeight - 460, g: 1, type: 2 }),
            new Enemy({ x: 2000, y: innerHeight - 460, g: 1, type: 1 }),
            
            new Enemy({ x: 3400, y: innerHeight - 532, g: 1, type: 1 }),
            new Enemy({ x: 3600, y: innerHeight - 532, g: 1, type: 2 }),
            new Enemy({ x: 3800, y: innerHeight - 532, g: 1, type: 2 }),
            
            new Enemy({ x: 4450, y: innerHeight - 252, g: 1, type: 2 }),
            new Enemy({ x: 4550, y: innerHeight - 252, g: 1, type: 2 }),
            new Enemy({ x: 4600, y: innerHeight - 252, g: 1, type: 2 }),
            
            new Enemy({ x: 5900, y: innerHeight - 672, g: 1, type: 2 }),
            new Enemy({ x: 6000, y: innerHeight - 672, g: 1, type: 1 }),
            new Enemy({ x: 6100, y: innerHeight - 672, g: 1, type: 1 }),
            
            new Enemy({ x: 8950, y: innerHeight - 482, g: 1, type: 1 }),
        ],
        books: [
            new Book({ x: 2700, y: innerHeight - 280, type: 7 }),
            new Book({ x: 4500, y: innerHeight - 510, type: 8 }),
            new Book({ x: 7900, y: innerHeight - 450, type: 9 }),
        ],
        posions: [
            new Posion({ x: 2200, y: innerHeight - 650, type: 1 }),
            new Posion({ x: 6800, y: innerHeight - 710, type: 1 }),
        ],
        exit: new Exit({ x: 9500, y: innerHeight - 650 }),   // 110 разница от платформы вверх
        background: [
            new Background({ level: 3, imageSrc: 'Sky.png' }),
            new Background({ level: 3, imageSrc: 'BG_Decor.png' }),
            new Background({ level: 3, imageSrc: 'Middle_Decor.png' }),
            new Background({ level: 3, imageSrc: 'Foreground.png' }),
        ],
        foreground: [
            new Background({ level: 3, imageSrc: 'Ground.png' }),
        ],
    },
    level_4: {
        platforms: [
            new Platform({ x: 0, y: innerHeight - 120, w: 768, h: 60, t: 1 }),  // start platform

            new Platform({ x: 100, y: innerHeight - 620, w: 384, h: 60, t: 2 }),    // enemy +
            new Platform({ x: 300, y: innerHeight - 520, w: 384, h: 60, t: 2 }),    // enemy +

            new Platform({ x: 700, y: innerHeight - 320, w: 1584, h: 60, t: 2 }),   // enemy +++
            new Platform({ x: 1200, y: innerHeight - 120, w: 512, h: 60, t: 1 }),   // enemy ++

            new Platform({ x: 2540, y: innerHeight - 420, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 3040, y: innerHeight - 620, w: 384, h: 60, t: 2 }),   // enemy ++
            new Platform({ x: 3440, y: innerHeight - 320, w: 512, h: 60, t: 2 }),

            new Platform({ x: 3940, y: innerHeight - 520, w: 384, h: 60, t: 2 }),

            new Platform({ x: 4240, y: innerHeight - 120, w: 384, h: 60, t: 2 }),

            new Platform({ x: 4400, y: innerHeight - 340, w: 768, h: 60, t: 2 }),   // enemy +++
            new Platform({ x: 4600, y: innerHeight - 640, w: 384, h: 60, t: 2 }),

            new Platform({ x: 5100, y: innerHeight - 620, w: 384, h: 60, t: 2 }),
            new Platform({ x: 5300, y: innerHeight - 520, w: 384, h: 60, t: 2 }),

            new Platform({ x: 5700, y: innerHeight - 320, w: 1584, h: 60, t: 2 }),  // enemy ++++
            new Platform({ x: 6200, y: innerHeight - 120, w: 512, h: 60, t: 1 }),

            new Platform({ x: 7540, y: innerHeight - 420, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 8040, y: innerHeight - 620, w: 384, h: 60, t: 2 }),
            new Platform({ x: 8440, y: innerHeight - 320, w: 512, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 8740, y: innerHeight - 120, w: 768, h: 60, t: 1 }),   // enemy ++
            new Platform({ x: 8940, y: innerHeight - 520, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 9600, y: innerHeight - 120, w: 384, h: 60, t: 1 }),
        ],
        coins: [
            new Coins({ x: 490, y: innerHeight - 690, w: 64, h: 64, t: 1 }),
            new Coins({ x: 390, y: innerHeight - 690, w: 64, h: 64, t: 1 }),    // book here
            new Coins({ x: 290, y: innerHeight - 690, w: 64, h: 64, t: 1 }),

            new Coins({ x: 800, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 900, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1000, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1100, y: innerHeight - 550, w: 64, h: 64, t: 1 }),

            new Coins({ x: 1300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1450, y: innerHeight - 250, w: 64, h: 64, t: 1 }),       // need trap here
            new Coins({ x: 1600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 1800, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1900, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2000, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2100, y: innerHeight - 550, w: 64, h: 64, t: 1 }),

            new Coins({ x: 2600, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2700, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2800, y: innerHeight - 700, w: 64, h: 64, t: 1 }),       // book here some right

            new Coins({ x: 3600, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3750, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3900, y: innerHeight - 700, w: 64, h: 64, t: 1 }),

            new Coins({ x: 4300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 4500, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 4800, y: innerHeight - 710, w: 64, h: 64, t: 1 }),       // book here

            new Coins({ x: 5200, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5400, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 6000, y: innerHeight - 450, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6200, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6400, y: innerHeight - 650, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 6600, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6800, y: innerHeight - 450, w: 64, h: 64, t: 1 }),

            new Coins({ x: 6200, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6400, y: innerHeight - 200, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 6500, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 7200, y: innerHeight - 450, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7300, y: innerHeight - 530, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7400, y: innerHeight - 620, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7500, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 7700, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7800, y: innerHeight - 690, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7900, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 8100, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8600, y: innerHeight - 600, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8700, y: innerHeight - 600, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9000, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9600, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9000, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9200, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9400, y: innerHeight - 300, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

        ],
        traps: [
            new Trap({ x: 1480, y: innerHeight - 152, t: 1 }),    /// 64
            new Trap({ x: 4480, y: innerHeight - 152, t: 1 }),    /// 64
            new Trap({ x: 6400, y: innerHeight - 350, t: 1 }),    /// 64
            new Trap({ x: 9240, y: innerHeight - 152, t: 1 }),    /// 64
        ],
        enemies: [
            new Enemy({ x: 300, y: innerHeight - 620, g: 1, type: 1 }),

            new Enemy({ x: 700, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 1700, y: innerHeight - 420, g: 1, type: 1 }),
            new Enemy({ x: 2200, y: innerHeight - 420, g: 1, type: 2 }),

            new Enemy({ x: 1400, y: innerHeight - 220, g: 1, type: 1 }),
            new Enemy({ x: 1200, y: innerHeight - 220, g: 1, type: 2 }),

            new Enemy({ x: 2540, y: innerHeight - 520, g: 1, type: 2 }),

            new Enemy({ x: 3040, y: innerHeight - 620, g: 1, type: 2 }),
            new Enemy({ x: 3240, y: innerHeight - 620, g: 1, type: 1 }),

            new Enemy({ x: 5700, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 6000, y: innerHeight - 420, g: 1, type: 1 }),
            new Enemy({ x: 7200, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 8000, y: innerHeight - 420, g: 1, type: 1 }),

            new Enemy({ x: 4400, y: innerHeight - 440, g: 1, type: 2 }),
            new Enemy({ x: 4500, y: innerHeight - 440, g: 1, type: 2 }),
            new Enemy({ x: 4700, y: innerHeight - 440, g: 1, type: 1 }),

            new Enemy({ x: 8440, y: innerHeight - 420, g: 1, type: 2 }),

            new Enemy({ x: 7540, y: innerHeight - 520, g: 1, type: 1 }),

            new Enemy({ x: 8740, y: innerHeight - 220, g: 1, type: 2 }),
            new Enemy({ x: 8940, y: innerHeight - 220, g: 1, type: 1 }),

            new Enemy({ x: 8940, y: innerHeight - 620, g: 1, type: 2 }),
        ],
        books: [
            new Book({ x: 390, y: innerHeight - 600, type: 10 }),
            new Book({ x: 3700, y: innerHeight - 710, type: 11 }),
            new Book({ x: 6600, y: innerHeight - 200, type: 12 }),
        ],
        posions: [
            new Posion({ x: 2300, y: innerHeight - 710, type: 1 }),
            new Posion({ x: 6800, y: innerHeight - 710, type: 1 }),
        ],
        exit: new Exit({ x: 9900, y: innerHeight - 230 }),   // 110 разница от платформы вверх
        background: [
            new Background({ level: 4, imageSrc: 'Sky.png' }),
            new Background({ level: 4, imageSrc: 'BG_Decor.png' }),
            new Background({ level: 4, imageSrc: 'Middle_Decor.png' }),
            new Background({ level: 4, imageSrc: 'Foreground.png' }),
        ],
        foreground: [
            new Background({ level: 4, imageSrc: 'Ground.png' }),
        ],
    },
    level_5: {
        platforms: [
            new Platform({ x: 0, y: innerHeight - 120, w: 768, h: 60, t: 1 }),  // start platform

            new Platform({ x: 100, y: innerHeight - 620, w: 384, h: 60, t: 2 }),    // enemy +
            new Platform({ x: 300, y: innerHeight - 520, w: 384, h: 60, t: 2 }),    // enemy +

            new Platform({ x: 700, y: innerHeight - 320, w: 1584, h: 60, t: 2 }),   // enemy +++
            new Platform({ x: 1200, y: innerHeight - 120, w: 512, h: 60, t: 1 }),   // enemy ++

            new Platform({ x: 2540, y: innerHeight - 420, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 3040, y: innerHeight - 620, w: 384, h: 60, t: 2 }),   // enemy ++
            new Platform({ x: 3440, y: innerHeight - 320, w: 512, h: 60, t: 2 }),

            new Platform({ x: 3940, y: innerHeight - 520, w: 384, h: 60, t: 2 }),

            new Platform({ x: 4240, y: innerHeight - 120, w: 384, h: 60, t: 2 }),

            new Platform({ x: 4400, y: innerHeight - 340, w: 768, h: 60, t: 2 }),   // enemy +++
            new Platform({ x: 4600, y: innerHeight - 640, w: 384, h: 60, t: 2 }),

            new Platform({ x: 5100, y: innerHeight - 620, w: 384, h: 60, t: 2 }),
            new Platform({ x: 5300, y: innerHeight - 520, w: 384, h: 60, t: 2 }),

            new Platform({ x: 5700, y: innerHeight - 320, w: 1584, h: 60, t: 2 }),  // enemy ++++
            new Platform({ x: 6200, y: innerHeight - 120, w: 512, h: 60, t: 1 }),

            new Platform({ x: 7540, y: innerHeight - 420, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 8040, y: innerHeight - 620, w: 384, h: 60, t: 2 }),
            new Platform({ x: 8440, y: innerHeight - 320, w: 512, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 8740, y: innerHeight - 120, w: 768, h: 60, t: 1 }),   // enemy ++
            new Platform({ x: 8940, y: innerHeight - 520, w: 384, h: 60, t: 2 }),   // enemy +

            new Platform({ x: 9600, y: innerHeight - 120, w: 384, h: 60, t: 1 }),
        ],
        coins: [
            new Coins({ x: 490, y: innerHeight - 690, w: 64, h: 64, t: 1 }),
            new Coins({ x: 390, y: innerHeight - 690, w: 64, h: 64, t: 1 }),    // book here
            new Coins({ x: 290, y: innerHeight - 690, w: 64, h: 64, t: 1 }),

            new Coins({ x: 800, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 900, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1000, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1100, y: innerHeight - 550, w: 64, h: 64, t: 1 }),

            new Coins({ x: 1300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1450, y: innerHeight - 250, w: 64, h: 64, t: 1 }),       // need trap here
            new Coins({ x: 1600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 1800, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 1900, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2000, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2100, y: innerHeight - 550, w: 64, h: 64, t: 1 }),

            new Coins({ x: 2600, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2700, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 2800, y: innerHeight - 700, w: 64, h: 64, t: 1 }),       // book here some right

            new Coins({ x: 3600, y: innerHeight - 700, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3750, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 3900, y: innerHeight - 700, w: 64, h: 64, t: 1 }),

            new Coins({ x: 4300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 4500, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 4800, y: innerHeight - 710, w: 64, h: 64, t: 1 }),       // book here

            new Coins({ x: 5200, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 5400, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 6000, y: innerHeight - 450, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6200, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6400, y: innerHeight - 650, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 6600, y: innerHeight - 550, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6800, y: innerHeight - 450, w: 64, h: 64, t: 1 }),

            new Coins({ x: 6200, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6300, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6400, y: innerHeight - 200, w: 64, h: 64, t: 1 }),       // trap here
            new Coins({ x: 6500, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 6600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 7200, y: innerHeight - 450, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7300, y: innerHeight - 530, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7400, y: innerHeight - 620, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7500, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 7700, y: innerHeight - 650, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7800, y: innerHeight - 690, w: 64, h: 64, t: 1 }),
            new Coins({ x: 7900, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 8100, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8600, y: innerHeight - 600, w: 64, h: 64, t: 1 }),
            new Coins({ x: 8700, y: innerHeight - 600, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9000, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9300, y: innerHeight - 710, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9600, y: innerHeight - 710, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9000, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

            new Coins({ x: 9200, y: innerHeight - 200, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9400, y: innerHeight - 300, w: 64, h: 64, t: 1 }),
            new Coins({ x: 9600, y: innerHeight - 200, w: 64, h: 64, t: 1 }),

        ],
        traps: [
            new Trap({ x: 1480, y: innerHeight - 152, t: 1 }),    /// 64
            new Trap({ x: 4480, y: innerHeight - 152, t: 1 }),    /// 64
            new Trap({ x: 6400, y: innerHeight - 350, t: 1 }),    /// 64
            new Trap({ x: 9240, y: innerHeight - 152, t: 1 }),    /// 64
        ],
        enemies: [
            new Enemy({ x: 300, y: innerHeight - 620, g: 1, type: 2 }),

            new Enemy({ x: 700, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 1700, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 2200, y: innerHeight - 420, g: 1, type: 2 }),

            new Enemy({ x: 1400, y: innerHeight - 220, g: 1, type: 2 }),
            new Enemy({ x: 1200, y: innerHeight - 220, g: 1, type: 2 }),

            new Enemy({ x: 2540, y: innerHeight - 520, g: 1, type: 2 }),

            new Enemy({ x: 3040, y: innerHeight - 620, g: 1, type: 2 }),
            new Enemy({ x: 3240, y: innerHeight - 620, g: 1, type: 2 }),

            new Enemy({ x: 5700, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 6000, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 7200, y: innerHeight - 420, g: 1, type: 2 }),
            new Enemy({ x: 8000, y: innerHeight - 420, g: 1, type: 2 }),

            new Enemy({ x: 4400, y: innerHeight - 440, g: 1, type: 2 }),
            new Enemy({ x: 4500, y: innerHeight - 440, g: 1, type: 2 }),
            new Enemy({ x: 4700, y: innerHeight - 440, g: 1, type: 2 }),

            new Enemy({ x: 6350, y: innerHeight - 450, g: 1, type: 2 }),
            new Enemy({ x: 6400, y: innerHeight - 450, g: 1, type: 2 }),

            new Enemy({ x: 8440, y: innerHeight - 420, g: 1, type: 2 }),

            new Enemy({ x: 7540, y: innerHeight - 520, g: 1, type: 2 }),

            new Enemy({ x: 8740, y: innerHeight - 220, g: 1, type: 2 }),
            new Enemy({ x: 8940, y: innerHeight - 220, g: 1, type: 2 }),

            new Enemy({ x: 8940, y: innerHeight - 620, g: 1, type: 2 }),

            new Enemy({ x: 9240, y: innerHeight - 252, g: 1, type: 2 }),
        ],
        books: [
            new Book({ x: 390, y: innerHeight - 600, type: 13 }),
            new Book({ x: 3700, y: innerHeight - 710, type: 14 }),
            new Book({ x: 6600, y: innerHeight - 200, type: 15 }),
        ],
        posions: [
            new Posion({ x: 2300, y: innerHeight - 710, type: 1 }),
            new Posion({ x: 6800, y: innerHeight - 710, type: 1 }),
        ],
        exit: new Exit({ x: 9900, y: innerHeight - 230 }),   // 110 разница от платформы вверх
        background: [
            new Background({ level: 5, imageSrc: 'Sky.png' }),
            new Background({ level: 5, imageSrc: 'BG_Decor.png' }),
            new Background({ level: 5, imageSrc: 'Middle_Decor.png' }),
            new Background({ level: 5, imageSrc: 'Foreground.png' }),
        ],
        foreground: [
            new Background({ level: 5, imageSrc: 'Ground.png' }),
        ],
    }
}