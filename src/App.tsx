import React from "react"
import RootRouter from "~/pages"
import { BrowserRouter } from "react-router-dom"
import "~/i18n"
import theme from "~/styles/themes"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "~/styles/globalStyles"
import { RecoilRoot } from "recoil"

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <RootRouter />
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    )
}

export default App
