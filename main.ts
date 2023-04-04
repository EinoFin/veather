input.onButtonPressed(Button.A, function () {
    basic.showString("" + (weatherbit.rain()))
})
weatherbit.startRainMonitoring()
