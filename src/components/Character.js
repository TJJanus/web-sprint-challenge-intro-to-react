// Write your Character component here
import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 4px solid #8BCF21;
    padding: 20px;
    background-color: #1D2951;
    color: #83D2E4;


    h1{
        font-family: Verdana, sans-serif;
        text-decoration: underline;
        color: #8BCF21;
        text-shadow: 1px 1px 3px black;
    }
    
    img {
        border: 4px solid #83D2E4;

    }
`;


const Character = props => {
    console.log(props);


    return (
        <Wrapper>
            <h1>{props.name}</h1>
            <img src= {props.image} alt='Ricky and Morty Character'/> 
            <h2>{props.species}</h2>
            <h3>Gender: {props.gender}</h3>
            <h4> Status: {props.status}</h4>
        </Wrapper>
    )
}


export default Character;