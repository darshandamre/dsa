const orderAgnosticBS = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  const isAsc = arr[start] < arr[end];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    if (isAsc) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else if (target > arr[mid]) {
        start = mid + 1;
      }
    } else {
      if (target < arr[mid]) {
        start = mid + 1;
      } else if (target > arr[mid]) {
        end = mid - 1;
      }
    }
  }

  return -1;
};

// const arr = [-18, -12, -4, 0, 2, 3, 4, 15, 16, 18, 22, 45, 89];
const arr = [99, 80, 75, 22, 11, 10, 5, 2, -3];
const target = 10;
const ans = orderAgnosticBS(arr, target);
console.log(ans);
