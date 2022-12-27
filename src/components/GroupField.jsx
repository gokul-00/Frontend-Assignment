import { useContext, useEffect, useState } from "react";
import RadioFields from "./RadioFields";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
import TextInputField from "./TextInputField";
import { FormLabel } from "@chakra-ui/react";
import { ignoreCondition } from "../utils/helper";
import IgnoreField from "./IgnoreField";
import JsonContext from "../Context/JsonContext";


// const data = {
//     "sort": 4,
//     "label": "Pizza_type",
//     "description": "",
//     "validate": {
//       "required": true,
//       "immutable": false
//     },
//     "jsonKey": "pizza_type",
//     "uiType": "Group",
//     "icon": "",
//     "level": 0,
//     "placeholder": "",
//     "subParameters": [
//       {
//         "sort": 0,
//         "label": "Pizza_type Type",
//         "description": "",
//         "validate": {
//           "required": true,
//           "options": [
//             {
//               "label": "Naples Style Pizza",
//               "value": "naples",
//               "description": "",
//               "icon": ""
//             },
//             {
//               "label": "New York Style Pizza",
//               "value": "newyork",
//               "description": "",
//               "icon": ""
//             }
//           ],
//           "defaultValue": "naples",
//           "immutable": false
//         },
//         "jsonKey": "type",
//         "uiType": "Radio",
//         "icon": "",
//         "level": 1,
//         "placeholder": ""
//       },
//       {
//         "sort": 10001,
//         "label": "Naples Style Pizza",
//         "description": "",
//         "validate": {
//           "required": true,
//           "immutable": false
//         },
//         "jsonKey": "Naples",
//         "uiType": "Ignore",
//         "icon": "",
//         "level": 1,
//         "placeholder": "",
//         "conditions": [
//           {
//             "jsonKey": "pizza_type.type",
//             "op": "==",
//             "value": "naples",
//             "action": "enable"
//           }
//         ],
//         "subParameters": [
//           {
//             "sort": 10000,
//             "label": "Slices",
//             "description": "",
//             "validate": {
//               "required": true,
//               "options": [
//                 {
//                   "label": "1",
//                   "value": "1",
//                   "description": "",
//                   "icon": ""
//                 },
//                 {
//                   "label": "2",
//                   "value": "2",
//                   "description": "",
//                   "icon": ""
//                 },
//                 {
//                   "label": "3",
//                   "value": "3",
//                   "description": "",
//                   "icon": ""
//                 },
//                 {
//                   "label": "4",
//                   "value": "4",
//                   "description": "",
//                   "icon": ""
//                 },
//                 {
//                   "label": "5",
//                   "value": "5",
//                   "description": "",
//                   "icon": ""
//                 }
//               ],
//               "defaultValue": "1",
//               "immutable": false
//             },
//             "jsonKey": "slices",
//             "uiType": "Select",
//             "icon": "",
//             "level": 2,
//             "placeholder": ""
//           },
//           {
//             "sort": 10001,
//             "label": "Type",
//             "description": "",
//             "validate": {
//               "required": true,
//               "pattern": "naples",
//               "immutable": false
//             },
//             "jsonKey": "type",
//             "uiType": "Input",
//             "icon": "",
//             "level": 2,
//             "placeholder": "",
//             "disable": true
//           }
//         ]
//       },
//       {
//         "sort": 10002,
//         "label": "New York Style Pizza",
//         "description": "",
//         "validate": {
//           "required": true,
//           "immutable": false
//         },
//         "jsonKey": "NewYork",
//         "uiType": "Ignore",
//         "icon": "",
//         "level": 1,
//         "placeholder": "",
//         "conditions": [
//           {
//             "jsonKey": "pizza_type.type",
//             "op": "==",
//             "value": "newyork",
//             "action": "enable"
//           }
//         ],
//         "subParameters": [
//           {
//             "sort": 10000,
//             "label": "Cheeseburst",
//             "description": "",
//             "validate": {
//               "required": true,
//               "defaultValue": false,
//               "immutable": false
//             },
//             "jsonKey": "cheeseburst",
//             "uiType": "Switch",
//             "icon": "",
//             "level": 2,
//             "placeholder": ""
//           },
//           {
//             "sort": 10001,
//             "label": "Type",
//             "description": "",
//             "validate": {
//               "required": true,
//               "pattern": "newyork",
//               "immutable": false
//             },
//             "jsonKey": "type",
//             "uiType": "Input",
//             "icon": "",
//             "level": 2,
//             "placeholder": "",
//             "disable": true
//           }
//         ]
//       }
//     ]
//   }

// parse error
const sortFunc = (data) => {
  // let newData = data ? JSON.parse(data) : []; 
  // if(newData.length == undefined) newData = [newData]
  // return newData.length > 1 ? newData.sort((a,b) => a.sort - b.sort) : newData;
}


const GroupField = ({data, jsonKey}) => {
  const [params, setParams] = useState(data.subParameters);
  const {formData} = useContext(JsonContext);
  useEffect(()=>{
    setParams(data.subParameters);
  },[data.subParameters])
  return (   
    <>
      {/* <FormLabel>{.label}</FormLabel> */}
        {params != undefined && params && params.map((item, i) => {
            console.log(item.uiType)
            if(item.uiType == 'Input') return <TextInputField data={item} jsonKey={`${jsonKey}.${item.jsonKey}`} key={i}/>
            else if(item.uiType == 'Radio') return <RadioFields data={item} jsonKey={`${jsonKey}.${item.jsonKey}`} key={i}/>
            else if(item.uiType == 'Select') return  <SelectField data={item} jsonKey={`${jsonKey}.${item.jsonKey}`} key={i}/>
            else if(item.uiType == 'Switch') return <SwitchField data={item} jsonKey={`${jsonKey}.${item.jsonKey}`} key={i}/>
            else if(item.uiType == "Group") return <GroupField data={item} jsonKey={`${jsonKey}.${item.jsonKey}`} key={i} />
            else if(item.uiType == "Ignore") return <IgnoreField data={item} jsonKey={`${jsonKey}.${item.jsonKey}`} active={ignoreCondition(formData, item.conditions)} key={i} />
            return <></>
        })}
    </>
);
};
export default GroupField;