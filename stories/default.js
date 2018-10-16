import React from 'react';
import _ from 'underscore';
import { ScrollList } from '../src';

const dummy = _.range(10);

const Default = () => (
  <ScrollList
    list={dummy}
    containerStyle={{
      width: '300px',
      height: '400px',
    }}
    renderItem={n => (
      <div
        key={n}
        style={{
          height: '60px',
          boxSizing: 'border-box',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {n}
      </div>
    )}
  />
);

export default Default;
