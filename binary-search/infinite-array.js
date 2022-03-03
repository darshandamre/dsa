// https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

let arr = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170];
let target = 140;
console.log(findInInfiniteArray(arr, target));

// arr is an infinite array
function findInInfiniteArray(arr, target) {
  let start = 0;
  let end = 1;

  while (target > arr[end]) {
    let temp = end + 1;
    end = end + (end - start + 1) * 2;
    start = temp;
  }

  return binarySearch(arr, target, start, end);
}

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
