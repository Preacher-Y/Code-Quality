function remoceDuplicates(arr){
    return [... new Set(arr)] 
}

console.log(remoceDuplicates([1,2,3,4,1,2,9]))