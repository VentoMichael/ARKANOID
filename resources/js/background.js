const background = {
    game: null,
    src: 0,
    frames: {
        image:0,
        sx: 0,
        sy: 0,
        sw: 0,
        sh: 0,
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0,
    },
    update() {
        this.game.renderRequestFrames(this.frames)
    },
    init(game) {
        this.game = game
        this.frames.image = this.game.spriteWorld
        this.frames.sw = this.game.canvas.width
        this.frames.sh = this.game.canvas.height
        this.frames.dw = this.game.canvas.width
        this.frames.dh = this.game.canvas.height
    }
}
export default background