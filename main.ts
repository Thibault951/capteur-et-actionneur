game.startCountdown(40000)
let Piece = game.createSprite(randint(0, 4), randint(0, 4))
Piece.set(LedSpriteProperty.Brightness, 180)
let Voiture = game.createSprite(2, 2)
while (true) {
    if (Piece.isTouching(Voiture)) {
        game.removeLife(0)
        Piece.set(LedSpriteProperty.X, randint(0, 4))
        Piece.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        Voiture.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        Voiture.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        Voiture.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        Voiture.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}
