import React, {useContext, useEffect, useState} from 'react'
import Editor from "@monaco-editor/react";
import JsonContext from './Context/JsonContext';
import { Button } from '@chakra-ui/react';

export default function JsonEditor() {
    const {data, setData} = useContext(JsonContext);
    // console.log(data);
    const [value, setvalue] = useState(data);
  return (
    <div>
        <Editor
            height="85vh"
            width={`100%`}
            language={"json"}
            theme={"vs-dark"}
            value={value}
            onChange={setvalue}
            className="editor"
        />

        <Button marginTop={5} float={"right"} colorScheme='blue' size='md' onClick={() => setData(value)}>Render</Button>
    </div>
  )
}
