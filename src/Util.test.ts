import * as C from './constants'

import Util from './Util';

describe('first move of black at row 2 col 3', () => {
    let board:string[]
    beforeEach(() => {
        board = []
        for(let cellIx = 0; cellIx < C.BOARD_NUM_CELLS; cellIx++) {
            board.push('')
        }
        board[Util.IxFromRowCol(3,3)] = 'X'
        board[Util.IxFromRowCol(3,4)] = 'O'
        board[Util.IxFromRowCol(4,3)] = 'O'
        board[Util.IxFromRowCol(4,4)] = 'X'
        Util.dumpBoard(board)
    })

    it('the first move of black, capture(board, mark, 4, 4, 0, -1) should return [{r:3 c:4}]', () => {
        expect(Util.capture(board, 'X', 4, 4, -1, 0)).toEqual([{r:3, c:4}])
    })

    it('the first move of black, capture(board, mark, 3, 3, 0, 1) should return [{r:4 c:3}]', () => {
        expect(Util.capture(board, 'X', 3, 3, 1, 0)).toEqual([{r:4, c:3}])
    })

    it('the first move of black, capture(board, mark, 3, 3, 1, 1) should return []', () => {
        expect(Util.capture(board, 'X', 3, 3, 1, 1)).toEqual([])
    })

    it('the first move of black, capture(board, mark, 3, 3, 1, 1) should return []', () => {
        expect(Util.capture(board, 'X', 3, 3, -1, 0)).toEqual([])
    })

    it('the first move of black, captures(board, 3, 3)  should return [{r: 3, c: 4}, {r: 4, c: 3}]', () => {
        expect(Util.captures(board, 'X', 3, 3)).toEqual([{r: 3, c: 4}, {r: 4, c: 3}])
    })

    it.only('whiteMove, captures(board, 7, 2)  should return []', () => {
        board[Util.IxFromRowCol(7,3)] = 'X'
        board[Util.IxFromRowCol(7,4)] = 'X'
        board[Util.IxFromRowCol(7,5)] = 'X'
        board[Util.IxFromRowCol(7,6)] = 'X'
        board[Util.IxFromRowCol(7,7)] = 'X'

        board[Util.IxFromRowCol(6,4)] = 'O'
        board[Util.IxFromRowCol(6,5)] = 'X'
        board[Util.IxFromRowCol(6,6)] = 'O'
        board[Util.IxFromRowCol(6,7)] = 'X'

        Util.dumpBoard(board)

        expect(Util.captures(board, 'O', 7, 2)).toEqual([])
    })
    

})