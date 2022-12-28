import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import RenderSegment from './components/RenderSegment';
import JsonContext from './Context/JsonContext';
import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react';

// const UIType = ['Input', 'Group', 'Radio', 'Ignore', 'Select', 'Switch'];

function App() {
  const [data, setData] = useState('');
  const [formData, setFormData] = useState({});
  return (
    <ChakraProvider>
      <JsonContext.Provider value={{ data, setData, formData, setFormData }}>
        <Box>
          <Flex>
            <Box w="100%" h="100vh" padding={5}>
              <JsonEditor />
            </Box>
            <Spacer />
            <Box w="100%" h="100vh" padding={5}>
              <RenderSegment />
            </Box>
          </Flex>
        </Box>
      </JsonContext.Provider>
    </ChakraProvider>
  );
}

export default App;
