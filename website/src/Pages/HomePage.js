
import React from 'react'
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Justin Wang</span></h1>
                <p>
                    Software Engineer | 3rd Year CS & Statistics @ UofT
                </p>
                <div className="icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/claimundefine/"  className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justinjlwang/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:jjustin.wang@mail.utoronto.ca" className="icon i-email">
                        <EmailIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid #f03030;
                    color: #f03030;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #1fa3f0;
                    color: #1fa3f0;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-email{
                &:hover{
                    border: 2px solid #1ebd68;
                    color: #1ebd68;
                }
            }
        }
    }
`;

export default HomePage;