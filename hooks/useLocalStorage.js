
export const useLocalStorage = () => {

    const getValueStorage = (key) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : undefined

    const setValueStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data))


    return {
        getValueStorage, setValueStorage
    }
}
