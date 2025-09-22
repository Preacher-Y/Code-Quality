function getNestedLevel(arr){
    let nest = 0

    for(let el of arr){
        if(Array.isArray(el)){
            nest = 1 + getNestedLevel(el)
        }
    }

    return nest
}
function flattenedNestedArray(arr){
    const numberNested = getNestedLevel(arr);
    return `Nested Level: ${numberNested}\nThe flattened Array: ${arr}`
}
