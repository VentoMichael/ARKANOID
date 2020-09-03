import background from "./background";
import ship from "./ship";
import gameController from "./gameController";
import weapon from "./weapon";
import Bricks from "./Bricks";

const game = {
    canvas: document.getElementById('game'),
    context: null,
    spriteWorld: new Image(),
    sourcesUrl: ["http://localhost:8080/resources/img/world.png", "http://localhost:8080/resources/img/ship.png", "http://localhost:8080/resources/img/blocks.png"],
    spriteShip: new Image(),
    spriteBricks: new Image(),
    hasStarted: false,
    bricks: [],
    maxBricks: 5,
    init() {
        this.spriteWorld.src = this.sourcesUrl[0]
        this.spriteShip.src = this.sourcesUrl[1]
        this.spriteBricks.src = this.sourcesUrl[2]
        this.context = this.canvas.getContext('2d')
        this.spriteWorld.addEventListener('load', () => {
            gameController.init(this)
            background.init(this)
            ship.init(this)
            weapon.init(this)
            this.animation()
        })
    },
    animation() {
        this.requestId = window.requestAnimationFrame(() => {
            this.animation()
        })
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        background.update()
        if (this.bricks.length <= this.maxBricks) {
            for (let i = 0; i < game.maxBricks; i++){
                for (let j = 0; j < 3; j++) {
                    let x = 12 + 20 * i
                    let y = 10 + 10 * j
                    this.bricks.push(new Bricks(this, x,y))
                }
            }
        }
        this.bricks.forEach(brick => {
            brick.update()
        })
        ship.update()
        weapon.update()

    },
    renderRequestFrames(coordinates) {
        this.context.drawImage(
            coordinates.image,
            coordinates.sx,
            coordinates.sy,
            coordinates.sw,
            coordinates.sh,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh,
        )
    },
    cancelAnimation() {
        window.cancelAnimationFrame(this.requestId)
    }

}
game.init()