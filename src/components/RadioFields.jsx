import { useState } from "react";
import { Form, Radio } from "semantic-ui-react";

const data = {
    "sort": 0,
    "label": "Pizza_type Type",
    "description": "",
    "validate": {
      "required": true,
      "options": [
        {
          "label": "Naples Style Pizza",
          "value": "naples",
          "description": "",
          "icon": ""
        },
        {
          "label": "New York Style Pizza",
          "value": "newyork",
          "description": "",
          "icon": ""
        }
      ],
      "defaultValue": "naples",
      "immutable": false
    },
    "jsonKey": "type",
    "uiType": "Radio",
    "icon": "",
    "level": 1,
    "placeholder": ""
  }

const RadioFields = () => {
    const [options, setOptions] = useState(data.validate.options);
    const [value, setValue] = useState("")

    const handleChange = (e, {value}) => setValue(value);
  return (
    <Form.Group>
    <label>{data.label}</label>
    {options.map((opt, i) => <Form.Field
      control={Radio}
      label={opt.label}
      value={opt.value}
      checked={value === opt.value}
      onChange={handleChange}
      key={i}
    />)}
  </Form.Group>
  );
};
export default RadioFields;