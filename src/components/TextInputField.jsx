

// const data = {
//     "sort": 1,
//     "label": "Pizza Name",
//     "description": "",
//     "validate": {
//       "required": true,
//       "immutable": false,
//       "pattern": "",
//     },
//     "jsonKey": "name",
//     "uiType": "Input",
//     "icon": "",
//     "level": 0,
//     "placeholder": ""
// }

import { InfoIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Tooltip } from "@chakra-ui/react";
import { Form, Label } from "semantic-ui-react";

    


const TextInputField = ({data}) => {
  return (   
    // <Form.Field>
    //     <label>{data.label}</label>
    //     <input placeholder={data.placeholder} required={data.validate.required} />
    //     {data.description &&  <Label pointing>Please enter a value</Label>}
    // </Form.Field>
    <FormControl isRequired={data.validate.required}>
        <FormLabel>{data.label} {data.description &&  <Tooltip label={data.description} fontSize='sm'>
  <InfoIcon />
</Tooltip>}</FormLabel>
        <Input placeholder={data.placeholder} />
    </FormControl>
);
};
export default TextInputField;