def soil():
    # multa
    serial.write_value("soil temperature", weatherbit.soil_temperature() / 100)
    serial.write_value("soil moisture", weatherbit.soil_moisture())
def wind_rain():
    # tuuli ja sade
    serial.write_value("wind speed", weatherbit.wind_speed())
    serial.write_value("rain", weatherbit.rain())
def bme280():
    # lämpö, kosteus ja ilmanpaine
    serial.write_value("temperature", weatherbit.temperature() / 100)
    serial.write_value("humidity", weatherbit.humidity() / 1024)
    serial.write_value("pressure", weatherbit.pressure() / 25600)

# aloitus
weatherbit.start_rain_monitoring()
weatherbit.start_wind_monitoring()
weatherbit.start_weather_monitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)
timeanddate.set24_hour_time(13, 30, 0)
timeanddate.set_date(1, 20, 2022)

def on_every_interval():
    serial.write_line(timeanddate.time(timeanddate.TimeFormat.HHMMSS2_4HR))
    # tekee joka 5:s minuutti
    soil()
    bme280()
    wind_rain()
loops.every_interval(300000, on_every_interval)
