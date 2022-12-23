import React, { useState } from 'react'
import './App.css';
import { Divider, Grid, Segment, Icon } from 'semantic-ui-react'
import JsonEditor from './JsonEditor';
import RenderSegment from './RenderSegment';
import JsonContext from './Context/JsonContext';


// const data = {
//   "sort": 1,
//   "label": "Pizza Name",
//   "description": "enter pizza name",
//   "validate": {
//     "required": true,
//     "immutable": false
//   },
//   "jsonKey": "name",
//   "uiType": "Input",
//   "icon": "",
//   "level": 0,
//  "placeholder": ""
// }

function App() {
  const [data, setData] = useState(JSON.stringify({
    "sort": 1,
    "label": "Pizza Name",
    "description": "enter pizza name",
    "validate": {
      "required": true,
      "immutable": false
    },
    "jsonKey": "name",
    "uiType": "Input",
    "icon": "",
    "level": 0,
   "placeholder": ""
  }));
  return (
    <JsonContext.Provider value={{data, setData}}>
      <div className="App">
          <Segment placeholder>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <JsonEditor />
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
          <RenderSegment />
        </Grid.Column>
      </Grid>

      <Divider vertical>
        <Icon name="arrow circle right" size='big' />
      </Divider>
    </Segment>
      </div>
    </JsonContext.Provider>
  );
}

export default App;
