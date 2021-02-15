import React, { useState, useEffect } from 'react';
import Title from './components/title';
import axios from 'axios';
import Explanation from './components/explanation';
import Img from './components/img';
import Date from './components/date'
import Copyright from './components/copyright'
import styled from 'styled-components';

const Container = styled.div `
    background-color: gray;
`;



export default function Data (){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=ZpZCz9HVkVHMiM10NA7mDobEgbgx89Rn6tgK1xfb`)
          .then(object => {
            const item = object.data;
            setData(item);
          });

      }, []);

    return (
        <Container>
            <Img img={data.img} />
            <Title title ={data.title}/>
            <Explanation explanation ={data.explanation}/>
            <Date date ={data.date}/>
            <Copyright copyright={data.copyright} />
        </Container>
    );
}