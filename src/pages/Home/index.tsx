import React, { useState } from "react"
import useI18n from "~/hooks/useI18n"
import styled from "styled-components"

function Home() {
    const { t, languages, changeLanguage } = useI18n("home")
    const [on, setOn] = useState<boolean>(false)
    return (
        <SHome on={on}>
            <button onClick={() => setOn(!on)}>{on ? "on" : "off"}</button>
            {on && <div>ON</div>}
            <div>{t("title")}</div>
            {languages.map((lang) => (
                <button key={lang} onClick={() => changeLanguage(lang)}>
                    {t(`common:lang.${lang}`)}
                </button>
            ))}
        </SHome>
    )
}

export default Home

const SHome = styled.div<{ on?: boolean }>`
    color: ${(props) => props.theme.color.Primary};
    ${(props) => props.on && "background: yellow"};
    ${(props) => props.theme.media.small`
        background: blue;
    `};
    button {
        padding: 8px;
        border: 1px solid black;
    }
`
