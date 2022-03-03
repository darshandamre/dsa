// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function searchRange(nums, target) {
  let ans = [-1, -1];

  ans[0] = search(nums, target, true);

  if (ans[0] !== -1) {
    ans[1] = search(nums, target, false);
  }

  return ans;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {boolean} findStartIndex
 * @return {number}
 */

function search(nums, target, findStartIndex) {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      ans = mid;

      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
}
