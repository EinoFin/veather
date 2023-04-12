function soil () {
    // multa
    serial.writeValue("soil temperature", weatherbit.soilTemperature() / 100)
    serial.writeValue("soil moisture", weatherbit.soilMoisture())
}
function wind_rain () {
    // tuuli ja sade
    serial.writeValue("wind speed", weatherbit.windSpeed())
    serial.writeLine(weatherbit.windDirection())
    serial.writeValue("rain", weatherbit.rain())
}
function bme280 () {
    // lämpö, kosteus ja ilmanpaine
    serial.writeValue("temperature", weatherbit.temperature() / 100)
    serial.writeValue("humidity", weatherbit.humidity() / 1024)
    serial.writeValue("pressure", weatherbit.pressure() / 25600)
}
// aloitus
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startWeatherMonitoring()
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate9600
)
timeanddate.set24HourTime(13, 30, 0)
timeanddate.setDate(1, 20, 2022)
loops.everyInterval(300000, function () {
    serial.writeLine(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))
    // tekee joka 5:s minuutti
    soil()
    bme280()
    wind_rain()
})
