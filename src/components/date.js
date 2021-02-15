import React from 'react';
import {DateStyle} from './styles'

export default function Date ({ date }) {
    return (
        <DateStyle>
            Date: {date}
        </DateStyle>
    );
}