import React from "react"
import styled from "styled-components"
import * as Image from "../../../assets/imageImport"

export default function MiddleBanner() {
    return (
        <SMiddleBannerWrapper>
            <SMainBannerBackground src={Image.BannerBackground} />
            <SFlexWrapper>
                <STitle>
                    솔직한 평가는 다른 사용자가
                    <br />
                    진짜 맛집을 찾는데 큰 도움을 줍니다.(300p 적립)
                </STitle>
                <SCoinImage src={Image.MainBannerCoin} />
            </SFlexWrapper>
        </SMiddleBannerWrapper>
    )
}

const SMiddleBannerWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1024px;
    margin: 20px auto;
`

const SFlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
`

const SMainBannerBackground = styled.img`
    width: 100%;
    height: 75px;
`

const STitle = styled.div`
    color: #fff;
    padding: 0 40px 0 0;
`

const SCoinImage = styled.img`
    z-index: 3;
    width: 50px;
    height: 50px;
`
