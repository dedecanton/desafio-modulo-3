/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import * as C from './Button.style'

type ButtonType = {
    text: string,
    onClick: () => void
}

const Button = ({text, onClick}:ButtonType) => {
    return(
        <C.Button onClick={onClick}>{text}</C.Button>
    )
}

export default Button