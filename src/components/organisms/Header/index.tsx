import React from "react"
import styled from "styled-components"
import SearchBar from "~/components/molecules/SearchBar"

export default function Header() {
    return (
        <SHeader>
            <SHeaderWrapper>
                <SLogo src="" />
                <SSearchBarWrapper>
                    <SearchBar
                        type={"text"}
                        placeholder={"지역, 음식 또는 식당명 입력"}
                        backgroundColor={"#f1f1f1"}
                        fontSize={17}
                        fontColor={"#202020"}
                        placeholderColor={"#000"}
                        margin={"0"}
                        padding={"15px 25px 15px 25px"}
                    />
                </SSearchBarWrapper>
                <SSignMenuWrapper>
                    <SMenu>로그인</SMenu>
                    <SMenu>회원가입</SMenu>
                </SSignMenuWrapper>
            </SHeaderWrapper>
        </SHeader>
    )
}

const SHeader = styled.div`
    background: #fff;
`

const SHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 0 22%;
`

const SLogo = styled.img``

const SSearchBarWrapper = styled.div`
    min-width: 560px;
`

const SSignMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SMenu = styled.div`
    font-size: 14px;
    color: #505050;
    margin-left: 15px;
`
