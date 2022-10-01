import { createContext, useState } from "react";


export const AuthContext = createContext()

function AuthContextProvider({children}){
    const [Auth,setAuth] = useState(false)
    const [token,setToken] = useState({})
    const [name,setName] = useState({})
    const handleAuth  = ()=>{
        setAuth(!Auth)
    }
    console.log(token,"auth")
    
    return(
        <AuthContext.Provider value={{Auth,handleAuth,setToken,token,setName,name}}>
            {children}
        </AuthContext.Provider>
    ) 
}



export default AuthContextProvider