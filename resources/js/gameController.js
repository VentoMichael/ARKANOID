import ship from "./ship";

const gameController = {
    init(game) {
        window.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                if (!(game.hasStarted)) {
                    game.hasStarted = true
                }
            }
            if (game.hasStarted){
                if (e.key === 'q') {
                    if (ship.x < 11.5)
                        ship.x = 11.5
                    ship.x -= 2
                }
                if (e.key === 'd') {
                    if (ship.x > game.canvas.width - 10 - ship.width) {
                        ship.x = game.canvas.width - 10 - ship.width
                    }
                    ship.x -= -2
                }
            }

        })
    }
}
export default gameController