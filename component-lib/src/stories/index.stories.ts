import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/angular/demo';
import { ButtonComponent } from 'src/app/button/button.component'

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add(
    'button',
    () => ({
      component: ButtonComponent,
      props: {
        click: action('This was clicked OMG')
      },
    }),
    { notes: 'My Angular Button' }
  )
  .add(
    'button with link to another story',
    () => ({
      component: ButtonComponent,
      props: {
        text: 'Go to Welcome Story',
        click: linkTo('Welcome'),
      },
    })
  )
