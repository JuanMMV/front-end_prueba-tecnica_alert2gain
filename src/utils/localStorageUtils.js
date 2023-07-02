export const setLocalStorage = (keyData,data) => {
    localStorage.setItem(keyData, JSON.stringify(data))
}

export const getLocalStorage = (keyData) => {
    const data = localStorage.getItem(keyData)
    const cleanedData = data.replace(/"/g, '')
    return cleanedData

}