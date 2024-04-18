/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let h = citations.length
    while( h >= 0){
        let hCount = 0
        for(let i = 0; i < citations.length; i++){
            if(citations[i] >= h){
                hCount++
            }
        }
        if(hCount >= h){
            return h
        }
        h--
    }
};

hIndex([3,0,6,1,5])

//This appears slow in leetcode, maybe I should sort.