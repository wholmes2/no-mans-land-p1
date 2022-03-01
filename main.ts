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
radio.onReceivedValue(function (name, value) {
    if (name == "b2x") {
        b2 = game.createSprite(4 - value, 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(50)
            b2.change(LedSpriteProperty.Y, 1)
        }
        if (b2.isTouching(p1)) {
            game.addScore(-1)
        }
    }
})
let b1: game.LedSprite = null
let rolled_number = 0
let passed_time = 0
let b2: game.LedSprite = null
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
        radio.sendString("pause buttons")
        if (rolled_number == 1) {
            b1 = game.createSprite(p1.get(LedSpriteProperty.X), 3)
            for (let index = 0; index < 3; index++) {
                basic.pause(50)
                b1.change(LedSpriteProperty.Y, -1)
            }
            radio.sendValue("b1x", b1.get(LedSpriteProperty.X))
            b1.delete()
            start_time = input.runningTime()
            allowed_to_move = 1
        }
        if (rolled_number == 2) {
            radio.sendString("launch b2")
        }
    }
})
