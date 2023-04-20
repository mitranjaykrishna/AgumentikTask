import { Box, Button} from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const HeroSection=()=>{
    return(
        <>

                <div className="container grid grid-two-column">
                    <div className="section-hero-data">
                        <p className="hero-top-data"><b>The Exotic</b></p>
                        <h1 className="hero-heading">
                            Lakshdweep 
                        </h1>
                        <p className="hero-para">Islands</p>
                        <Box>
                                <Button className="btn logReg "><NavLink exact activeClassName="active" to='/'><b>DiscoverNow</b></NavLink></Button>
                        </Box>
                    </div>

                    <div className="section-hero-image">
                    <picture>
                        <img src='./people.svg'alt="" className="hero-img fluidAnim" />
                    </picture>
                    </div>
                </div>

        </>
    )
}

export default HeroSection;