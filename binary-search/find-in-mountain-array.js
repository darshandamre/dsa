// https://leetcode.com/problems/find-in-mountain-array/
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
function findInMountainArray(target, mountainArr) {
  const peakIndex = peakIndexInMountainArray(mountainArr);

  const firstTry = orderAgnosticBS(mountainArr, target, 0, peakIndex, true);

  if (firstTry !== -1) {
    return firstTry;
  }

  return orderAgnosticBS(
    mountainArr,
    target,
    peakIndex + 1,
    mountainArr.length() - 1,
    false
  );
}

function orderAgnosticBS(arr, target, start, end, isAsc) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target === arr.get(mid)) {
      return mid;
    }

    if (isAsc) {
      if (target < arr.get(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target < arr.get(mid)) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

function peakIndexInMountainArray(arr) {
  let start = 0;
  let end = arr.length() - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr.get(mid) < arr.get(mid + 1)) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}
