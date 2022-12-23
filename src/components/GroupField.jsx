

// {
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

import { Form, Label } from "semantic-ui-react";

    


const GroupField = ({data}) => {
  return (   
    <Form.Field>
        <label>{data.label}</label>
        <input placeholder={data.placeholder} required={data.validate.required} />
        {data.description &&  <Label pointing>Please enter a value</Label>}
    </Form.Field>
);
};
export default GroupField;