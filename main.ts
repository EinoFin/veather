input.onButtonPressed(Button.A, function () {
    serial.writeValue("temperature", weatherbit.temperature())
    serial.writeValue("humidity", weatherbit.humidity())
    serial.writeValue("pressure", weatherbit.pressure())
    serial.writeValue("altitude", weatherbit.altitude())
})
input.onButtonPressed(Button.AB, function () {
    serial.writeValue("soil temperature", weatherbit.soilTemperature())
    serial.writeValue("soil moisture", weatherbit.soilMoisture())
})
input.onButtonPressed(Button.B, function () {
    serial.writeValue("wind speed", weatherbit.windSpeed())
    basic.pause(300)
    serial.writeValue("rain", weatherbit.rain())
})
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startWeatherMonitoring()
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate9600
)
