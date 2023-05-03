# aloitus
weatherbit.start_rain_monitoring()
weatherbit.start_wind_monitoring()
weatherbit.start_weather_monitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)

def on_every_interval():
    serial.write_line("" + str(weatherbit.temperature() / 100) + "," + str(weatherbit.pressure() / 25600) + "," + str(weatherbit.humidity() / 1024) + "," + str(weatherbit.wind_speed()) + "," + (weatherbit.direction_string(0)) + "," + str(weatherbit.rain()) + "," + str(weatherbit.soil_moisture()) + "," + str(dstemp.celsius(DigitalPin.P12)))
loops.every_interval(60000, on_every_interval)
