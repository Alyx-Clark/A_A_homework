// have 40 minutes
array = [1,2,3,9,5]
target = 6
// return indices of numbers that add to target num 

function indices(array, target){

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; i++){
            if((array[j]+array[i] === target) && (i>j)){
                return [i,j];
            }
        }
    }
}

console.log(indices(array, target));
