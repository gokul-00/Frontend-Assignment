import { useContext, useEffect, useState } from 'react';
import GroupField from './GroupField';
import RadioFields from './RadioFields';
import SelectField from './SelectField';
import SwitchField from './SwitchField';
import TextInputField from './TextInputField';
import { ignoreCondition } from '../utils/helper';
import JsonContext from '../Context/JsonContext';

// parse error
const sortFunc = (data) => {
  if (data.length == undefined) data = [data];
  // console.log(typeof(newData), newData.length, [newData]);
  return data.length > 1 ? data.sort((a, b) => a.sort - b.sort) : data;
};

const IgnoreField = ({ data, jsonKey, active: enable }) => {
  const [params, setParams] = useState(data.subParameters);
  const { formData } = useContext(JsonContext);
  const [active, setActive] = useState(enable);
  console.log(active, enable);
  useEffect(() => {
    setParams(data.subParameters);
  }, [data.subParameters]);
  useEffect(() => {
    setActive(enable);
  }, [enable]);

  return (
    <div
      style={{
        display: !active && 'none',
      }}
    >
      {params != undefined &&
        params &&
        sortFunc(params).map((item, i) => {
          // console.log(item)
          if (item.uiType == 'Input')
            return (
              <TextInputField
                data={item}
                jsonKey={`${jsonKey}.${item.jsonKey}`}
                key={i}
              />
            );
          else if (item.uiType == 'Radio')
            return (
              <RadioFields
                data={item}
                jsonKey={`${jsonKey}.${item.jsonKey}`}
                key={i}
              />
            );
          else if (item.uiType == 'Select')
            return (
              <SelectField
                data={item}
                jsonKey={`${jsonKey}.${item.jsonKey}`}
                key={i}
              />
            );
          else if (item.uiType == 'Switch')
            return (
              <SwitchField
                data={item}
                jsonKey={`${jsonKey}.${item.jsonKey}`}
                key={i}
              />
            );
          else if (item.uiType == 'Group')
            return (
              <GroupField
                data={item}
                jsonKey={`${jsonKey}.${item.jsonKey}`}
                key={i}
              />
            );
          else if (item.uiType == 'Ignore')
            return (
              <IgnoreField
                data={item}
                jsonKey={`${jsonKey}.${item.jsonKey}`}
                active={ignoreCondition(formData, item.conditions)}
                key={i}
              />
            );
          return <></>;
        })}
    </div>
  );
};
export default IgnoreField;
