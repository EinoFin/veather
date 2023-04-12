function soil() {
    serial.writeValue("soil temperature", weatherbit.soilTemperature() / 100)
    serial.writeValue("soil moisture", weatherbit.soilMoisture())
}

function wind_rain() {
    serial.writeValue("wind speed", weatherbit.windSpeed())
    basic.pause(300)
    serial.writeValue("rain", weatherbit.rain())
}

function bme280() {
    serial.writeValue("temperature", weatherbit.temperature() / 100)
    serial.writeValue("humidity", weatherbit.humidity() / 1024)
    serial.writeValue("pressure", weatherbit.pressure() / 25600)
}

weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startWeatherMonitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BaudRate9600)
