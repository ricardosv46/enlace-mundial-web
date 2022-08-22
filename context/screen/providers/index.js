import { useReducer, createContext, useContext } from 'react'
import { Screen_Data } from '../data'
import { ScreenReducer } from '../reducers'

export const ScreenContext = createContext()

export const ScreenProvider = ({ children }) => {
    const [Screen, DispatchScreen] = useReducer(ScreenReducer, Screen_Data)
    return (
        <ScreenContext.Provider value={{ Screen, DispatchScreen }}>
            {children}
        </ScreenContext.Provider>
    )
}