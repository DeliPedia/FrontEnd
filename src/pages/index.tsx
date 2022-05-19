import React from "react"
import styled from "styled-components"
import { useSetRecoilState } from "recoil"
import { loginState } from "../recoil"

import Header from "../components/organisms/Header"
import NavBar from "../components/organisms/NavBar"
import Footer from "../components/organisms/Footer"

export default function RootRouter() {
    const userLoginChecker = () => {
        const setLoginState = useSetRecoilState(loginState)
        setLoginState(false)
    }
    userLoginChecker()
    return (
        <>
            <SWrapper>
                <Header />
                <NavBar />
                <Footer />
            </SWrapper>
        </>
    )
}

const SWrapper = styled.div`
    min-width: 1190px;
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
