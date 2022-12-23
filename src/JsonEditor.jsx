import React, {useContext, useEffect, useState} from 'react'
import Editor from "@monaco-editor/react";
import JsonContext from './Context/JsonContext';

export default function JsonEditor() {
    const {data, setData} = useContext(JsonContext);
    console.log(data);
    const [value, setvalue] = useState(data);
    useEffect(()=>{
        setData(value);
    },[value])
  return (
    <div>
        <Editor
            height="90vh"
            width={`100%`}
            language={"json"}
            theme={"vs-dark"}
            value={value}
            onChange={setvalue}
        />
    </div>
  )
}
