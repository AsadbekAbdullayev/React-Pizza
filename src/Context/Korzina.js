import React,{createContext,useState} from 'react';

export const Korzina  = createContext();
export const KorzinaProvider = ({children})=>{
    const [KorzinaData, SetKorzinaData] = useState([])
    return(
        <Korzina.Provider value={[KorzinaData, SetKorzinaData]}>
            {children}
        </Korzina.Provider>
    )
}
