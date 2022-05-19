import React from "react"
import styled from "styled-components"
import * as Image from "../../../assets/imageImport"

export interface ISearchBar {
    type: string
    placeholder: string
    backgroundColor: string
    fontSize: number
    fontColor: string
    placeholderColor: string
    margin: string
    padding: string
}

export default function SearchBar(props: ISearchBar) {
    const {
        type,
        placeholder,
        backgroundColor,
        fontSize,
        fontColor,
        placeholderColor,
        margin,
        padding,
    } = props
    return (
        <SSearchBarWrapper
            backgroundColor={backgroundColor}
            padding={padding}
            margin={margin}
        >
            <SCustomInput
                type={type}
                placeholder={placeholder}
                fontSize={fontSize}
                fontColor={fontColor}
                placeholderColor={placeholderColor}
            />
            <SIcon src={Image.SearchIcon} />
        </SSearchBarWrapper>
    )
}

const SSearchBarWrapper = styled.div<{
    backgroundColor: string
    padding: string
    margin: string
}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 21px;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
`

const SCustomInput = styled.input<{
    fontSize: number
    fontColor: string
    placeholderColor: string
}>`
    font-size: ${(props) => props.fontSize}px;
    font-weight: 500;
    color: ${(props) => props.fontColor};
    border: none;
    &:placeholder {
        color: ${(props) => props.placeholderColor};
    }
`

const SIcon = styled.img`
    width: 18px;
    height: 18px;
`
