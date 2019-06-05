const compose = (...funcs) => component =>
  funcs.reduceRight((acc, f) => f(acc), component);

export default compose;
