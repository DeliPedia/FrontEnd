import { atom } from "recoil"

export const loginState = atom({
    key: "loginState",
    default: false,
})

export const modalVisibleState = atom({
    key: "modalVisibleState",
    default: false,
})
