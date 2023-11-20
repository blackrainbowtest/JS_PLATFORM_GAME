

export class InputHandler {
    constructor(game) {
        this.game = game
        window.addEventListener('keydown', e => {
            if (((e.code === 'KeyW' || e.code === 'ArrowUp') ||
                (e.code === 'KeyS' || e.code === 'ArrowDown') ||
                (e.code === 'KeyA' || e.code === 'ArrowLeft') ||
                (e.code === 'KeyD' || e.code === 'ArrowRight') ||
                (e.code === 'ShiftLeft' || e.code === 'ShiftRight') ||
                (e.code === 'Space')
            )
                && (this.game.inputKeys.indexOf(e.code) === -1)) {
                this.game.inputKeys.push(e.code)
            }
            // console.log(this.game.inputKeys);
        })
        window.addEventListener('keyup', e => {
            if (this.game.inputKeys.indexOf(e.code) > -1) {
                this.game.inputKeys.splice(this.game.inputKeys.indexOf(e.code), 1)
            }
            // console.log(this.game.inputKeys);
        })

    }
}