import React from 'react'
import TextInputField from './components/TextInputField'

function RenderSegment({UISchema}) {
  return (
    <div>
        <TextInputField data={UISchema} />
    </div>
  )
}

export default RenderSegment