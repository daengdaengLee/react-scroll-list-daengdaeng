import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { _slice } from '../../../assets/js/utils';

const _makeCurrentList = (list, fromIdx, perPage) => {
  const toIdx =
    _.isNull(perPage) || _.isNull(fromIdx) ? null : fromIdx + perPage;
  return _slice(list, fromIdx, toIdx);
};

class ScrollList extends Component {
  constructor(props) {
    super(props);
    this._onScroll = this._onScroll.bind(this);
  }

  render() {
    const { _onScroll } = this;
    const {
      list,
      containerStyle,
      perPage,
      fromIdx,
      innerRefContainer,
      renderItem,
    } = this.props;
    const currentList = _makeCurrentList(list, fromIdx, perPage);
    return (
      <div
        ref={innerRefContainer}
        style={{ ...containerStyle, overflow: 'auto' }}
        onScroll={_onScroll}
      >
        {currentList.map(renderItem)}
      </div>
    );
  }

  _onScroll(event) {
    const {
      target: { scrollTop, scrollHeight, clientHeight },
    } = event;
    const { onScroll, onScrollToTop, onScrollToBottom } = this.props;
    onScroll(event);
    if (scrollTop <= 0) {
      onScrollToTop();
    } else if (scrollTop + clientHeight >= scrollHeight) {
      onScrollToBottom();
    }
  }
}

ScrollList.defaultProps = {
  list: [],
  containerStyle: {},
  perPage: null,
  fromIdx: null,
  innerRefContainer: el => {},
  onScroll: event => {},
  onScrollToTop: () => {},
  onScrollToBottom: () => {},
  renderItem: (item, idx, currentPage) => {},
};

ScrollList.propTypes = {
  list: PropTypes.array,
  containerStyle: PropTypes.object,
  perPage: PropTypes.number,
  fromIdx: PropTypes.number,
  innerRefContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onScroll: PropTypes.func,
  onScrollToTop: PropTypes.func,
  onScrollToBottom: PropTypes.func,
  renderItem: PropTypes.func,
};

export default ScrollList;
