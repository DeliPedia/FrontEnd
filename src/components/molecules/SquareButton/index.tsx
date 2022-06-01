import React from "react"
import styled from "styled-components"

export interface ISquareButton {
    padding: string
    backgroundColor: string
    color: string
    label: string
    borderOption: string
    borderRadius: number
}

export default function SquareButton(props: ISquareButton) {
    const {
        padding,
        backgroundColor,
        color,
        label,
        borderOption,
        borderRadius,
    } = props
    return (
        <SSquareButton
            padding={padding}
            backgroundColor={backgroundColor}
            color={color}
            borderOption={borderOption}
            borderRadius={borderRadius}
        >
            {label}
        </SSquareButton>
    )
}

const SSquareButton = styled.div<{
    padding: string
    backgroundColor: string
    color: string
    borderOption: string
    borderRadius: number
}>`
    padding: ${(props) => props.padding};
    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border: ${(props) => props.borderOption};
    border-radius: ${(props) => props.borderRadius}px;
    text-align: center;
    cursor: pointer;
    width: max-content;
`
