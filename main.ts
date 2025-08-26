/**
 * radio.onReceivedNumber(function (receivedNumber) {
 * 
 * if (receivedNumber == 17) {
 * 
 * radio.sendNumber(18)
 * 
 * }
 * 
 * })
 * 
 * radio.setGroup(101)
 * 
 * radio.setTransmitPower(7)
 * 
 * basic.forever(function () {
 * 
 * })
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 18) {
        checkpoint_bericht = 1
    }
})
let checkpoint_bericht = 0
radio.setGroup(101)
radio.setTransmitPower(7)
checkpoint_bericht = 0
basic.forever(function () {
    while (checkpoint_bericht == 0) {
        basic.showIcon(IconNames.Sad)
        radio.sendNumber(17)
    }
    basic.showIcon(IconNames.Happy)
})
