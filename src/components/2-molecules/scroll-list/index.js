import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollList extends Component {
  render() {
    const { list, containerStyle, perPage, pageIdx, renderItem } = this.props;
    const currentPage = list.slice(pageIdx * perPage, (pageIdx + 1) * perPage);
    return (
      <div style={{ ...containerStyle, overflow: 'auto' }}>
        {currentPage.map(renderItem)}
      </div>
    );
  }
}

ScrollList.defaultProps = {
  list: [],
  containerStyle: {},
  perPage: 10,
  pageIdx: 0,
  renderItem: (item, idx, currentPage) => {},
};

ScrollList.propTypes = {
  list: PropTypes.array,
  containerStyle: PropTypes.object,
  perPage: PropTypes.number,
  pageIdx: PropTypes.number,
  renderItem: PropTypes.func,
};

export default ScrollList;
