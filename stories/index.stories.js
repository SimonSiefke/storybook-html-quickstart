/* global document */
import { storiesOf } from '@storybook/html'
import { action, configureActions } from '@storybook/addon-actions'

action('button-click')

storiesOf('Demo', module).add('heading', () => '<h1>Hello World</h1>')

storiesOf('Button', module)
  .add('button', () => {
    const button = document.createElement('button')
    button.innerText = 'Hello Button'
    button.addEventListener('click', e => {
      action('button-click')(e)
    })
    return button
  })
  .add('Blue button', () => {
    return '<button style="background:blue;color:white;border-radius:10px;padding:1rem">i\'m blue</button>'
  })
