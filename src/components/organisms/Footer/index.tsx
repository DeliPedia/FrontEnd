import React from "react"
import styled from "styled-components"

export default function Footer() {
    return (
        <SFooterWrapper>
            <SFooter>
                <SFooterMenu>
                    <SFooterMenuItemBold>개인정보처리방침</SFooterMenuItemBold>
                    <SLine />
                    <SFooterMenuItemBold>이용약관</SFooterMenuItemBold>
                    <SLine />
                    <SFooterMenuItemBold>
                        위치기반 서비스 이용약관
                    </SFooterMenuItemBold>
                </SFooterMenu>
                <SFooterMenu2>
                    <SFooterMenuItemBold>DeliPedia</SFooterMenuItemBold>
                    <SLine />
                    <SFooterMenuItemNormal>
                        제작: 송승현, 차재윤, 황두일
                    </SFooterMenuItemNormal>
                    <SLine />
                    <SFooterMenuItemNormal>
                        소재지: 서울특별시 중구 세종대로 110
                    </SFooterMenuItemNormal>
                </SFooterMenu2>
                <SFooterMenu2>
                    <SFooterMenuItemNormal>
                        이메일문의: h2ne1.public@gmail.com
                    </SFooterMenuItemNormal>
                </SFooterMenu2>
                <SFooterMenu3>
                    <SFooterMenuItemNormal>
                        전화문의: 02-1234-5678 (평일 : 10:00 ~ 19:00,
                        주말/공휴일 제외)
                    </SFooterMenuItemNormal>
                    <SFooterMenuItemNormal>
                        copyright &copy; h&c team2 All rights reserved
                    </SFooterMenuItemNormal>
                </SFooterMenu3>
            </SFooter>
        </SFooterWrapper>
    )
}

const SFooterWrapper = styled.div`
    background: #fff;
`

const SFooter = styled.div`
    padding: 25px 0;
    width: 1024px;
    margin: 0 auto;
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

const SFooterMenuItemBold = styled.li`
    font-size: 15px;
    font-weight: 500;
    margin: 0 15px 0 15px;
`

const SFooterMenuItemNormal = styled.li`
    font-size: 15px;
    margin: 0 15px 0 15px;
`

const SLine = styled.div`
    border: 1px solid #e9e9e9;
    height: 15px;
    background: #e9e9e9;
`
