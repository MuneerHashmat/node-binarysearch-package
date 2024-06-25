const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const ans = array[mid];

    if (ans === target) {
      return mid;
    } else if (ans < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

module.exports = binarySearch;
