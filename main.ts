input.onButtonPressed(Button.A, function () {
    if (allowed_to_move) {
        p1.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (allowed_to_move) {
        p1.change(LedSpriteProperty.X, 1)
    }
})
let b1: game.LedSprite = null
let rolled_number = 0
let passed_time = 0
let allowed_to_move = 0
let p1: game.LedSprite = null
radio.setGroup(1)
p1 = game.createSprite(2, 4)
let start_time = input.runningTime()
allowed_to_move = 1
basic.forever(function () {
    passed_time = input.runningTime() - start_time
    rolled_number = randint(1, 2)
    if (passed_time >= 10000) {
        allowed_to_move = 0
        if (rolled_number == 1) {
            b1 = game.createSprite(p1.get(LedSpriteProperty.X), 3)
            for (let index = 0; index < 3; index++) {
                b1.change(LedSpriteProperty.Y, -1)
                basic.pause(50)
            }
            radio.sendValue("b1x", b1.get(LedSpriteProperty.X))
        }
    }
})
