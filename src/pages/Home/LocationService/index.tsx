import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SquareButton from "../../../components/molecules/SquareButton"

const useGeoLocation = (options = {}) => {
    const [location, setLocation] = useState({})
    const [error, setError] = useState("")

    const handleSuccess = (pos: any) => {
        const { latitude, longitude } = pos.coords

        setLocation({
            latitude,
            longitude,
        })
    }

    const handleError = (error: any) => {
        setError(error.message)
    }

    useEffect(() => {
        const { geolocation } = navigator;
        if (!geolocation) {
            setError("Geolocation is not supported.");
            return;
        }

        geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }, [options])

    return { location, error };
}

export default function LocationService() {

    const geolocationOption = {
        enableHighAccuracy: true,
        timeout: 1000 * 60 * 1,
        maximumAge: 1000 * 3600 * 24,
    }

    const latLong = () => {
        const { location: currentLocation, error: currentError } = useGeoLocation(geolocationOption)
        useEffect(() => {
            console.log('컴포넌트 렌더링')
        }, [])
    }

    return (
        <SLocationWrapper>
            <STitleWrapper>
                <STitle>사용자의 위치정보를 찾을 수 없습니다.</STitle>
                <STitle>위치정보를 설정하시면 내주변의 맛집을 검색할 수 있습니다.</STitle>
            </STitleWrapper>
            <SquareButton padding={"15px 30px"} backgroundColor={"#000"} color={"#fff"} label={"현재 위치정보 켜기"} borderOption={"none"} borderRadius={0} />
        </SLocationWrapper>
    )
}

const SLocationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 10px;
    margin: 22px 22%;
    box-shadow: 0 1px 2px 0 rgb(34 34 40 / 15%);
    background: #fff;
`

const STitleWrapper = styled.div`
    padding: 0 0 20px 0;
`

const STitle = styled.div`
    text-align: center;
`