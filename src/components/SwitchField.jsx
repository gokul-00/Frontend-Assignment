import { FormControl, FormLabel, Switch, Tooltip } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import JsonContext from '../Context/JsonContext';
import { InfoIcon } from '@chakra-ui/icons';


const SwitchField = ({ data, jsonKey }) => {
  const { formData, setFormData } = useContext(JsonContext);
  const [active, setActive] = useState(data.validate.defaultValue);
  const handleSwitch = (e) => {
    setActive(e.target.value);
  };
  useEffect(() => {
    setFormData((prev) => ({ ...prev, [jsonKey]: active }));
  }, []);
  useEffect(() => {
    setFormData((prev) => ({ ...prev, [jsonKey]: active }));
  }, [active]);
  return (
    <FormControl display="flex" alignItems="center" marginY={3}>
      <FormLabel htmlFor={data.jsonKey} mb="0">
        {data.label}
        {data.description && (
          <Tooltip label={data.description} fontSize="sm">
            <InfoIcon />
          </Tooltip>
        )}
      </FormLabel>
      <Switch
        id={data.jsonKey}
        isRequired={data.validate.required}
        defaultChecked={active}
        onChange={handleSwitch}
        isReadOnly={data.validate.immutable}
      />
    </FormControl>
  );
};
export default SwitchField;
