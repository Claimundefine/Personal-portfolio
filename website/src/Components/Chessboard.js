import React from 'react';
import styled from 'styled-components';

const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

function Chessboard() {

    let board = [];

    for (let i = verticalAxis.length - 1; i >= 0; i--){
        for (let j =0; j < horizontalAxis.length; j++){
           const sumNum = j + i;

           if (sumNum % 2 == 0){
               board.push(
                    <div className= "tile black-tile"></div>
               );
           } else {
            board.push(
                <div className= "tile white-tile"></div>
           );
           }
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