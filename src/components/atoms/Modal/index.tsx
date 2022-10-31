import React from "react"
import styled, { css } from "styled-components"
import * as Image from "~/assets/imageImport"

export interface IModal {
    child: React.ReactElement
    existClose: boolean
    buttonText: string
}

export default function Modal(props: IModal) {
    const { child, existClose, buttonText } = props
    return (
        <SModal>
            <SModalWrapper>
                <SModalBackground />
                <SCloseButtonWrapper existClose={existClose}>
                    <SClostButtonTitles>{buttonText}</SClostButtonTitles>
                    <SCloseButton src={Image.XButton} alt={"닫기 버튼"} />
                </SCloseButtonWrapper>
                {child}
            </SModalWrapper>
        </SModal>
    )
}

const SModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #d1d1d1;
    opacity: 0.5;
`

const SModalWrapper = styled.div`
    border-radius: 10px;
    background: #fff;
    padding: 15px;
`

const SModalBackground = styled.div``

const SCloseButtonWrapper = styled.div<{ existClose: boolean }>`
    ${({ existClose }) =>
        existClose
            ? css`
                  display: flex;
                  justify-content: end;
                  align-items: center;
              `
            : "none"};
`

const SCloseButton = styled.img``

const SClostButtonTitles = styled.div``
