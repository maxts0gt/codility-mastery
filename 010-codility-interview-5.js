export default function compose(...funcs) {
  if (!funcs.length) {
    return function (...inputs) {
      if (!inputs.length) return null;
      return inputs[0];
    };
  }

  if (funcs.length === 1) {
    const func = funcs[0];
    return func(...inputs);
  }

  const last = funcs.pop();
  funcs.reverse();

  return function (...inputs) {
    const firstOut = last(...inputs);
    const result = funcs.reduce(
      (partialResult, func) => func(partialResult),
      firstOut
    );
    return result;
  };
}
