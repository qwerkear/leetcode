/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let j = 0
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j]
        j++
    }
    nums1.sort((a, b) => a - b)

};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

//I'm assuming below is how you're supposed to do it without just calling .sort() such as above
//This seems less readable, but is probably the more correct solution since you can explain everything
//I couldn't go into too much detail about how exactly .sort() works under the hood in an interview, but below is easy to explain

var mergeBetter = function (nums1, m, nums2, n) {
    let modifyingIndex = m + n - 1;
    m = m - 1
    n = n - 1

    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[modifyingIndex] = nums1[m]
            modifyingIndex--
            m--
        } else {
            nums1[modifyingIndex] = nums2[n]
            modifyingIndex--
            n--
        }
    }

    while (n >= 0) {
        nums1[modifyingIndex] = nums2[n]
        n--
        modifyingIndex--
    }
}