import { createContext,useState } from "react";

export const AuthContext = createContext(null);


export default function Context({children}){
    const [id, setId] = useState("");
    return(
        <AuthContext.Provider value={{id,setId}}>
            {children}
        </AuthContext.Provider>
    )
}