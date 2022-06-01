import React from "react"
import styled from "styled-components"
import SquareButton from "~/components/molecules/SquareButton"
import * as Image from "~/assets/imageImport"

export default function ReviewCard() {
    return (
        <SReviewCard>
            <SCardHeader>
                <SCardHeaderThumb src={Image.CardSampleThumbnail} />
                <SCardSubTitle>
                    <SNickNameWrapper>
                        <SNickName>닉네임</SNickName>
                        <SUserInform>(47곳 평가, 140개 공감 받음)</SUserInform>
                    </SNickNameWrapper>
                    <SPlaceWrapper>
                        <SPlace>에그드랍</SPlace>
                        <SLocation>구로디지털단지</SLocation>
                    </SPlaceWrapper>
                    <SScoreWrapper>
                        <SScore>
                            <SStar src={Image.BlueStar} />
                            <SStar src={Image.BlueStar} />
                            <SStar src={Image.BlueStar} />
                            <SStar src={Image.BlueStar} />
                            <SStar src={Image.BlueStar} />
                        </SScore>
                        <SScoreDate>5분전</SScoreDate>
                    </SScoreWrapper>
                </SCardSubTitle>
            </SCardHeader>
            <SEachScore>
                <SEachStar>
                    <SEachTitle>맛</SEachTitle>
                    <SEachStars src={Image.BlueStar} />
                    <SEachTitle>3</SEachTitle>
                </SEachStar>
                <SEachStar>
                    <SEachTitle>가격</SEachTitle>
                    <SEachStars src={Image.BlueStar} />
                    <SEachTitle>3</SEachTitle>
                </SEachStar>
                <SEachStar>
                    <SEachTitle>서비스</SEachTitle>
                    <SEachStars src={Image.BlueStar} />
                    <SEachTitle>3</SEachTitle>
                </SEachStar>
            </SEachScore>
            <SCaption>
                팀원들과 회사 점심 먹으러 방문했어요. 사실 토스트를 그렇게
                좋아하지는 않는데 맛있게 먹었습니다.다음에 또 방문 예정이에요!
                간단하게 한끼 먹기 좋아요:-) 혼밥하기에도 좋아요!!!
            </SCaption>
            <SMainPhotoWrapper>
                <SMainPhoto src={Image.CardSamplePhoto1} />
                <SMainPhoto src={Image.CardSamplePhoto2} />
            </SMainPhotoWrapper>
            <STagWrapper>
                <STag></STag>
                <STag></STag>
                <STag></STag>
                <STag></STag>
                <STag></STag>
            </STagWrapper>
            <SButtonWrapper>
                <SquareButton
                    padding={"10px 15px"}
                    backgroundColor={"#fff"}
                    color={"#222228"}
                    label={"공감(0)"}
                    borderOption={"1px solid #222228"}
                    borderRadius={5}
                />
                <SquareButton
                    padding={"10px 15px"}
                    backgroundColor={"#fff"}
                    color={"#222228"}
                    label={"나도 평가하기"}
                    borderOption={"1px solid #222228"}
                    borderRadius={5}
                />
            </SButtonWrapper>
        </SReviewCard>
    )
}

const SReviewCard = styled.div`
    border: 1px solid #e6e6eb;
    padding: 15px;
    margin: 0 10px 15px 10px;
`

const SCardHeader = styled.div`
    display: flex;
`

const SCardHeaderThumb = styled.img`
    width: 70px;
    height: 70px;
`

const SCardSubTitle = styled.div`
    margin: 0 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SNickNameWrapper = styled.div`
    display: flex;
    font-size: 15px;
    margin: 0 0 5px 0;
`

const SNickName = styled.div``

const SUserInform = styled.div``

const SPlaceWrapper = styled.div`
    display: flex;
`

const SPlace = styled.div`
    font-size: 17px;
    font-weight: 600;
    padding: 0 5px 0 0;
`

const SLocation = styled.div`
    color: #9999a0;
    padding: 0 0 0 5px;
    border-left: 1px solid #9999a0;
`

const SScoreWrapper = styled.div`
    display: flex;
    align-items: center;
`

const SScore = styled.div``

const SStar = styled.img`
    width: 20px;
    height: 20px;
`

const SScoreDate = styled.div`
    margin: 0 0 0 10px;
`

const SEachScore = styled.div`
    display: flex;
    font-size: 14px;
    padding: 15px 0;
`

const SEachStar = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
`

const SEachTitle = styled.div``

const SEachStars = styled.img`
    width: 15px;
    height: 15px;
`

const SCaption = styled.div`
    font-size: 14px;
    line-height 15px;
    margin: 0 0 10px 0;
`

const SMainPhotoWrapper = styled.div`
    height: 130px;
    overflow: hidden;
`

const SMainPhoto = styled.img`
    width: 195px;
    height: 195px;
`

const STagWrapper = styled.div``

const STag = styled.div``

const SButtonWrapper = styled.div`
    margin: 20px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
