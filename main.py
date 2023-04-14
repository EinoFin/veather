def soil():
    serial.write_value("Soil moisture", weatherbit.soil_moisture())
    # multa
    serial.write_value("Soil temp", weatherbit.soil_temperature() / 100)
def wind_rain():
    # tuuli ja sade
    serial.write_value("Wind speed", weatherbit.wind_speed())
    serial.write_line("Wind direction:" + weatherbit.direction_string(0))
    serial.write_value("Rain amount", weatherbit.rain())
def bme280():
    # lämpö, kosteus ja ilmanpaine
    serial.write_value("Temperature", weatherbit.temperature() / 100)
    serial.write_value("Humidity", weatherbit.humidity() / 1024)
    serial.write_value("Pressure", weatherbit.pressure() / 25600)
# aloitus
weatherbit.start_rain_monitoring()
weatherbit.start_wind_monitoring()
weatherbit.start_weather_monitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)
timeanddate.set24_hour_time(15, 30, 0)
timeanddate.set_date(4, 14, 2023)

def on_every_interval():
    # tekee joka 5:s minuutti
    serial.write_line("")
    serial.write_line("["+timeanddate.date_time()+"]")
    bme280()
    soil()
    wind_rain()
loops.every_interval(60000, on_every_interval)
