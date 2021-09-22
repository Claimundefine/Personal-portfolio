import react from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg';

function Navigation() {
    return (
        <NavigationStyled>
        <div className='avatar'>
            <img src={avatar} alt=""/>
        </div>
        <ul className="nav-items">
            <li className="nav-item">
                <NavLink to="/home" activeClassName="active-class">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" activeClassName="active-class">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/projects" activeClassName="active-class">Projects</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
            </li>
        </ul>
        <footer className="footer">
        <p>Gamer</p>
        </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 2px solid var(--border-color);
        text-align: center;
        padding: 1.5rem 0;
        img{
            width: 80%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        padding-bottom: 10rem;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.3s cubic-bezier(.52,-.12,.25,.9);
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;