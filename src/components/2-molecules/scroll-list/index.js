import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollList extends Component {
  constructor(props) {
    super(props);
    this._onScroll = this._onScroll.bind(this);
  }

  render() {
    const { _onScroll } = this;
    const { list, containerStyle, perPage, fromIdx, renderItem } = this.props;
    const currentPage = list.slice(fromIdx, fromIdx + perPage);
    return (
      <div style={{ ...containerStyle, overflow: 'auto' }} onScroll={_onScroll}>
        {currentPage.map(renderItem)}
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
  perPage: 10,
  fromIdx: 0,
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
  onScroll: PropTypes.func,
  onScrollToTop: PropTypes.func,
  onScrollToBottom: PropTypes.func,
  renderItem: PropTypes.func,
};

export default ScrollList;
