import React from 'react';
import { storiesOf } from '@storybook/react';
import ControllFromIdxAndPerPage from './controll-from-idx-and-per-page';
import Default from './default';

storiesOf('Basic', module)
  .add('default', () => <Default />)
  .add('controll fromIdx and perPage', () => <ControllFromIdxAndPerPage />);
