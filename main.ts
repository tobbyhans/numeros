let Num = 9
for (let Num = 0; Num <= 9; Num++) {
    basic.showNumber(Num)
    music.playTone(988, music.beat(BeatFraction.Whole))
}
basic.showIcon(IconNames.House)
music.playMelody("C5 B A G F E D C ", 120)
