import React from "react";
import { NavLink } from "react-router-dom";
import './styles/NavBar.css';
import { Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const NavBar=()=>{
    return <>
        <nav className="main_nav">
            <div className="logo">
                <NavLink to='/'><img src="./gol-logo-1.svg" alt="Logo" /></NavLink>
            </div>

            <div className="menu-link">
                <ul>
                    <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to ='/'>Home</NavLink></Button></li>
                    <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to ='/about'>About US</NavLink></Button></li>
                    <li><Button className="buttonEffect"><NavLink exact activeClassName="active" to ='/support'>Support</NavLink></Button></li>
                </ul>
            </div>

            <div className="affiliated">
                    <ul >
                        <li >
                            <Box className="affiButtonG buttonEffect" >
                                
                                    <Button><NavLink exact activeClassName='active' to="/">Login</NavLink></Button>
                                    <Button variant="contained" className="buttonEffect2" ><NavLink exact activeClassName='active' to="/"><span className="join"> Sign Up</span></NavLink></Button>
                                
                            </Box>
                        </li>
                    </ul>
                </div>



            
        </nav>
    </>
}

export default NavBar;