function getSum(...args){
    return args.flat().filter(el=>typeof el === 'number').reduce((a,b)=> a+b,0)
}