import React from 'react'
import ReactDOM from 'react-dom'

export default function mount(components = {}) {
  document.addEventListener('DOMContentLoaded', () => {
    const mountPoints = document.querySelectorAll('[data-react-component]')
    mountPoints.forEach((mountPoint) => {
      // Find the component
      const dataset = (mountPoint as HTMLElement).dataset
      const componentName = dataset['reactComponent']
      const Component = components[componentName]
      // If the component exists parse the JSON contained in dataset['props'] and then render it
      if (Component) {
        const props = JSON.parse(dataset['props'])
        ReactDOM.render(<Component {...props} />, mountPoint)
      } else {
        console.log(
          'WARNING: No component found for: ',
          dataset.reactComponent,
          components,
        )
      }
    })
  })
}