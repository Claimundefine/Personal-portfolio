import React from 'react'
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';
import Chessboard from '../Components/Chessboard';
import Title from '../Components/Title';

function ProjectsPage() {
    return (
        <MainLayout>
            <ProjectsStyled>
                <Title title={"Projects"} span={"Projects"} />
                <div className="chess">
                    <p>Looking to build an interactive Chess AI. Stay tuned!</p>
                    <Chessboard /> 
                </div>
            </ProjectsStyled>
        </MainLayout>
    )
}

const ProjectsStyled = styled.section`

    width: 100%;
    height: 100vh;
    position: relative;

    .chess{
        margin-top: 5rem;
        margin-bottom: 5rem;
        display: grid;
        place-content: center;
    }
`;

export default ProjectsPage
