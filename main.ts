let Num = 9
for (let Num = 0; Num <= 9; Num++) {
    basic.showNumber(Num)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("D G F D F E D C ", 100)
}
