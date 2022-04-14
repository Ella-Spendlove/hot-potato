input.onButtonPressed(Button.A, function () {
    num = 10
    strip2.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip2.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip2.clear()
    strip22.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("1 2 3 Go!")
    strip2.clear()
    while (num > -1) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Orange))
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
        for (let index = 0; index < 3; index++) {
            strip2.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(200)
            strip2.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(200)
        }
        basic.showIcon(IconNames.Skull)
        basic.showString(" You're Out!")
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.B, function () {
    ran = randint(5, 15)
    strip2.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip2.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip2.clear()
    strip22.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("1 2 3 Go!")
    strip2.clear()
    while (ran > -1) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Orange))
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
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        strip22.showColor(neopixel.colors(NeoPixelColors.Red))
        for (let index = 0; index < 3; index++) {
            strip2.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(200)
            strip2.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(200)
        }
        basic.showIcon(IconNames.Skull)
        basic.showString(" You're Out!")
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let strip22: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip2: neopixel.Strip = null
let ran = 0
let num = 0
num = 10
ran = randint(5, 15)
basic.showString("A=easy B=hard")
strip2 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
range = strip2.range(0, 6)
range2 = strip2.range(5, 11)
strip22 = strip2.range(10, 15)
for (let index = 0; index <= 15; index++) {
    strip2.setPixelColor(index, neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
}
for (let index = 0; index < 15; index++) {
    strip2.show()
    strip2.rotate(1)
    basic.pause(100)
}
range.showColor(neopixel.colors(NeoPixelColors.Red))
range2.showColor(neopixel.colors(NeoPixelColors.Blue))
strip22.showColor(neopixel.colors(NeoPixelColors.Red))
