input.onButtonPressed(Button.A, function on_button_pressed_a() {
    serial.writeValue("temperature", weatherbit.temperature())
    serial.writeValue("humidity", weatherbit.humidity())
    serial.writeValue("pressure", weatherbit.pressure())
    serial.writeValue("altitude", weatherbit.altitude())
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    serial.writeValue("soil temperature", weatherbit.soilTemperature())
    serial.writeValue("soil moisture", weatherbit.soilMoisture())
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    serial.writeValue("wind speed", weatherbit.windSpeed())
    basic.pause(300)
    serial.writeValue("rain", weatherbit.rain())
})
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startWeatherMonitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BaudRate9600)
