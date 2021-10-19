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
        display: grid;
        place-content: center;
    }
`;

export default ProjectsPage
