radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        RockImage.showImage(0)
        radio.sendNumber(1)
    }
    if (receivedNumber == 2) {
        PaperImage.showImage(0)
        radio.sendNumber(2)
    }
    if (receivedNumber == 3) {
        ScissorsImage.showImage(0)
        radio.sendNumber(3)
    }
})
input.onGesture(Gesture.Shake, function () {
    MyHand = randint(1, 3)
    radio.sendNumber(MyHand)
})
let MyHand = 0
let ScissorsImage: Image = null
let PaperImage: Image = null
let RockImage: Image = null
radio.setGroup(69)
RockImage = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
PaperImage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
ScissorsImage = images.createImage(`
    . # . . #
    # # . # .
    . . # . .
    # # . # .
    . # . . #
    `)
