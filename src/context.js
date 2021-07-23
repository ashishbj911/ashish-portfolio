import React, {useState,useContext} from "react"

const AppContext = React.createContext()

export const AppProvider = ({children}) => {

const [sidebar, setSidebar] = useState(false)

const openSidebar = () => {
    setSidebar(true)
}
const closeSidebar = () => {
    setSidebar(false)
}

return (
    <AppContext.Provider value={{sidebar,setSidebar,openSidebar,closeSidebar}}>{children}</AppContext.Provider>
)

}
export const useAppContext = () => {
    return useContext(AppContext)
}