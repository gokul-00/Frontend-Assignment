import React, { useContext, useEffect, useState } from 'react'
import TextInputField from './components/TextInputField'
import JsonContext from './Context/JsonContext'
import RadioFields from './components/RadioFields';

function RenderSegment() {
    const UISchema = useContext(JsonContext);
    const [data, setdata] = useState(UISchema.data);
    useEffect(()=>{
        setdata(UISchema.data)
    },[UISchema.data])
  return (
    <div>
        <TextInputField data={JSON.parse(data)} />
        <RadioFields />
    </div>
  )
}

export default RenderSegment