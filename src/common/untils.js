export function debounce(fun, time) {
  //防抖
  let timer = null;
  return function(...arg) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fun.apply(this, arg);
    }, time);
  };
}
