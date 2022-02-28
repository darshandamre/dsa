// return the index: greatest number <= target

const floor = (arr, target) => {
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

  return end;
};

const arr = [2, 3, 5, 9, 14, 16, 18];
const target = 4;
const ans = floor(arr, target);
console.log(ans);
