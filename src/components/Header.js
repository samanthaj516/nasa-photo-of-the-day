import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.div`
font-size: 5rem;
color: red;
display: flex;
justify-content: center;
`;

export default function Header() {
    return (
    <StyledHeader className="header">
        <h1>NASA Photo of the Day!</h1>
    </StyledHeader>
    )
}