const ls = window.localStorage;

export default {
  set: function (key, value) {
    if (key && value !== undefined) {
      ls[key] = JSON.stringify(value);
    }
    },
    get: function (key) {
    const value = ls[key];
    if (value !== undefined) {
      return JSON.parse(value);
    }
    },
    remove: function (key) {
    if (ls.hasOwnProperty(key)) {
      delete ls[key];
    }
    },
    empty: function () {
      ls.clear();
    }
}
