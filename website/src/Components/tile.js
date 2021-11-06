
import styled from 'styled-components';

export default function Tile({number, image}) {
    if (number % 2 === 0) {
        return <TileStyled>
            <div className= "tile black-tile">
            {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
            </div>
        </TileStyled>
    } else {
        return <TileStyled>
            <div className= "tile white-tile">
            {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
            </div>
        </TileStyled>
    }
}

const TileStyled = styled.div`
    .tile {
        display: grid;
        place-content: center;
        width: 100px;
        height: 100px;
    }

    .tile .chess-piece {
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 80px;
    }

    .tile .chess-piece:hover {
        cursor: grab;
    }

    .black-tile{
        background-color: #779556;
    }

    .white-tile{
        background-color: #ebecd0;
    }

    .tile img {

    }
`;