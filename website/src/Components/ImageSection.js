   
import React from 'react'
import styled from 'styled-components';
import aboutPic from '../img/aboutPic.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={aboutPic} alt=""/>
            </div>
            <div className="right-content">
                <h4>Welcome to <span>Justin's</span> website!</h4>
                <p className="paragraph">
                   Hi, I am a software developer that's eager for any opportunity to put myself out there and to gain more experience! I currently have work experience with 
                   both Mobile and Web Development, but always looking for new opportunities. I have a large interest in both Machine Learning and Finance, and my projects
                   are on this website and more coming soon, so be sure to check back! In my spare time, I enjoy cooking and dreaming of what to do next. 
   
                </p>
                <p className="paragraph">

                   Come follow me on my journey!
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Age</p>
                        <p>Location</p>
                        <p>Jungle</p>
                    </div>
                    <div className="info">
                        <p>: 20</p>
                        <p>: Toronto, Canada</p>
                        <p>: Kingdom</p>
                    </div>
                </div>
                <PrimaryButton title={"Resume"}/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 80%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;