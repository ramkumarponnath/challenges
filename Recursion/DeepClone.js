function deepClone(obj) {
    let cloneObj = {...obj};
    for(let key in obj) {
        cloneObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
    return cloneObj;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};

var clone = deepClone(nestedObject);
console.log(clone);