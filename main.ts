let MessageVoice = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    MessageVoice = 1
    music.play(music.stringPlayable("C C5 - - - - - - ", 480), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
    record.startRecording(record.BlockingState.Blocking)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    MessageVoice = 0
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . . # . .
        . . # . .
        `)
    record.playAudio(record.BlockingState.Blocking)
    music.play(music.stringPlayable("C5 C - - - - - - ", 480), music.PlaybackMode.InBackground)
    basic.clearScreen()
})
basic.forever(function () {
    if (MessageVoice == 1) {
        led.plotBarGraph(
        input.soundLevel(),
        128
        )
    }
})
