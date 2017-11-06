/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
  let target;
  // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop;
  } else if (element.currentStyle) {
    target = element.currentStyle[attr];
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr];
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}

/**
 * 滚动到指定位置
 */
export const scrollPosition = scroll => {
  let top = scroll[location.pathname];
  if (top != undefined) {
    setTimeout(function() {
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;
    }, 100);
  }
}