import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import JsonContext from "../Context/JsonContext";

// const data = {
//     "sort": 10000,
//     "label": "Slices",
//     "description": "",
//     "validate": {
//       "required": true,
//       "options": [
//         {
//           "label": "1",
//           "value": "1",
//           "description": "",
//           "icon": ""
//         },
//         {
//           "label": "2",
//           "value": "2",
//           "description": "",
//           "icon": ""
//         },
//         {
//           "label": "3",
//           "value": "3",
//           "description": "",
//           "icon": ""
//         },
//         {
//           "label": "4",
//           "value": "4",
//           "description": "",
//           "icon": ""
//         },
//         {
//           "label": "5",
//           "value": "5",
//           "description": "",
//           "icon": ""
//         }
//       ],
//       "defaultValue": "1",
//       "immutable": false
//     },
//     "jsonKey": "slices",
//     "uiType": "Select",
//     "icon": "",
//     "level": 2,
//     "placeholder": ""
//   }



const SelectField = ({data, jsonKey}) => {
  const {formData, setFormData} = useContext(JsonContext);
  const [val, setVal] = useState(data.validate.defaultValue);
  const handleChange = (e) => {
    setVal(e.value);
  }
  useEffect(()=>{
    setFormData(prev => ({...prev, jsonKey:val}))
  },[val])
  return (
    <FormControl>
        <FormLabel>{data.label}</FormLabel>
        <Select placeholder={data.placeholder} defaultValue={val} onChange={handleChange}>
        {data.validate.options.map((val, i)=><option>{val.value}</option>)}
        </Select>
    </FormControl>
  );
};
export default SelectField;