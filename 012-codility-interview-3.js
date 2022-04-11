// this one I messed up

module.exports = function promisify(fn, hasCallback = true) {
  if (typeof fn !== "function") {
    return "invalid";
  }

  if (!hasCallback) {
    return fn();
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      function fnCallback(error, ...results) {
        if (error) {
          return reject(error);
        } else {
          return resolve(results.length === 1 ? results[0] : results);
        }
      }

      args.push(fnCallback);

      fn.call(this, ...args);
    });
  };
};
