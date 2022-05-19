import React from "react"
import styled from "styled-components"
import * as Image from "../../../assets/imageImport"

export default function NavBar() {
    return (
        <SNavBarWrapper>
            <SNavBarItemWrapper>
                <SNavBarLeft>
                    <SNavBarItem>소개</SNavBarItem>
                    <SNavBarItem>이용안내</SNavBarItem>
                    <SNavBarItem>자주하는 질문</SNavBarItem>
                    <SNavBarItem>매거진</SNavBarItem>
                    <SNavBarItem>공지사항</SNavBarItem>
                </SNavBarLeft>
                <SNavBarRight>
                    <SNavBarGps>
                        <SGpsIcon src={Image.GpsIcon} />
                    </SNavBarGps>
                    <SNavBarGps>&nbsp;현위치&nbsp;:&nbsp;</SNavBarGps>
                    <SNavBarGps>위치없음</SNavBarGps>
                </SNavBarRight>
            </SNavBarItemWrapper>
        </SNavBarWrapper>
    )
}

const SNavBarWrapper = styled.div`
    background: #e5e5e5;
    padding: 18px 0;
`

const SNavBarItemWrapper = styled.div`
    margin: 0 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SNavBarLeft = styled.ul`
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
`

const SNavBarRight = styled.ul`
    display: flex;
    justify-content: end;
    align-items: center;
    list-style: none;
`

const SNavBarItem = styled.li`
    margin-left: 30px;
`

const SNavBarGps = styled.li``

const SGpsIcon = styled.img`
    width: 13px;
    height: 14.5px;
`
