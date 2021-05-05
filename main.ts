input.onButtonPressed(Button.A, function () {
    what_letter += -1
})
input.onButtonPressed(Button.AB, function () {
    List_to_submit = "" + List_to_submit + text_list[what_letter]
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("" + (List_to_submit))
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    what_letter += 1
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (List_to_submit))
    basic.showString("" + (List_to_submit))
    basic.showIcon(IconNames.Yes)
    music.setBuiltInSpeakerEnabled(true)
    soundExpression.giggle.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
    List_to_submit = ""
})
let text_list: string[] = []
let what_letter = 0
let List_to_submit = ""
music.setBuiltInSpeakerEnabled(false)
List_to_submit = ""
what_letter = 0
radio.setGroup(562)
text_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
basic.forever(function () {
    basic.showString("" + (text_list[what_letter]))
})
