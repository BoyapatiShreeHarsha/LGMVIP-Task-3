import DataContext from "./DataContest";
import React, { useState } from 'react'

const DataState = (props)=>{
    const [result, setResult] = useState([]);
    let adddata=(sname,email,website,image,gender,skills)=>{
        setResult(result.concat({sname:sname,email:email,website:website,image:image,gender:gender,skills:skills}));
    }
    return (
        <DataContext.Provider value={{result,setResult,adddata}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;