input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Current_Scientist),300)
})
input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, Scientists.length - 1)
    Current_Scientist = Scientists.removeAt(index)
    basic.showString("" + (Current_Scientist))
    if (Scientists.length == 0) {
        control.reset()
    }
})
let index = 0
let Scientists: string[] = []
let Current_Scientist = ""
Scientists = ["Currie", "Edison", "Eistein"]
basic.showNumber(Scientists.length)
