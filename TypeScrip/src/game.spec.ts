import { Game } from "./game"


describe('Bowling game', () => {
    test('should score 0 for gutter game', () => {
        const g: Game = new Gamepad()
        for (let i = 0; i < 20; i++ ){
            g.roll(0)
        }
        expect(g.score()).tobe(0)

    })
})