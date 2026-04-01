function isleap(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const year = isleap(2022);
console.log(year);