import { TabList, TabPanel, TabPanels, Tabs, Tab, FormLabel, Tooltip } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import JsonContext from "../Context/JsonContext";
import { InfoIcon } from "@chakra-ui/icons";

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
    const [type, setType] = useState(data.validate.defaultValue);
    const {formData, setFormData} = useContext(JsonContext);

    const handleChange = (index) => {
        setType(options[index].value)
    };
    useEffect(() => {
      setFormData(prev => ({...prev, [jsonKey]:type}));
    },[])
    useEffect(() => {
      setFormData(prev => ({...prev, [jsonKey]:type}));
    },[type])
  return (
    <box marginY={3}>
    <FormLabel>{data.label}</FormLabel>
    <Tabs isManual isFitted align='center' variant='solid-rounded' onChange={handleChange} defaultIndex={options.findIndex(item => (item.value===type))}>
        <TabList>
        {options.map((opt, i)=><Tab key={i}>{opt.label}{opt.description && <Tooltip label={opt.description} fontSize='sm'><InfoIcon /></Tooltip>}</Tab>)}
        </TabList>
    </Tabs>
  </box>
  );
};
export default RadioFields;