function loss () {
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
}
bluetooth.onBluetoothConnected(function () {
    loss()
})
weatherbit.startWeatherMonitoring()
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
