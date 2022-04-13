def on_button_pressed_a():
    global num
    num = 10
    basic.show_string("1 2 3 Go!")
    while num > -1:
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . # # # .
                        . . # . .
                        . . . . .
        """)
        num += -1
    basic.clear_screen()
    if num == -1:
        basic.show_icon(IconNames.SKULL)
        basic.show_string(" You're Out!")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global ran
    ran = randint(5, 15)
    basic.show_string("1 2 3 Go!")
    while ran > -1:
        basic.pause(500)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . # # # .
                        . . # . .
                        . . . . .
        """)
        ran += -1
    if ran == -1:
        basic.show_icon(IconNames.SKULL)
        basic.show_string(" You're Out!")
input.on_button_pressed(Button.B, on_button_pressed_b)

ran = 0
num = 0
num = 10
ran = randint(5, 15)
basic.show_string("A=easy B=hard")
strip2 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
range2 = strip2.range(0, 8)
range22 = strip2.range(8, 15)
for index in range(16):
    strip2.show_color(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
while True:
    strip2.show()
    strip2.rotate(1)
    basic.pause(100)