// return the index of smallest no >= target

const ceiling = (arr, target) => {
  if (target > arr[arr.length - 1]) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return start;
};

const arr = [2, 3, 5, 9, 14, 16, 18];
const target = 15;
const ans = ceiling(arr, target);
console.log(ans);
