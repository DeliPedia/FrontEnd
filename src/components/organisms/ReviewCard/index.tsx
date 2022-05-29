import React from "react"
import styled from "styled-components"
import SquareButton from "~/components/molecules/SquareButton"

export default function ReviewCard() {
    return (
        <SReviewCard>
            <div>
                <div>사진</div>
                <div>
                    <div>
                        <div>닉네임</div>
                        <div>(47곳 평가, 140개 공감 받음)</div>
                    </div>
                    <div>
                        <div>카페 비자림</div>
                        <div>동해</div>
                    </div>
                    <div>
                        <div>별점</div>
                        <div>등록시간</div>
                    </div>
                </div>
            </div>
            <div>
                <div>맛 별점</div>
                <div>가격 별점</div>
                <div>서비스 별점</div>
            </div>
            <div>
                동해 속 제주/라는 컨셉의 카페제주도 느낌 나는 분위기가 좋은 곳내가 주문한 제주말차라떼는 특별한 맛은 아니었고 그냥 녹차라떼와 동일한 맛이었고 조금 밍밍했다분위기는 좋음
            </div>
            <div>사진</div>
            <div>태그영역</div>
            <div>
                <SquareButton padding={"10px 15px"} backgroundColor={"#fff"} color={"#222228"} label={"공감(0)"} borderOption={"1px solid #222228"} borderRadius={5} />
                <SquareButton padding={"10px 15px"} backgroundColor={"#fff"} color={"#222228"} label={"나도 평가하기"} borderOption={"1px solid #222228"} borderRadius={5} />
            </div>
        </SReviewCard>
    )
}

const SReviewCard = styled.div``