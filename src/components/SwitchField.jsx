import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import JsonContext from "../Context/JsonContext";

// const data = {
//     "sort": 10000,
//     "label": "Cheeseburst",
//     "description": "",
//     "validate": {
//       "required": true,
//       "defaultValue": false,
//       "immutable": false
//     },
//     "jsonKey": "cheeseburst",
//     "uiType": "Switch",
//     "icon": "",
//     "level": 2,
//     "placeholder": ""
//   }

const SwitchField = ({data, jsonKey}) => {
    const {formData, setFormData} = useContext(JsonContext);
    const [active, setActive] = useState(data.validate.defaultValue);
    const handleSwitch = (e) => {
        setActive(e.value);
    }
    useEffect(()=>{
        setFormData(prev => ({...prev, jsonKey:active}));
    },[active])
  return (
    <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor={data.jsonKey} mb='0'>
            {data.label}
        </FormLabel>
        <Switch id={data.jsonKey} isRequired={data.validate.required} defaultChecked={active} onChange={handleSwitch} />
    </FormControl>
  );
};
export default SwitchField;