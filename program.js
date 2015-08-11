console.log(process.argv.reduce(function(total, num, index) {
    var total = total || 0;
    return index >= 2 ?     total + +(num) : total;
}, 0));
