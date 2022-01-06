let Num = 0
basic.forever(function () {
    Num = 9
    for (let Num2 = 0; Num2 <= 9; Num2++) {
        basic.showNumber(Num2)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.showIcon(IconNames.House)
    music.playMelody("C5 B A G F E D C ", 120)
})
