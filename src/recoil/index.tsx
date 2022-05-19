import { atom } from "recoil"
import PaymentCustomPopUp from "../components/molecules/Popup/PaymentCustomPopUp"

export const loginState = atom({
    key: "loginState",
    default: false,
})

export const popupState = atom({
    key: "popupState",
    default: false,
})

export const popupKindState = atom({
    key: "popupKindState",
    default: PaymentCustomPopUp,
})

export const albumCounts = atom({
    key: "albumCounts",
    default: 10,
})

const divideNum = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const userDas = atom({
    key: "userDas",
    default: divideNum(3000000),
})

export const userPoint = atom({
    key: "userPoint",
    default: divideNum(1000000),
})

export const changeAddr = atom({
    key: "changeAddr",
    default: {
        zipcode: 0,
        extraAddr: "",
    },
})
