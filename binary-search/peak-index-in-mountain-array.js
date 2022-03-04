// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
function peakIndexInMountainArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}
