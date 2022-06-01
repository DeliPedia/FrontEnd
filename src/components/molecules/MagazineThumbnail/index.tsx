import React from "react"
import styled from "styled-components"

export interface IMagazineThumbnail {
    src: string
    label: string
}

export default function MagazineThumbnail(props: IMagazineThumbnail) {
    const { src, label } = props
    return (
        <SRestaurantMagazine>
            <SThumbnail src={src} />
            <SThumbnailInner>
                <STitle>{label}</STitle>
            </SThumbnailInner>
        </SRestaurantMagazine>
    )
}

const SRestaurantMagazine = styled.div`
    margin: 0 10px;
    width: 230px;
    height: 230px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`

const SThumbnail = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.2s linear;
    &:hover {
        transform: scale(1.2);
    }
`

const SThumbnailInner = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const STitle = styled.div`
    font-size: 17px;
    color: #fff;
    font-weight: 500;
    padding: 0 2%;
    text-align: center;
`
