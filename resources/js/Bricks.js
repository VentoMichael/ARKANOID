import weapon from "./weapon";

export default class Bricks {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.width = 15
        this.height = 7
        this.redBricks = {
            image: this.game.spriteBricks,
            sx: 0,
            sy: 15,
            sw: this.width,
            sh: this.height,
            dx: this.x,
            dy: this.y,
            dw: this.width,
            dh: this.height,
        }

    }

    update() {
        this.render()
    }

    render() {
        this.game.context.save()
        this.game.context.translate(this.x, this.y)
        this.game.renderRequestFrames(
            this.redBricks
        )
        this.game.context.restore()
    }
}