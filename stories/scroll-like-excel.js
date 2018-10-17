import React, { Component } from 'react';
import _ from 'underscore';
import { ScrollList } from '../src';

const dummy = _.range(5000);

let timer;

class ScrollLikeExcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromIdx: 0,
    };
    this._scroller = React.createRef();
    this._onScroll = this._onScroll.bind(this);
  }

  render() {
    const { _scroller, _onScroll } = this;
    const { fromIdx } = this.state;
    const topSpace = fromIdx * 60;
    const bottomSpace = 60 * 5000 - topSpace - 60 * 90;
    return (
      <ScrollList
        list={dummy}
        containerStyle={{
          width: '300px',
          height: '400px',
        }}
        innerRefContainer={_scroller}
        fromIdx={fromIdx}
        topSpace={`${topSpace}px`}
        bottomSpace={`${bottomSpace}px`}
        perPage={90}
        onScroll={_onScroll}
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
  }

  _onScroll(event) {
    clearTimeout(timer);
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    timer = setTimeout(
      () => this._draw(scrollTop, scrollHeight, clientHeight),
      1000,
    );
  }

  _draw(scrollTop, scrollHeight, clientHeight) {
    console.log(scrollTop, scrollHeight, clientHeight);
    const topIdx = Math.floor(scrollTop / 60) - 30;
    let fromIdx;
    if (topIdx < 0) {
      fromIdx = 0;
    } else if (topIdx >= 5000 - 90 - 10) {
      fromIdx = 4910;
    } else {
      fromIdx = topIdx;
    }
    this.setState({ fromIdx });
  }
}

export default ScrollLikeExcel;
