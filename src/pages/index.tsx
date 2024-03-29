import React from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { loginState, modalVisibleState } from "../recoil"

import Header from "../components/organisms/Header"
import NavBar from "../components/organisms/NavBar"
import Footer from "../components/organisms/Footer"
import { Routes, Route } from "react-router-dom"

import { PAGE_PATHS } from "../constant"
import Home from "./Home"
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/SignUp"
import Introduce from "./Introduce"
import HowToUse from "./HowToUse"
import Question from "./Question"
import Magazine from "./Magazine"
import Notice from "./Notice"

import Modal from "../components/atoms/Modal"
import LoginModal from "../components/organisms/LoginModal"

export default function RootRouter() {
    const userLoginChecker = () => {
        const [, setLoginState] = useRecoilState(loginState)
        setLoginState(false)
    }
    userLoginChecker()

    const [isModalVisible] = useRecoilState<boolean>(modalVisibleState)

    return (
        <SWrapper>
            <SRouteWrapper>
                <Header />
                <NavBar />
                <Routes>
                    <Route path={PAGE_PATHS.Home} element={<Home />} />
                    <Route path={PAGE_PATHS.SignUp} element={<SignUp />} />
                    <Route path={PAGE_PATHS.Login} element={<Login />} />
                    <Route
                        path={PAGE_PATHS.Introduce}
                        element={<Introduce />}
                    />
                    <Route path={PAGE_PATHS.HowToUse} element={<HowToUse />} />
                    <Route path={PAGE_PATHS.Question} element={<Question />} />
                    <Route path={PAGE_PATHS.Magazine} element={<Magazine />} />
                    <Route path={PAGE_PATHS.Notice} element={<Notice />} />
                </Routes>
                <Footer />
                {isModalVisible ? (
                    <Modal
                        child={<LoginModal />}
                        existClose={true}
                        buttonText={"닫기"}
                    />
                ) : (
                    ""
                )}
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
