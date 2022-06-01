import React from "react"
import styled from "styled-components"
import MoreViewWide from "../../../components/molecules/MoreViewWide"
import ReviewCard from "../../../components/organisms/ReviewCard"

export default function RealtimeRate() {
    return (
        <SRealtimeRateWrapper>
            <SRealtimeRate>
                <STitle>실시간 맛집 평가</STitle>
                <SCardWrapper>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </SCardWrapper>
            </SRealtimeRate>
            <MoreViewWide alignOfContent={"center"} isUnder={true} />
        </SRealtimeRateWrapper>
    )
}

const SRealtimeRateWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0 0 0;
    box-shadow: 0 1px 2px 0 rgb(34 34 40 / 15%);
    background: #fff;
    width: 1024px;
    margin: 20px auto 100px auto;
`

const SRealtimeRate = styled.div`
    padding: 0 0 20px 0;
    border-bottom: 1px solid #eee;
`

const STitle = styled.div`
    text-align: left;
    font-size: 25px;
    font-weight: 500;
    padding: 0 20px 20px 20px;
`

const SCardWrapper = styled.div`
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
