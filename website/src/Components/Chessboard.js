import React from 'react';
import styled from 'styled-components';
import Tile from './tile';

const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

const pieces = [];

for (let p = 0; p < 2; p++){
    const type = p === 0 ? "w" : "b";
    const y = p === 0 ? 7 : 0;
    const pawnY = p === 0 ? 6 : 1;

    pieces.push({image: `./chess/rook_${type}.png`, x: 0, y: y});
    pieces.push({image: `./chess/rook_${type}.png`, x: 7, y: y});
    pieces.push({image: `./chess/knight_${type}.png`, x: 1, y: y});
    pieces.push({image: `./chess/knight_${type}.png`, x: 6, y: y});
    pieces.push({image: `./chess/bishop_${type}.png`, x: 2, y: y});
    pieces.push({image: `./chess/bishop_${type}.png`, x: 5, y: y});
    pieces.push({image: `./chess/queen_${type}.png`, x: 3, y: y});
    pieces.push({image: `./chess/king_${type}.png`, x: 4, y: y});

    for (let i = 0; i < 8; i++){
        pieces.push({image: `./chess/pawn_${type}.png`, x: i, y: pawnY});
    }
}



function Chessboard() {

    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--){
        for (let i =0; i < horizontalAxis.length; i++){
           const sumNum = j + i;
           let image = undefined;

           pieces.forEach(p => {
                if (p.x === i && p.y === j){
                    image = p.image;
                }
           })

          board.push(<Tile key={`${j}, ${i}`} number={sumNum} image={image}/>);
        }
    }
    return (
        <ChessBoardStyled>
            {board}
        </ChessBoardStyled>
    )
}

const ChessBoardStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 100px);
    grid-template-rows: repeat(8, 100px);
    width: 800px;
    height: 800px;
    background-color: #779556;

    .tile {
        width: 100px;
        height: 100px;
    }

    .black-tile{
        background-color: #779556;
    }

    .white-tile{
        background-color: #ebecd0;
    }
`;

export default Chessboard;