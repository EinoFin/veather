function loss() {
    basic.showLeds(`
        # # . . .
                # # . . .
                # # . . .
                # # . . .
                # # . . .
    `)
    basic.pause(5000)
    basic.showLeds(`
        # # . . .
                # # . . .
                # # . # #
                # # . # #
                # # . # #
    `)
    basic.pause(5000)
    basic.showLeds(`
        # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
    `)
    basic.pause(5000)
    basic.showLeds(`
        # # . . .
                # # . . .
                # # . . .
                # # # # #
                # # # # #
    `)
    basic.clearScreen()
}

bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    loss()
})
weatherbit.startWeatherMonitoring()
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
