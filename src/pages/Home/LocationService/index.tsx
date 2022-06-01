import React from "react"
import styled from "styled-components"
import SquareButton from "../../../components/molecules/SquareButton"

export default function LocationService() {
    return (
        <SLocationWrapper>
            <STitleWrapper>
                <STitle>사용자의 위치정보를 찾을 수 없습니다.</STitle>
                <STitle>
                    위치정보를 설정하시면 내주변의 맛집을 검색할 수 있습니다.
                </STitle>
            </STitleWrapper>
            <SquareButton
                padding={"15px 30px"}
                backgroundColor={"#000"}
                color={"#fff"}
                label={"현재 위치정보 켜기"}
                borderOption={"none"}
                borderRadius={0}
            />
        </SLocationWrapper>
    )
}

const SLocationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 10px;
    box-shadow: 0 1px 2px 0 rgb(34 34 40 / 15%);
    background: #fff;
    width: 1024px;
    margin: 20px auto;
`

const STitleWrapper = styled.div`
    padding: 0 0 20px 0;
`

const STitle = styled.div`
    text-align: center;
`
