import { Box, Button} from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const HeroSection=()=>{
    return(
        <>
            <Wrapper>
                <div className="container grid grid-two-column">
                    <div className="section-hero-data">
                    <Button className="btn logReg "><NavLink exact activeClassName="active" to='/'>Visit <img src='./icon/compas.svg' alt='' /></NavLink></Button>

                        <p className="hero-top-data"><b>The Exotic</b></p>
                        <h1 className="hero-heading">
                            Lakshdweep 
                        </h1>
                        <p className="hero-para">Islands</p>
                        <Box>
                                <Button className="btn1 logReg1"><NavLink exact activeClassName="active" to='/'>Discover Now</NavLink></Button>
                        </Box>
                    </div>

                    <div className="section-hero-image">
                    <img src='./map.svg'alt="" className="map" />
                    <picture>
                        <img src='./people.svg'alt="" className="hero-img fluidAnim" />
                    </picture>
                    </div>
                </div>
                </Wrapper>
        </>
    )
}


const Wrapper= styled.section `

    padding: 9rem 0;
    background: linear-gradient(180deg, #E5F8FE 14.25%, rgba(255, 255, 255, 0) 100%);

    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;  
    }

    .hero-heading{
        
        color: ${({theme})=> theme.colors.helper};
        
    }
    .btn{
        max-width: 16rem;
        text-color: #3A3A3A;
        border-radius:44px;
        background-color:#D2F4FF;
    }

    .btn1{
        max-width: 16rem;
        border: 2px solid #3282AD;
        
    }
    .logReg{
        font-weight: 400;
        font-size: 36px;
        display:flex;
        flex-direction: column;
        align-items:center;
    }

    .logReg1{
        font-size: 1.5rem;
    }

    .buttonEffect :hover{
    color: rgb(71, 209, 240);
    text-decoration: underline;
    transform: scale(0.96);
    transition: 0.3s ease-in-out;
    }


    .hero-top-data{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 64px;
        
    }

    .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
        font-weight: 700;
        font-size: 64px;
        text-align: justify;
        text-justify: inter-character;
    }
    .button2{
            color: white;
    }

    .section-hero-image{
        display:flex;
        justify-content: center;
        width: 490.84px;
        height: 477.25px;        
    }

    picture {
        text-align: center;
    }

    .map{
        position: absolute;
        align:center;
        width:879px;
        height:500px;
    }
    .hero-img {
        width: 490.84px;
        height: 477.25px;
    }

    .fluidAnim{
        animation: MoveUpDown 8s ease-in-out infinite alternate-reverse both;
    }

    @keyframes MoveUpDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(30px);
    }
}

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 7.2rem;
        }
    }
`;

export default HeroSection;