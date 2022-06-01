import React from "react"
import styled from "styled-components"
import * as Image from "../../../assets/imageImport"

export interface IMoreViewWide {
    alignOfContent: string
    isUnder: boolean
}

export default function MoreViewWide(props: IMoreViewWide): JSX.Element {
    const { alignOfContent, isUnder } = props
    return (
        <SMoreViewWide alignOfContent={alignOfContent}>
            <SMoreViewButtonWrapper>
                <SLabel>더보기</SLabel>
                <SButton
                    src={isUnder ? Image.ListMoreViewUnder : Image.ListMoreView}
                />
            </SMoreViewButtonWrapper>
        </SMoreViewWide>
    )
}

const SMoreViewWide = styled.div<{ alignOfContent: string }>`
    display: flex;
    width: transparent;
    justify-content: ${(props) => props.alignOfContent};
    align-items: center;
    padding: 20px;
`

const SMoreViewButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const SLabel = styled.div`
    font-size: 13px;
`

const SButton = styled.img`
    width: 20px;
    height: 20px;
`
