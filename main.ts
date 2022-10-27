controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    rich_man.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rich_man.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rich_man.setPosition(130, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    rich_man.setPosition(100, 100)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let rich_man: Sprite = null
scene.setBackgroundColor(11)
effects.starField.startScreenEffect()
tiles.setCurrentTilemap(tilemap`level1`)
rich_man = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . 9 5 9 5 9 . . . . . . 
    . . . . . 9 9 5 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 8 8 8 9 . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    `, SpriteKind.Player)
rich_man.setPosition(80, 100)
info.setScore(0)
info.setLife(5)
let speed: Sprite = 48
game.onUpdateInterval(2000, function () {
    speed.x += 1
})
game.onUpdateInterval(500, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 6 6 6 6 6 . . . . . . . . 
            . . 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . . . 6 6 6 6 6 . . . . . . . . 
            . . . 6 6 6 6 6 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 6 1 . . . . . . . 
            . . . . . 1 6 6 6 1 . . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . 1 6 6 6 6 6 6 6 1 . . . . 
            . . . 1 6 6 6 6 6 6 6 1 . . . . 
            . . 1 1 1 6 6 6 6 6 1 1 1 . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . 1 1 1 6 6 6 6 6 1 1 1 . . . 
            . . 1 6 6 6 6 6 6 6 6 6 1 . . . 
            . . 1 6 6 6 6 6 6 6 6 6 1 . . . 
            . . . 1 6 6 6 6 6 6 6 1 . . . . 
            . . . . 1 6 6 6 6 6 1 . . . . . 
            . . . . . 1 6 6 6 1 . . . . . . 
            . . . . . . 1 6 1 . . . . . . . 
            `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . 1 6 6 6 1 . . . . 
            . . . . . . . 1 6 6 6 6 1 . . . 
            1 1 1 1 1 1 1 1 6 6 6 6 6 1 . . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 . 
            1 1 1 1 1 1 1 1 6 6 6 6 6 1 . . 
            . . . . . . . 1 6 6 6 6 1 . . . 
            . . . . . . . 1 6 6 6 1 . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
