function soil () {
    // multa
    serial.writeValue("soil temperature", weatherbit.soilTemperature() / 100)
    serial.writeValue("soil moisture", weatherbit.soilMoisture())
}
function wind_rain () {
    // tuuli ja sade
    serial.writeValue("wind speed", weatherbit.windSpeed())
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
timeanddate.set24HourTime(14, 3, 0)
timeanddate.setDate(4, 12, 2023)
loops.everyInterval(300000, function () {
    // tekee joka 5:s minuutti
    serial.writeLine(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
    soil()
    bme280()
    wind_rain()
})
