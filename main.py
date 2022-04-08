def on_button_pressed_a():
    global num
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
    global num
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
        num += -1
    if num == -1:
        basic.show_icon(IconNames.SKULL)
        basic.show_string(" You're Out!")
input.on_button_pressed(Button.B, on_button_pressed_b)

ran = 0
num = 0
num = 10
ran = randint(10, 15)
basic.show_string("A=easy B=hard")