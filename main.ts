input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Número_aleatorio = randint(0, 3)
    if (Número_aleatorio == 0) {
        basic.showString("SI")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (Número_aleatorio == 1) {
        basic.showString("NO")
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("NO SE")
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(8)
})
let Número_aleatorio = 0
basic.showString("Haz una cadena")
basic.showNumber(8)
