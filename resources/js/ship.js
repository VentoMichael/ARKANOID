const ship = {
    game: null,
    width: 48,
    height: 8,
    speed: 3,
    x:0,
    y:0,
    update() {
        this.render()
    },
    render() {
        this.game.context.save()
        this.game.context.translate(this.x,this.y)
        this.game.renderRequestFrames({
            image:this.game.spriteShip,
            sx: 64,
            sy: 0,
            sw: this.width,
            sh: this.height,
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
        })
        this.game.context.restore()
    },
    init(game) {
        this.game = game
        this.x = this.game.canvas.width /2 - this.width /2
        this.y = this.game.canvas.height - this.height * 2
    }
}
export default ship