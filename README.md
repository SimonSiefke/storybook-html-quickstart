# Storybook Quickstart HTML

## initialize

```bash
npm i -g @storybook/cli@alpha
getstorybook --html
npm run storybook
```

## add a blue button

```js
import { storiesOf } from '@storybook/html'

storiesOf('Demo', module).add('heading', () => '<h1>Hello World</h1>')

storiesOf('Button', module)
  .add('button', () => {
    const button = document.createElement('button')
    button.innerText = 'Hello Button'
    // eslint-disable-next-line no-console
    button.addEventListener('click', e => console.log(e))
    return button
  })
  .add('Blue button', () => {
    return '<button style="background:blue;color:white;border-radius:10px;padding:1rem">i\'m blue</button>'
  })
```

## Deploy
