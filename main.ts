let Spænding = 0
let Periodetid = 0
basic.forever(function () {
    Spænding = pins.analogReadPin(AnalogPin.P1)
    // from 10Hz to 50..60 Hz
    // with my reostat
    Periodetid = pins.map(
    Spænding,
    0,
    1023,
    100000,
    10000
    )
    pins.analogSetPeriod(AnalogPin.P0, Periodetid)
    pins.analogWritePin(AnalogPin.P0, 248)
})
basic.forever(function () {
    basic.showNumber(Math.round(1000000 / Periodetid))
    basic.pause(500)
})
