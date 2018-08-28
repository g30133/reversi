import * as C from "./constants";

class Util {
    public static dumpBoard(board:string[]) {
        //console.log(`dumpBoard(${board})`)
        let dump:string = ''
        for (let cellIx = 0; cellIx < C.BOARD_NUM_CELLS; cellIx++) {
            if (cellIx % C.BOARD_NUM_COLS === 0) {
                dump += '\n'
            }
            dump += (board[cellIx] === '') ? '.' : board[cellIx]
        }
        console.log(dump)
    }

    public static IxFromRowCol(rowIx:number, colIx:number) {
        return rowIx * C.BOARD_NUM_COLS + colIx
    }

    public static captures(board:string[], mark:string, rowIx:number, colIx:number) {
        let captures:any[] = []
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, -1, 0))
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, -1, 1))
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, 0, 1))
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, 1, 1))
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, 1, -1))
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, 1, 0))
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, 0, -1))
        captures = captures.concat(Util.capture(board, mark, rowIx, colIx, -1, -1))
//        console.log('CAPTURES:::(' + JSON.stringify(captures) + ')')
        return captures
    }

    public static capture(board:string[], mark:string, rowIx:number, colIx:number, rowDelta:number, colDelta:number) {
        let captureLine:any[] = []
        for(let i = 1; i < C.BOARD_NUM_COLS; i++) {
            const nextRowIx = rowIx + rowDelta * i
            const nextColIx = colIx + colDelta * i
            const nextValue = board[Util.IxFromRowCol(nextRowIx, nextColIx)]
            console.log('nextRowIx:' + nextRowIx + ' nextColIx:' + nextColIx + ' boardValue:' + nextValue + ' mark:' + mark)
            if(Util.isOnBoard(nextRowIx, nextColIx) && board[Util.IxFromRowCol(rowIx, colIx)] === '') {
                if(nextValue === '') {
//                    console.log('NEXT VALUE IS EMPTY!')
                    captureLine = []
                    break
                }
                else if(nextValue === mark) {
                    console.log('NEXT VALUE IS SAME MARK!')
                    if(captureLine.length > 0) {
                        captureLine = captureLine.concat({r: rowIx, c: colIx})
                    }
                    break
                } else {
//                    console.log('NEXT VALUE IS DIFFERENT MARK!')
                    captureLine = captureLine.concat({r: nextRowIx, c: nextColIx})
                }
            } else {
                console.log('GOES OUT OF BOARD!!!')
                captureLine = []
                break
            }

            if(i === C.BOARD_NUM_COLS-1) {
                console.log('THE LAST I!!!')
                captureLine = []
                break
            }
        }
        console.log('CAPTURED(' + rowDelta + ':' + colDelta + '):' + JSON.stringify(captureLine))
        return captureLine
    }

    public static isOnBoard(rowIx:number, colIx:number) {
        return rowIx >= 0 && rowIx < C.BOARD_NUM_ROWS && colIx >= 0 && colIx < C.BOARD_NUM_COLS
    }
}

export default Util