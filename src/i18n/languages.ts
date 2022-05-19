export const Languages = {
    EN: "en",
    KR: "kr",
} as const
export type Languages = typeof Languages[keyof typeof Languages]
