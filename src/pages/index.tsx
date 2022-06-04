import React from "react"
import styled from "styled-components"
import { useSetRecoilState } from "recoil"
import { loginState } from "../recoil"

import Header from "../components/organisms/Header"
import NavBar from "../components/organisms/NavBar"
import Footer from "../components/organisms/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"

export default function RootRouter() {
    const userLoginChecker = () => {
        const setLoginState = useSetRecoilState(loginState)
        setLoginState(false)
    }
    userLoginChecker()
    return (
        <SWrapper>
            <SRouteWrapper>
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </SRouteWrapper>
        </SWrapper>
    )
}

const SWrapper = styled.div`
    background: #f0f0f3;
    box-sizing: border-box;
`

const SRouteWrapper = styled.div`
    margin: 0 auto;
`

// const SMainWrapper = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1920px;
//     ${(props) => props.theme.media.extra_large`
//         font-size: 20px;
//     `};
//     ${(props) => props.theme.media.large`
//         font-size: 20px;
//     `};
//     ${(props) => props.theme.media.medium`
//         margin-top: 60px;
//     `};
//     ${(props) => props.theme.media.small`
//         margin-top: 50px;
//     `};
// `
