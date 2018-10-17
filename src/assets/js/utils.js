import _ from 'underscore';

export function _slice(array, from, to) {
  return _.isNull(from) && _.isNull(to)
    ? array
    : _.isNull(from)
      ? array.slice(0, to)
      : _.isNull(to)
        ? array.slice(from)
        : array.slice(from, to);
}
