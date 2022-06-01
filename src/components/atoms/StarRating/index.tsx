import React, { useEffect } from "react"

export const StarRating = () => {
    // 별점을 className을 관리할 배열 변수를 type을 정해서 선언한다.
    const starRatingState: Array<string> = []

    // 별점 className을 state로 관리하기 위해 useState를 사용해 state를 선언한다.
    const [starRatingOnOff, setStarRatingOnOff] =
        React.useState(starRatingState)

    //mouseOver시 호출될 function 정의
    function mouseOverStarRating(inx: number) {
        const tempStarRating: Array<string> = []
        for (let i = 0; i < 5; i++) {
            if (i < inx) {
                //inx보다 앞에 있는 별은 모두 채워지게 한다.
                tempStarRating.push("item-rating pointer zmdi zmdi-star")
            } else {
                //inx보다 뒤에 있는 별은 빈 상태로 놔둔다.
                tempStarRating.push(
                    "item-rating pointer zmdi zmdi-star-outline",
                )
            }
        }
        setStarRatingOnOff(tempStarRating) //새로운 state를 세팅한다.
    }

    // 화면이 렌더링 될때 먼저 수행하기 위해 useEffect를 사용한다.
    useEffect(() => {
        //5점 만점으로 처음에는 별이 다 빈 상태임으로 5개를 모두 outline으로 만든다.
        for (let i = 0; i < 5; i++) {
            starRatingState.push("item-rating pointer zmdi zmdi-star-outline")
        }
        setStarRatingOnOff(starRatingState)
    }, [])

    return (
        <>
            <i
                className={starRatingOnOff[0]}
                onMouseOver={() => mouseOverStarRating(0)}
            />
            <i
                className={starRatingOnOff[1]}
                onMouseOver={() => mouseOverStarRating(1)}
            />
            <i
                className={starRatingOnOff[2]}
                onMouseOver={() => mouseOverStarRating(2)}
            />
            <i
                className={starRatingOnOff[3]}
                onMouseOver={() => mouseOverStarRating(3)}
            />
            <i
                className={starRatingOnOff[4]}
                onMouseOver={() => mouseOverStarRating(4)}
            />
        </>
    )
}
