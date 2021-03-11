
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (matrix !== undefined) {  
    matrix.forEach((item, index) => {
      index % 2 == 0 ? item.forEach(i => res.push(i)) : item.forEach((e,i) => res.push(item[item.length - i - 1]));
    })
  }
  return res;
}
