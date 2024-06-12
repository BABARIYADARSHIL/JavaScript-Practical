let arr1 = [2, 4, 3, 5, 4, 6]
let arr2 = [1, 2, 6, 5, 4, 6]
const mergingArray = (arr1, arr2) => {
    let arr3 = arr1.concat(arr2);
    let Duplicate = arr3.filter((item, index) => arr3.indexOf(item) === index)
    return Duplicate.sort();
    }
    console.log(mergingArray(arr1, arr2))
   
