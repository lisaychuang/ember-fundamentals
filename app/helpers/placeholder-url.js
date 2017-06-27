import Ember from 'ember';

export function placeholderUrl(_, hash = {}) {
  let { w, h } = hash; //pattern matching
  w = Math.max(10, w|| 10);
  h = Math.max(10, h || 10);
  return `http://placekitten.com/${w}/${h}`;
}

export default Ember.Helper.helper(placeholderUrl);
