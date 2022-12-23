import React from 'react'
import './App.css';
import { Divider, Grid, Segment, Icon } from 'semantic-ui-react'
import JsonEditor from './JsonEditor';
import RenderSegment from './RenderSegment';

const data = {
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
}

function App() {
  return (
    <div className="App">
        <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <JsonEditor />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <RenderSegment UISchema={data} />
      </Grid.Column>
    </Grid>

    <Divider vertical>
      <Icon name="arrow circle right" size='big' />
    </Divider>
  </Segment>
    </div>
  );
}

export default App;
