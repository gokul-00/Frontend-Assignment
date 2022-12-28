import { FormControl, FormLabel, Select, Tooltip } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import JsonContext from '../Context/JsonContext';
import { InfoIcon } from '@chakra-ui/icons';


const SelectField = ({ data, jsonKey }) => {
  const { formData, setFormData } = useContext(JsonContext);
  const [val, setVal] = useState(data.validate.defaultValue);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  useEffect(() => {
    setFormData((prev) => ({ ...prev, [jsonKey]: val }));
  }, []);
  useEffect(() => {
    setFormData((prev) => ({ ...prev, [jsonKey]: val }));
  }, [val]);
  return (
    <FormControl marginY={3}>
      <FormLabel>{data.label}</FormLabel>
      <Select
        placeholder={data.placeholder}
        required={data.validate.required}
        defaultValue={val}
        onChange={handleChange}
        isReadOnly={data.validate.immutable}
      >
        {data.validate.options.map((val, i) => (
          <option>
            {val.value}
            {val.description && (
              <Tooltip label={val.description} fontSize="sm">
                <InfoIcon />
              </Tooltip>
            )}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
export default SelectField;
