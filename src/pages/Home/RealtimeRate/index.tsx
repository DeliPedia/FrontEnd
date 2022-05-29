import React from "react"
import styled from "styled-components"

export default function RealtimeRate() {
    return (
        <SRealtimeRate></SRealtimeRate>
    )
}

const SRealtimeRate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 10px;
    margin: 22px 22%;
    box-shadow: 0 1px 2px 0 rgb(34 34 40 / 15%);
    background: #fff;
`