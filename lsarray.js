var lsarray = new Object();

lsarray.store = function(name, arr) {
    if (arr != null) {
        localStorage[name] = JSON.stringify(arr);
    } else {
        return JSON.parse(localStorage[name]);
    }
};

lsarray.shift = function(name) {
    var arr = JSON.parse(localStorage[name]);
    var item = arr.shift();
    localStorage[name] = JSON.stringify(arr);
    return item;
};

lsarray.push = function(name, value) {
    var arr = JSON.parse(localStorage[name]);
    arr.push(value);
    localStorage[name] = JSON.stringify(arr);
};
