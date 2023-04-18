function soil () {
    serial.writeValue("Soil moisture", weatherbit.soilMoisture())
    // multa
    serial.writeValue("Soil temp", dstemp.celsius(DigitalPin.P12))
}
function wind_rain () {
    // tuuli ja sade
    serial.writeValue("Wind speed", weatherbit.windSpeed())
    serial.writeLine("Wind direction:" + weatherbit.directionString(0))
    serial.writeValue("Rain amount", weatherbit.rain())
}
function bme280 () {
    // lämpö, kosteus ja ilmanpaine
    serial.writeValue("Temperature", weatherbit.temperature() / 100)
    serial.writeValue("Humidity", weatherbit.humidity() / 1024)
    serial.writeValue("Pressure", weatherbit.pressure() / 25600)
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
timeanddate.set24HourTime(15, 30, 0)
timeanddate.setDate(4, 14, 2023)
loops.everyInterval(10000, function () {
    // tekee joka 5:s minuutti
    serial.writeLine("")
    serial.writeLine("[" + timeanddate.dateTime() + "]")
    bme280()
    soil()
    wind_rain()
})
