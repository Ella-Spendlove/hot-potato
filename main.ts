input.onButtonPressed(Button.A, function () {
    basic.showString("1 2 3 Go!")
    while (num > -1) {
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        num += -1
    }
    basic.clearScreen()
    if (num == -1) {
        basic.showIcon(IconNames.Skull)
        basic.showString(" You're Out!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("1 2 3 Go!")
    while (ran > -1) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        ran += -1
    }
    if (ran == -1) {
        basic.showIcon(IconNames.Skull)
        basic.showString(" You're Out!")
    }
})
let ran = 0
let num = 0
num = 10
ran = randint(5, 15)
basic.showString("A=easy B=hard")
