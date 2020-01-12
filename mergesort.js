let arr1 = [1, 5, 10, 15];
let arr2 = [0, 2, 3, 7, 10];

function merge(array1, array2) {
    let merged = [];

    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;
        console.log(ele1)
        console.log(array1[0])

        let next;
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }

        merged.push(next);
    }

    return merged;
}

merge(arr1, arr2)
