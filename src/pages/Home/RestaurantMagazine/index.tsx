import React from "react"
import styled from "styled-components"
import MagazineThumbnail from "../../../components/molecules/MagazineThumbnail"
import MoreViewWide from "../../../components/molecules/MoreViewWide"
import * as Image from "../../../assets/imageImport"

export default function RestaurantMagazine() {
    return (
        <SRestaurantMagazineWrapper>
            <SRestaurantMagazine>
                <STitle>맛집 매거진</STitle>
                <SThumbnailWrapper>
                    <MagazineThumbnail src={Image.MagazineThumbnail1} label={"당신만 몰랐던 숨은 맛집 알려드릴게요 #134 - 안덕면 한라산아래첫마을 외 3곳"} />
                    <MagazineThumbnail src={Image.MagazineThumbnail2} label={"당신만 몰랐던 숨은 맛집 알려드릴게요 #133 - 온수역 우방정육식당 외 4곳"} />
                    <MagazineThumbnail src={Image.MagazineThumbnail3} label={"당신만 몰랐던 숨은 맛집 알려드릴게요 #132 - 인사동 인사동수제비 외 2곳"} />
                    <MagazineThumbnail src={Image.MagazineThumbnail4} label={"당신만 몰랐던 숨은 맛집 알려드릴게요 #131 - 평창 정가네메밀막국수 외 2곳"} />
                </SThumbnailWrapper>
            </SRestaurantMagazine>
            <MoreViewWide />
        </SRestaurantMagazineWrapper>
    )
}

const SRestaurantMagazineWrapper = styled.div`
    padding: 20px 0 0 0;
    margin: 22px 22%;
    box-shadow: 0 1px 2px 0 rgb(34 34 40 / 15%);
    background: #fff;
`

const SRestaurantMagazine = styled.div`
    padding: 0 0 20px 0;
    border-bottom: 1px solid #eee;
`

const STitle = styled.div`
    text-align: left;
    font-size: 25px;
    font-weight: 500;
    padding: 0 20px 0 20px;
`

const SThumbnailWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
    padding: 5px 10px 10px 10px;
`