import React,{createContext,useState} from 'react';

export const Allprise  = createContext();
export const AllpriseProvider = ({children})=>{
    const [AllpriseData, SetAllpriseData] = useState(0)
    return(
        <Allprise.Provider value={[AllpriseData, SetAllpriseData]}>
            {children}
        </Allprise.Provider>
    )
}