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

import { InfoIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Input, Tooltip } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import JsonContext from '../Context/JsonContext';

const TextInputField = ({ data, jsonKey }) => {
  const { setFormData, formData } = useContext(JsonContext);
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const checkValid = () => {
    if (!data.validate.pattern) return false;
    const regex = new RegExp(data.validate.pattern);
    return regex.test(value);
  };
  useEffect(() => {
    setFormData((prev) => ({ ...prev, [jsonKey]: value }));
  }, []);
  useEffect(() => {
    setFormData((prev) => ({ ...prev, [jsonKey]: value }));
  }, [value]);
  return (
    <FormControl
      isRequired={data.validate.required}
      marginY={3}
      isInvalid={checkValid()}
    >
      <FormLabel>
        {data.label}{' '}
        {data.description && (
          <Tooltip label={data.description} fontSize="sm">
            <InfoIcon />
          </Tooltip>
        )}
      </FormLabel>
      <Input
        placeholder={data.placeholder}
        onChange={handleChange}
        readOnly={data.validate.immutable}
      />
    </FormControl>
  );
};
export default TextInputField;
