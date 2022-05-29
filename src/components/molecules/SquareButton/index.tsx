import React from "react"
import styled from "styled-components"

export interface ISquareButton {
    padding: string
    backgroundColor: string
    color: string
    label: string
}

export default function SquareButton(props: ISquareButton) {
    const { padding, backgroundColor, color, label } = props
    return (
        <SSquareButton padding={padding} backgroundColor={backgroundColor} color={color}>{label}</SSquareButton>
    )
}

const SSquareButton = styled.div<{ padding: string; backgroundColor: string; color: string }>`
    padding: ${(props) => props.padding};
    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    text-align: center;
`