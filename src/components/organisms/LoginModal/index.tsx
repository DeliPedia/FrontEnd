import React from "react"
import styled from "styled-components"

export default function LoginModal() {
    return (
        <SLoginWrapper>
            <STitle>로그인 및 회원가입</STitle>
            <SLine />
            <SSubTitle>로그인을 통해 다양한 혜택을 누리세요.</SSubTitle>
            <SLoginInputWrapper>
                <SCustomInput type={"text"} placeholder={"아이디"} />
                <SCustomInput type={"password"} placeholder={"비밀번호"} />
                <SCheckboxWrapper>
                    <SCheckbox />
                    <SCheckboxLabel>아이디 저장</SCheckboxLabel>
                </SCheckboxWrapper>
            </SLoginInputWrapper>
        </SLoginWrapper>
    )
}

const SLoginWrapper = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 20px 0;
    background-color: #fff;
`

const STitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
`

const SLine = styled.div`
    border-bottom: 1px solid #e1e1e1;
`

const SSubTitle = styled.div`
    text-align: center;
    font-weight: bold;
    padding: 20px 0;
`

const SLoginInputWrapper = styled.div``

const SCustomInput = styled.input`
    display: block;
    border: 1px solid #e1e1e1;
    padding: 10px;
    width: 35%;
    margin: 10px auto;
`

const SCheckboxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 768px;
`

const SCheckbox = styled.div`
    border: 2px solid #e1e1e1;
    width: 30px;
    height: 30px;
`

const SCheckboxLabel = styled.div``
