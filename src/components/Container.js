import React from "react";
import styled from 'styled-components';

const Container = ({title, date, url, explanation, copyright}) => {
    return (
    <div>
        
        <h3>{title}<br></br>{date}</h3>
        <img src={url} alt="nasa-pic"/>
        <p>{explanation}</p>
        <p>{copyright}</p>

        
    </div>
    )
}

export default Container;