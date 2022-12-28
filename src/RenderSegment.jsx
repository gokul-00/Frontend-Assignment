import React, { useContext, useEffect, useRef, useState } from 'react'
import TextInputField from './components/TextInputField'
import JsonContext from './Context/JsonContext'
import RadioFields from './components/RadioFields';
import SelectField from './components/SelectField';
import SwitchField from './components/SwitchField';
import GroupField from './components/GroupField';
import IgnoreField from './components/IgnoreField';
import { evaluateCondition, ignoreCondition } from './utils/helper';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import './RenderSegment.module.css'

const UIType = {
    'Input':'TextInputField', 
    'Group': '', 
    'Radio': 'RadioFields', 
    'Ignore': '', 
    'Select': 'SelectField', 
    'Switch': 'SwitchField'
};


// parse error
const sortFunc = (data) => {
    let newData = data ? JSON.parse(data) : []; 
    if(newData.length == undefined) newData = [newData]
    // console.log(typeof(newData), newData.length, [newData]);
    return newData.length > 1 ? newData.sort((a,b) => a.sort - b.sort) : newData;
}

function RenderSegment() {
    const {data:UISchema, setData, formData, setFormData} = useContext(JsonContext);
    const [data, setdata] = useState(UISchema);
    const formRef = useRef(null);
    useEffect(()=>{
        setdata(UISchema)
    },[UISchema])

    const handleClear = () => {
        formRef.current.reset();
        setFormData({});
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log(formData);
        // console.log(event.target);
        const formData = new FormData(event.target);
        const params = new URLSearchParams();

        for (const [key, value] of formData.entries()) {
            params.append(key, value);
        }

        const queryString = params.toString();
        console.log(queryString);
    }
  return (
    <Box height={'90vh'} scrollBehavior={'smooth'} overflowY={"scroll"} overflowX={"hidden"}>
        <form ref={formRef}>
        {sortFunc(data).map((item, i) => {
            if(item.uiType == 'Input') return <TextInputField data={item} jsonKey={item.jsonKey} key={i}/>
            else if(item.uiType == 'Radio') return <RadioFields data={item} jsonKey={item.jsonKey} key={i}/>
            else if(item.uiType == 'Select') return  <SelectField data={item} jsonKey={item.jsonKey} key={i}/>
            else if(item.uiType == 'Switch') return <SwitchField data={item} jsonKey={item.jsonKey} key={i}/>
            else if(item.uiType == "Group") return <GroupField data={item} jsonKey={item.jsonKey} key={i} />
            else if(item.uiType == "Ignore") return <IgnoreField data={item} jsonKey={item.jsonKey} active={ignoreCondition(formData, item.conditions)} key={i} />
            return <></>
        })}
        {data &&<ButtonGroup variant='outline' spacing='6' marginTop={5} float={"right"}>
            <Button onClick={handleClear}>Cancel</Button>
            <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
        </ButtonGroup>}
        </form>
    </Box>
  )
}

export default RenderSegment