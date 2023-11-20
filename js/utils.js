export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")


export const getRandomNumber = (start,end) => {
    return start + Math.floor(Math.random() * (end-start))
}