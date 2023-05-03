// aloitus
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startWeatherMonitoring()
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate9600
)
loops.everyInterval(60000, function () {
    serial.writeLine("" + weatherbit.temperature() / 100 + "," + ("" + weatherbit.pressure() / 25600) + "," + ("" + weatherbit.humidity() / 1024) + "," + ("" + weatherbit.windSpeed()) + "," + weatherbit.windDirectionRaw() + "," + ("" + weatherbit.rain()) + "," + ("" + weatherbit.soilMoisture()) + "," + ("" + dstemp.celsius(DigitalPin.P12)))
})
