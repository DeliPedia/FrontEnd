import React from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router"
import styled from "styled-components"
import { PAGE_PATHS } from "../constant"
import Auction from "./Auction"
import Create from "./Create"
import Main from "./Main"
import Market from "./Market"
import More from "./More"
import MyPage from "./MyPage"
import Rent from "./Rent"
import Header from "../components/organisms/Header"
import MobileHeader from "../components/organisms/MobileHeader"
import Footer from "../components/organisms/Footer"
import Wallet from "./Wallet"
import Login from "./Login"
import Register from "./Login/Register"
import Artist from "./Artist"
import Top100 from "./Top100"
import Welcome from "./Login/Register/UserCertification/Welcome"
import DetailPage from "../components/template/DetailPage"
import CreatePage from "../components/template/CreatePage"
import { useSetRecoilState } from "recoil"
import { loginState } from "../recoil"

function RootRouter() {
    const userLoginChecker = () => {
        const setLoginState = useSetRecoilState(loginState)
        setLoginState(false)
    }
    userLoginChecker()
    return (
        <>
            <SWrapper>
                <SMainWrapper>
                    <Routes>
                        <Route path={PAGE_PATHS.MAIN} element={<Main />} />
                        <Route
                            path={PAGE_PATHS.AUCTION}
                            element={<Auction />}
                        />
                        <Route path={PAGE_PATHS.MARKET} element={<Market />} />
                        <Route path={PAGE_PATHS.TOP100} element={<Top100 />} />
                        <Route path={PAGE_PATHS.RENT} element={<Rent />} />
                        <Route path={PAGE_PATHS.MORE} element={<More />} />
                        <Route path={PAGE_PATHS.CREATE} element={<Create />} />
                        <Route path={PAGE_PATHS.MYPAGE} element={<MyPage />} />
                        <Route path={PAGE_PATHS.WALLET} element={<Wallet />} />
                        <Route path={PAGE_PATHS.LOGIN} element={<Login />} />
                        <Route
                            path={PAGE_PATHS.SIGNUP}
                            element={<Register />}
                        />
                        <Route
                            path={PAGE_PATHS.AuctionDetail}
                            element={<DetailPage />}
                        />
                        <Route
                            path={PAGE_PATHS.MarketDetail}
                            element={<DetailPage />}
                        />
                        <Route
                            path={PAGE_PATHS.RentDetail}
                            element={<DetailPage />}
                        />
                        <Route
                            path={PAGE_PATHS.CreateAuction}
                            element={<CreatePage />}
                        />
                        <Route
                            path={PAGE_PATHS.CreateMarket}
                            element={<CreatePage />}
                        />
                        <Route
                            path={PAGE_PATHS.CreateRent}
                            element={<CreatePage />}
                        />
                        <Route path={PAGE_PATHS.ARTIST} element={<Artist />} />
                        <Route path="/top100" element={<Top100 />} />
                        <Route path="/welcome" element={<Welcome />} />
                    </Routes>
                    <Footer />
                </SMainWrapper>
                <Header />
                <MobileHeader />
            </SWrapper>
        </>
    )
}

export default RootRouter

const SWrapper = styled.div`
    max-width: 1920px;
`

const SMainWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    ${(props) => props.theme.media.extra_large`
        font-size: 20px;
    `};
    ${(props) => props.theme.media.large`
        font-size: 20px;
    `};
    ${(props) => props.theme.media.medium`
        margin-top: 60px;
    `};
    ${(props) => props.theme.media.small`
        margin-top: 50px;
    `};
`
