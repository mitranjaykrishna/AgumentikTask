import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer =()=>{
    return <Wrapper>

    <section className='contact-sort'>
        <div className=' grid grid-three-column'>
            <div className='s1'>
                <h1>Download Our App</h1>
                <h3>The best travel in the world</h3>
                <img src='./play-store.svg' alt=''/>
            </div>
            <div className='s1'>
                <img src='./Ellipse.svg' className='ellipse' alt=''/>
            </div>

            <div >
                <img src='./Mobile.svg' className='mobile' alt=''/>
            </div>
        </div>

    </section>

    {/* footer section */}

    <footer>
        <div className='container grid grid-four-column'>

            {/* 1st col */}
            <div className='footer-about'>
                <img src='./gol-logo-white' alt=''/>
                <p>lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                <div className='footer-social--icons'>
                    <div>
                        <a href='/' target='_blank' rel="noreferrer">
                            <FaInstagram className="icons" />
                        </a>
                    </div>

                    <div>
                        <a href='/' target='_blank' rel='noreferrer'>
                            <FaFacebook className="icons" />
                        </a>
                    </div>
                </div>
            </div>


            {/* 2nd col */}
            <div className='footer-subscribe'>
                <h3>Company</h3>
                <p>Event</p>
                <p>Blogs</p>
                <p>FAQ</p>
                <p>Join US</p>
            </div>

            {/* 3rd col */}
            <div className='footer-social'>
                <h3>About</h3>
                <p>Project</p>
                <p>Lorem</p>
                <p>Services</p>
                <p>Our Story</p>

            </div>

            {/* 4th col */}
            <div className='footer-contact'>
                <h3 className='footer-contact-heading'> Contact Us</h3>
                <p>abc@lorem.com</p>
                <p>India</p>
            </div>
        </div>

        {/* bottom section */}

        <div className='footer-bottom--section'>
            <hr />
            <div className='container'>
                <p>
                   Copyright @{new Date().getFullYear()} GoL Travels Private Limited. All Rights Reserved
                </p>
            </div>

        </div>
    </footer>

    </Wrapper>
}

const Wrapper=styled.section`
    .contact-sort{
        max-width:90vw;    
        margin: auto;
        padding: 1rem 3rem;
        background-color: #000000;
        border-radius: 1rem;
        box-shadow: ${({theme}) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
        .s1 h1{
            font-weight: 700;
            font-size: 42px;
            color:#FFFFFF;
        }
        .ellipse{
            position:absolute;
            width: 439.81px;
            height: 250.24px;
            bottom:0px;
        }
    }

    footer{
        padding: 14rem 0 2rem 0;
        background-color: rgb(98 189 252);

        h3{
            color: ${({theme})=> theme.colors.hr};
        }

        p{
            color: ${({theme})=> theme.colors.white};
        }

        .footer-subscribe{
            h3{
                padding-bottom: 2rem;
            }
        }

        .footer-social--icons{
            display: flex;
            gap: 2rem;
            padding-top: 2rem;
        

            div{
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({theme})=> theme.colors.white};


                .icons{
                    color: ${({theme})=> theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }

        .footer-contact{
            .footer-contact-heading{
                padding-bottom: 2rem;
            }
        }

        .footer-bottom--section{
            padding-top: 4rem;
            display:flex;
            flex-direction:row;
            justify-content:center;

            hr{
                margin-bottom: 2rem;
                color: ${({theme})=> theme.colors.hr};
                height: 0.1px;
            }

        }

        .mobile{
            
            
        }
    }
`;

export default Footer;