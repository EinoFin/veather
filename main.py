def on_button_pressed_a():
    basic.show_string(str((weatherbit.rain())))
input.on_button_pressed(Button.A, on_button_pressed_a)

weatherbit.start_rain_monitoring()