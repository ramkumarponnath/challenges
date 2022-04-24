function replicate(times, number) {
    if(times <= 0) {
        return [];
    } else {
        return [number].concat(replicate(times-1, number));
    }
}

console.log(replicate(3,5));