import React from 'react';
import {Header} from './styles'

export default function Title ({ title }) {
    return (
        <Header>
            {title}
        </Header>
    );
}