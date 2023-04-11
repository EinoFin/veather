def on_button_pressed_a():
    serial.write_value("temperature", weatherbit.temperature())
    serial.write_value("humidity", weatherbit.humidity())
    serial.write_value("pressure", weatherbit.pressure())
    serial.write_value("altitude", weatherbit.altitude())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    serial.write_value("soil temperature", weatherbit.soil_temperature())
    serial.write_value("soil moisture", weatherbit.soil_moisture())
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    serial.write_value("wind speed", weatherbit.wind_speed())
    basic.pause(300)
    serial.write_value("rain", weatherbit.rain())
input.on_button_pressed(Button.B, on_button_pressed_b)

weatherbit.start_rain_monitoring()
weatherbit.start_wind_monitoring()
weatherbit.start_weather_monitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)