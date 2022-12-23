import React, {useState} from 'react'
import Editor from "@monaco-editor/react";

export default function JsonEditor() {
    const [input, SetInput] = useState("");
    const processJsonInput = (str) => {
      SetInput(str);
    }
  return (
    <div>
        <Editor
            height="90vh"
            width={`100%`}
            language={"json"}
            theme={"vs-dark"}
            value={input}
            defaultValue=""
            onChange={processJsonInput}
        />
    </div>
  )
}
