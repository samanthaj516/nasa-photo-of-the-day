import React from "react";
import "../App.css";
import styled from 'styled-components';

const StyledPhoto = styled.div`
  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }
  body {
    background: black;
    color: white;
    margin-bottom: 5rem;
  }  
  img {
    width: 100%;
    height: auto;
  }
`;

const Photo = (props) => {

    return(
      <StyledPhoto className="Photo">
        <h2>{props.title}</h2>
        <img src={props.url} alt="NASA APOD" />
    </StyledPhoto>
    );
}
export default Photo;