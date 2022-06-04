import React from "react"
import styled from "styled-components"
import LocationService from "./LocationService"
import MiddleBanner from "./MiddleBanner"
import RealtimeRate from "./RealtimeRate"
import RestaurantMagazine from "./RestaurantMagazine"

export default function Home() {
    return (
        <SHome>
            <LocationService />
            <RestaurantMagazine />
            <MiddleBanner />
            <RealtimeRate />
        </SHome>
    )
}

const SHome = styled.div``
