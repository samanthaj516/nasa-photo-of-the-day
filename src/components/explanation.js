import React from 'react';
import {ExplanationStyle} from './styles';

export default function Explanation ({ explanation }) {
    return (
        <ExplanationStyle>
            {explanation}
        </ExplanationStyle>
    );
}