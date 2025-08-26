/**
 * radio.onReceivedNumber(function (receivedNumber) {
 * 
 * if (receivedNumber == 18) {
 * 
 * checkpoint_bericht = 1
 * 
 * }
 * 
 * })
 * 
 * input.onButtonPressed(Button.A, function () {
 * 
 * checkpoint_bericht = 0
 * 
 * })
 * 
 * let checkpoint_bericht = 0
 * 
 * radio.setGroup(101)
 * 
 * radio.setTransmitPower(7)
 * 
 * checkpoint_bericht = 0
 * 
 * basic.forever(function () {
 * 
 * while (checkpoint_bericht == 0) {
 * 
 * basic.showIcon(IconNames.Sad)
 * 
 * radio.sendNumber(17)
 * 
 * }
 * 
 * radio.setGroup(208)
 * 
 * basic.showIcon(IconNames.Happy)
 * 
 * })
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 17) {
        radio.sendNumber(18)
        radio.setTransmitPower(1)
        radio.setGroup(208)
    }
    if (receivedNumber == 69) {
        radio.setGroup(101)
        radio.sendNumber(70)
    }
})
radio.setGroup(101)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
