function reloj (posicionX: number, posicionY: number) {
    basic.pause(1000)
    aguja.set(LedSpriteProperty.X, posicionX)
    aguja.set(LedSpriteProperty.Y, posicionY)
}
let aguja: game.LedSprite = null
let centro = game.createSprite(2, 2)
aguja = game.createSprite(2, 0)
reloj(3, 0)
reloj(4, 1)
reloj(4, 2)
reloj(4, 3)
reloj(3, 4)
reloj(2, 4)
reloj(1, 4)
reloj(0, 3)
reloj(0, 2)
reloj(0, 1)
reloj(1, 0)
reloj(2, 0)
music.playTone(262, music.beat(BeatFraction.Double))
basic.showString("Reloj")
basic.forever(function () {
	
})
