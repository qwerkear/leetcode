/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let match
    students.reverse()
    sandwiches.reverse()
    do {
        match = false
        for (let i = 0; i < students.length; i++) {


            let currentStudent = students.pop()
            let currentSandwich = sandwiches[sandwiches.length - 1]

            if (currentStudent == currentSandwich) {
                sandwiches.pop()
                match = true
            } else {
                students.unshift(currentStudent)
            }
        }
    } while (match)

    return students.length
};

//I wrote this solution with shift() instead of pop(), but if you reverse the array,
//you get to use pop which is O(1) where shift is O(n) due to the re-indexing.
//Makes this a hair faster on submission. Probably even faster to just use indexes.

let students = [1, 1, 1, 0, 0, 1]
let sandwiches = [1, 0, 0, 0, 1, 1]

console.log(countStudents(students, sandwiches))
