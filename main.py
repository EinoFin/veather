def loss():
    basic.show_leds("""
        # # . . .
                # # . . .
                # # . . .
                # # . . .
                # # . . .
    """)
    basic.pause(5000)
    basic.show_leds("""
        # # . . .
                # # . . .
                # # . # #
                # # . # #
                # # . # #
    """)
    basic.pause(5000)
    basic.show_leds("""
        # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
    """)
    basic.pause(5000)
    basic.show_leds("""
        # # . . .
                # # . . .
                # # . . .
                # # # # #
                # # # # #
    """)

def on_bluetooth_connected():
    loss()

bluetooth.on_bluetooth_connected(on_bluetooth_connected)

weatherbit.start_weather_monitoring()
weatherbit.start_rain_monitoring()
weatherbit.start_wind_monitoring()