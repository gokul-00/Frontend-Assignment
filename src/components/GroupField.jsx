import { useContext, useEffect, useState } from 'react';
import RadioFields from './RadioFields';
import SelectField from './SelectField';
import SwitchField from './SwitchField';
import TextInputField from './TextInputField';
import { ignoreCondition } from '../utils/helper';
import IgnoreField from './IgnoreField';
import JsonContext from '../Context/JsonContext';


// parse error
const sortFunc = (data) => {
  // let newData = data ? JSON.parse(data) : [];
  if (data.length == undefined) data = [data];
  return data.length > 1 ? data.sort((a, b) => a.sort - b.sort) : data;
};

const GroupField = ({ data, jsonKey }) => {
  const [params, setParams] = useState(data.subParameters);
  const { formData } = useContext(JsonContext);
  useEffect(() => {
    setParams(data.subParameters);
  }, [data.subParameters]);
  return (
    <>
      {params != undefined &&
        params &&
        sortFunc(params).map((item, i) => {
          console.log(item.uiType);
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
    </>
  );
};
export default GroupField;
