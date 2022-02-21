import React,{createContext,useState} from 'react';
import { Pdata } from '../mock/PitsaData';

export const Select  = createContext();
export const SelectProvider = ({children})=>{
    const [Sel, SetSel] = useState(Pdata)
    return(
        <Select.Provider value={[Sel, SetSel]}>
            {children}
        </Select.Provider>
    )
}