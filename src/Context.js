import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [userLogged, setUserLogged] = useState(false)

    return (
        <AppContext.Provider 
        value={{
            name,
            setName,
            userLogged,
            setUserLogged
        }}>
          {children}
        </AppContext.Provider>
      )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
  
export { AppContext, AppProvider }