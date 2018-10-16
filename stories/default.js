import React, { Component } from 'react';
import _ from 'underscore';
import { ScrollList } from '../src';

const dummy = _.range(50);

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromIdx: 0,
    };
    this._scroller = React.createRef();
    this._onNextPage = this._onNextPage.bind(this);
    this._onPrevPage = this._onPrevPage.bind(this);
  }

  render() {
    const { _scroller, _onNextPage, _onPrevPage } = this;
    const { fromIdx } = this.state;
    return (
      <ScrollList
        list={dummy}
        fromIdx={fromIdx}
        containerStyle={{
          width: '300px',
          height: '400px',
        }}
        innerRefContainer={_scroller}
        onScrollToTop={_onPrevPage}
        onScrollToBottom={_onNextPage}
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

  _onNextPage() {
    console.log('next page');
    let flag;
    this.setState(
      ({ fromIdx: prevFromIdx }) => {
        const nextFromIdx = prevFromIdx + 10;
        const fromIdx = nextFromIdx < 50 ? nextFromIdx : prevFromIdx;
        flag = fromIdx === nextFromIdx;
        return { fromIdx };
      },
      () => {
        if (flag) {
          this._scroller.current.scrollTop = 1;
        }
      },
    );
  }

  _onPrevPage() {
    console.log('prev page');
    let flag;
    this.setState(
      ({ fromIdx: prevFromIdx }) => {
        const nextFromIdx = prevFromIdx - 10;
        const fromIdx = nextFromIdx >= 0 ? nextFromIdx : prevFromIdx;
        flag = fromIdx === nextFromIdx;
        return { fromIdx };
      },
      () => {
        if (flag) {
          this._scroller.current.scrollTop =
            this._scroller.current.scrollHeight -
            this._scroller.current.clientHeight -
            1;
        }
      },
    );
  }
}

export default Default;
