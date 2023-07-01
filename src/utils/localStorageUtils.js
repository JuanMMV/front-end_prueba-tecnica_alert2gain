export const setLocalStorage = (keyData,data) => {
    localStorage.setItem(keyData, JSON.stringify(data))
}