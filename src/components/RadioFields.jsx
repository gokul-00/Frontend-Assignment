import { TabList, TabPanel, TabPanels, Tabs, Tab, FormLabel } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Form, Radio } from "semantic-ui-react";
import JsonContext from "../Context/JsonContext";

// const data = {
//     "sort": 0,
//     "label": "Pizza_type Type",
//     "description": "",
//     "validate": {
//       "required": true,
//       "options": [
//         {
//           "label": "Naples Style Pizza",
//           "value": "naples",
//           "description": "",
//           "icon": ""
//         },
//         {
//           "label": "New York Style Pizza",
//           "value": "newyork",
//           "description": "",
//           "icon": ""
//         }
//       ],
//       "defaultValue": "naples",
//       "immutable": false
//     },
//     "jsonKey": "type",
//     "uiType": "Radio",
//     "icon": "",
//     "level": 1,
//     "placeholder": ""
//   }

const RadioFields = ({data, jsonKey}) => {
    const [options, setOptions] = useState(data.validate.options);
    const [type, setType] = useState(data.validate.options[0].value);
    const {formData, setFormData} = useContext(JsonContext);

    const handleChange = (index) => {
        setType(options[index].value)
    };
    useEffect(() => {
      setFormData(prev => ({...prev, [jsonKey]:type}));
    },[type])
  return (
    <>
    <FormLabel>{data.label}</FormLabel>
    <Tabs isManual isFitted align='center' variant='solid-rounded' onChange={handleChange}>
        <TabList>
        {options.map((opt, i)=><Tab key={i}>{opt.label}</Tab>)}
        </TabList>
    </Tabs>
  </>
  );
};
export default RadioFields;