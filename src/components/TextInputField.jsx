

// const data = {
//     "sort": 1,
//     "label": "Pizza Name",
//     "description": "",
//     "validate": {
//       "required": true,
//       "immutable": false
//     },
//     "jsonKey": "name",
//     "uiType": "Input",
//     "icon": "",
//     "level": 0,
//    "placeholder": ""
// }

import { Form, Label } from "semantic-ui-react";

    


const TextInputField = ({data}) => {
  return (   
    <Form.Field>
        <label>{data.label}</label>
        <input placeholder={data.placeholder} required={data.validate.required} />
        {data.description &&  <Label pointing>Please enter a value</Label>}
    </Form.Field>
);
};
export default TextInputField;