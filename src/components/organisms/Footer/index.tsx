import React from "react"
import styled from "styled-components"

export default function Footer() {
    return (
        <SFooter>
            <SFooterMenu>
                <SFooterMenuItem>개인정보처리방침</SFooterMenuItem>
                <SLine />
                <SFooterMenuItem>이용약관</SFooterMenuItem>
                <SLine />
                <SFooterMenuItem>위치기반 서비스 이용약관</SFooterMenuItem>
            </SFooterMenu>
            <SFooterMenu2>
                <SFooterMenuItem>DeliPedia</SFooterMenuItem>
                <SLine />
                <SFooterMenuItem>제작: 송승현, 차재윤, 황두일</SFooterMenuItem>
                <SLine />
                <SFooterMenuItem>
                    소재지: 서울특별시 강서구 공항대로 163
                </SFooterMenuItem>
            </SFooterMenu2>
            <SFooterMenu2>
                <SFooterMenuItem>
                    이메일문의: h2ne1.public@gmail.com
                </SFooterMenuItem>
            </SFooterMenu2>
            <SFooterMenu3>
                <SFooterMenuItem>
                    전화문의: 02-1234-5678 (평일 : 10:00 ~ 19:00, 주말/공휴일
                    제외)
                </SFooterMenuItem>
                <SFooterMenuItem>
                    copyright &copy; h&c team2 All rights reserved
                </SFooterMenuItem>
            </SFooterMenu3>
        </SFooter>
    )
}

const SFooter = styled.div`
    padding: 25px 0;
    margin: 0 15%;
`

const SFooterMenu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: start;
    align-items: center;
`

const SFooterMenu2 = styled.ul`
    list-style: none;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 20px 0 0 0;
`

const SFooterMenu3 = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
`

const SFooterMenuItem = styled.li`
    font-size: 15px;
    font-weight: 500;
    margin: 0 15px 0 15px;
`

const SLine = styled.div`
    border: 1px solid #e9e9e9;
    height: 15px;
    background: #e9e9e9;
`
