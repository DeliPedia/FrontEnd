import React from "react"
import styled from "styled-components"
import * as Image from "../../../assets/imageImport"

export default function MoreViewWide(): JSX.Element {
    return (
        <SMoreViewWide>
            <SMoreViewButtonWrapper>
                <SLabel>더보기</SLabel>
                <SButton src={Image.ListMoreView} />
            </SMoreViewButtonWrapper>
        </SMoreViewWide>
    )
}

const SMoreViewWide = styled.div`
    display: flex;
    width: transparent;
    justify-content: end;
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