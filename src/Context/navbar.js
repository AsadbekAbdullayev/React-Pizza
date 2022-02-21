import React,{createContext,useState} from 'react';

export const Navbard  = createContext();
export const NavbarProvider = ({children})=>{
    const [NavbarData, SetNavbarData] = useState('Все')
    return(
        <Navbard.Provider value={[NavbarData, SetNavbarData]}>
            {children}
        </Navbard.Provider>
    )
}