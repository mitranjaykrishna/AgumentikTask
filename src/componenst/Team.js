import styled from "styled-components";
// import { useGlobalContext } from "../context";

const Team=()=>{
    return (
        <Wrapper>
            <div className="containerInside">
                <h2 className="heading">Our Team</h2>
                <p className="insideThought">Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platoneom eos</p>

                {/* <div> 
                    <div className="iconImage">
                        <img src="./message/user.jpg" alt="" />
                    </div>
                    <div className="expandImage">
                        <img src="./message/user.jpg" alt="" />
                    </div>
                    <div className="discription">
                        <h2>Sebastian Bennett</h2>
                        <h3>Founder, Lead Photographer, CEO</h3>
                        <p>Lorem ipsum dolor sir amet, ut dicat euismod invidunt pro, ne his dolorum molestie reprehendunt, quo luptum evertitut ex. Altera intgre suavitate per an, nam et doming dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert audire.</p>
                    </div>
                </div> */}
            
            </div>

        </Wrapper>
    )
};


const Wrapper=styled.section`

    .containerInside{
    max-width: 70rem;
    margin: 0 auto;
    ${'' /* margin-top:10rem; */}
    }
    .containerInside p{
        display:flex;
        justify-content: center;
        font-size:1.5rem;
        width:100%;
        padding:0 15rem;
        text-align:center;
    }

    .heading {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 6rem;
      text-transform: capitalize;
      color: black;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        ${'' /* .grid {
            gap: 7.2rem;
        } */}

        ${'' /* .containerInside p{
        display:flex;
        justify-content: center;
        font-size:1.5rem;
        width:100%;
        padding:0 15rem;
        text-align:center; */}
    }
    }
`;

export default Team;

