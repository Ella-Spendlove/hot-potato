input.onButtonPressed(Button.A, function () {
    num = 10
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
    ran = randint(5, 15)
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
let strip2 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
while (true) {
    strip2.show()
    strip2.rotate(1)
    basic.pause(100)
}
let range = strip2.range(0, 8)
range = strip2.range(8, 15)
