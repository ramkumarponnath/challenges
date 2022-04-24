function all(arr, call) {
    if(arr.length === 0) return true;
    else {
        return call(arr[arr.length - 1]) && all(arr.slice(0, arr.length - 1), call);
    }
}

all([1,2,8], function(num){
	return num < 7;
});

all([1,2,6], function(num){
	return num < 7;
});