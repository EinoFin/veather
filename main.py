def soil():
    serial.write_value("soil temperature", weatherbit.soil_temperature() / 100)
    serial.write_value("soil moisture", weatherbit.soil_moisture())
def wind_rain():
    serial.write_value("wind speed", weatherbit.wind_speed())
    basic.pause(300)
    serial.write_value("rain", weatherbit.rain())
def bme280():
    serial.write_value("temperature", weatherbit.temperature() / 100)
    serial.write_value("humidity", weatherbit.humidity() / 1024)
    serial.write_value("pressure", weatherbit.pressure() / 25600)
weatherbit.start_rain_monitoring()
weatherbit.start_wind_monitoring()
weatherbit.start_weather_monitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)