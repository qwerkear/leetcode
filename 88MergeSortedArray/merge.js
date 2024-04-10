/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = 0
    for(let i = m; i < nums1.length; i++){
        nums1[i] = nums2[j]
        j++
    }
    nums1.sort((a,b) => a - b)

};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)

//I'm assuming below is how you're supposed to do it without just calling .sort() such as above
//This seems less readable, but is probably the more correct solution since you can explain everything
//I couldn't go into too much detail about how exactly .sort() works under the hood in an interview, but below is easy to explain

var mergeButWithLessMemory = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};