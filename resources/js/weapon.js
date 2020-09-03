import ship from "./ship";
import Bricks from "./Bricks";

const weapon = {
    game: null,
    width: 6,
    height: 4,
    speed: 2,
    borderCanvas: 8,
    x: 0,
    y: 0,
    velocityY: 2,
    velocityX: (1 + Math.floor(Math.random() * 1)) * (Math.random() > 0.5 ? -1 : 1),
    update() {
        if (this.game.hasStarted) {
            this.checkCollisionWithCanvas()
            this.checkCollisionWithVoid()
            this.checkCollisionWithBricks()
            this.y -= this.velocityY
            this.x -= this.velocityX
        }
        this.render()
    },
    checkCollisionWithCanvas() {
        if (this.y < this.height / 2 + this.borderCanvas) {
            this.velocityY *= -1
        }
        if (this.x < this.height / 2 + this.borderCanvas) {
            this.velocityX *= -1
        }
        if (this.x >= this.game.canvas.width - this.height - this.borderCanvas) {
            this.velocityX *= -1
        }
    },
    checkCollisionWithVoid() {
        if (this.y + (this.height) / 2 === ship.y + (this.height) / 2) {
            if (this.x + (this.width) / 2 <= ship.x + ship.width && this.x + (this.width) / 2 > ship.x) {
                this.velocityY *= -1
            } else {
                this.game.cancelAnimation()
            }
        }
    },
    checkCollisionWithBricks() {
       // this.game.bricks.forEach(brick => {
       //     if (this.x + this.width / 2 > brick.x && this.x - this.width / 2 < brick.x + brick.width) {
       //     }
       //         if ((this.y - this.height / 2) < brick.redBricks + brick.height){
       //             //this.game.bricks.splice(0,1)
       //             //this.game.cancelAnimation()
       //     }
       //})

    },
    render() {
        this.game.context.save()
        this.game.context.translate(this.x, this.y)
        this.game.renderRequestFrames({
            image:this.game.spriteShip,
            sx: 0,
            sy: 40,
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
        this.x = this.game.canvas.width / 2 - this.width / 2
        this.y = ship.y - this.height
    }
}
export default weapon