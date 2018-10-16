import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollList extends Component {
  render() {
    const { list, containerStyle, perPage, fromIdx, renderItem } = this.props;
    const currentPage = list.slice(fromIdx, fromIdx + perPage);
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
  fromIdx: 0,
  renderItem: (item, idx, currentPage) => {},
};

ScrollList.propTypes = {
  list: PropTypes.array,
  containerStyle: PropTypes.object,
  perPage: PropTypes.number,
  fromIdx: PropTypes.number,
  renderItem: PropTypes.func,
};

export default ScrollList;
